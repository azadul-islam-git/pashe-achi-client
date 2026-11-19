"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { authClient } from "@/lib/auth-client";

import { FaTrash, FaTimes, FaExclamationTriangle } from "react-icons/fa";
import { getTokenFromClient } from "@/lib/getTokenFromClient";

interface IEvent {
  _id: string;
  title: string;
  description: string;
  eventType: string;
  thumbnail: string;
  location: string;
  eventDate: string;
  creatorEmail: string;
}

const DeleteJoinedEvent = ({ event }: { event: IEvent }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const router = useRouter();

  // Get logged-in user session
  const { data: session } = authClient.useSession();

  const handleDelete = async () => {
    if (!session?.user?.email) {
      toast.error("Please login first");
      return;
    }

    setIsDeleting(true);

    const token = await getTokenFromClient();

    const response = await fetch(`http://localhost:8000/events/${event._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        email: session.user.email,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      toast.error(result.message || "Failed to delete event");
      setIsDeleting(false);
      return;
    }

    toast.success("ইভেন্টটি সফলভাবে মুছে ফেলা হয়েছে!");

    dialogRef.current?.close();

    router.refresh();
  };

  return (
    <>
      {/* Delete Button */}
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-red-100 px-3 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-200 dark:bg-red-950/40 dark:text-red-400 dark:hover:bg-red-950/70"
      >
        <FaTrash />
        Delete
      </button>

      {/* Confirmation Modal */}
      <dialog ref={dialogRef} className="modal">
        <div className="modal-box max-w-md rounded-3xl border border-red-100 bg-white p-6 text-[#1F2937] dark:border-white/10 dark:bg-[#14251E] dark:text-gray-100">
          {/* Close Button */}
          <div className="flex justify-end">
            <button
              type="button"
              disabled={isDeleting}
              onClick={() => dialogRef.current?.close()}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition hover:bg-red-100 hover:text-red-600 disabled:cursor-not-allowed dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-red-950/40 dark:hover:text-red-400"
              aria-label="Close modal"
            >
              <FaTimes />
            </button>
          </div>

          {/* Warning Icon */}
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-2xl text-red-600 dark:bg-red-950/40 dark:text-red-400">
            <FaExclamationTriangle />
          </div>

          {/* Modal Content */}
          <div className="text-center">
            <h2 className="text-xl font-extrabold sm:text-2xl">
              Delete Your Event?
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-500 dark:text-gray-400">
              Are you sure you want to delete{" "}
              <span className="font-bold text-gray-800 dark:text-gray-200">
                {event.title}
              </span>
              ? This action cannot be undone.
            </p>
          </div>

          {/* Modal Actions */}
          <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-center">
            <button
              type="button"
              disabled={isDeleting}
              onClick={() => dialogRef.current?.close()}
              className="btn h-12 rounded-xl border border-gray-200 bg-white px-6 font-bold text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleDelete}
              disabled={isDeleting}
              className="btn h-12 rounded-xl border-none bg-red-600 px-6 font-bold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <FaTrash />
              {isDeleting ? "Deleting..." : "Delete Event"}
            </button>
          </div>
        </div>

        {/* Click Outside to Close */}
        <form method="dialog" className="modal-backdrop">
          <button type="submit" disabled={isDeleting}>
            close
          </button>
        </form>
      </dialog>
    </>
  );
};

export default DeleteJoinedEvent;
