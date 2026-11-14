"use client";

import React, { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { FaUsers } from "react-icons/fa";
import type { IEvent } from "@/components/shared/EventCard";

const JoinEventButton = ({ event }: { event: IEvent }) => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [isJoining, setIsJoining] = useState(false);

  const handleJoinEvent = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!session) {
      toast.error("ইভেন্টে যোগ দিতে প্রথমে লগইন করুন");
      router.push("/signin");
      return;
    }

    const joinedEvent = {
      eventId: event._id,
      event: {
        title: event.title,
        description: event.description,
        eventType: event.eventType,
        thumbnail: event.thumbnail,
        location: event.location,
        eventDate: event.eventDate,
      },
      user: {
        name: session.user.name,
        email: session.user.email,
      },
      joinedAt: new Date(),
    };

    setIsJoining(true);

    const response = await fetch("http://localhost:8000/joinedEvents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(joinedEvent),
    }).catch(() => null);

    if (!response) {
      setIsJoining(false);
      toast.error("সার্ভারের সঙ্গে সংযোগ করা যাচ্ছে না");
      return;
    }

    const result = await response.json().catch(() => ({}));

    setIsJoining(false);

    if (response.status === 409) {
      toast.error("আপনি ইতোমধ্যে এই ইভেন্টে যোগ দিয়েছেন");
      return;
    }

    if (!response.ok) {
      toast.error(result.message || "ইভেন্টে যোগ দেওয়া যায়নি");
      return;
    }

    toast.success("সফলভাবে ইভেন্টে যোগ দিয়েছেন!");
    redirect("/joined-events");
  };

  return (
    <button
      type="button"
      onClick={handleJoinEvent}
      disabled={isPending || isJoining}
      className="btn h-14 w-full rounded-xl border-none bg-[#FBBF24] text-base font-extrabold text-[#1F2937] shadow-md shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#F5B91A] disabled:cursor-not-allowed disabled:opacity-60"
    >
      <FaUsers />
      {isPending
        ? "অপেক্ষা করুন..."
        : isJoining
          ? "যোগ দিচ্ছেন..."
          : "Join Event"}
    </button>
  );
};

export default JoinEventButton;
