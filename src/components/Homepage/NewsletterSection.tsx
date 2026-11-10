"use client";

import { useState } from "react";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import toast from "react-hot-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("অনুগ্রহ করে আপনার ইমেইল দিন");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("সঠিক ইমেইল ঠিকানা দিন");
      return;
    }

    toast.success("সাবস্ক্রাইব করার জন্য ধন্যবাদ!");

    setEmail("");
  };

  return (
    <section className="bg-base-200 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-emerald-950 px-6 py-12 text-white md:px-12 md:py-16">
          {/* Decorative Background */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-emerald-950">
              <FaEnvelope className="text-2xl" />
            </div>

            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              আমাদের সাথে <span className="text-yellow-400">যুক্ত থাকুন</span>
            </h2>

            <p className="mb-8 text-base leading-7 text-emerald-100/80 md:text-lg">
              আমাদের নতুন কার্যক্রম, মানবিক উদ্যোগ এবং স্বেচ্ছাসেবার সুযোগ
              সম্পর্কে জানতে আপনার ইমেইল সাবস্ক্রাইব করুন।
            </p>

            {/* Subscription Form */}
            <form
              onSubmit={handleSubscribe}
              className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="আপনার ইমেইল ঠিকানা"
                className="input input-lg w-full flex-1 border-emerald-800 bg-emerald-900/70 text-white placeholder:text-emerald-100/50 focus:border-yellow-400 focus:outline-none"
              />

              <button
                type="submit"
                className="btn btn-lg border-none bg-yellow-400 text-emerald-950 transition-colors duration-200 hover:bg-yellow-300"
              >
                সাবস্ক্রাইব
                <FaArrowRight />
              </button>
            </form>

            <p className="mt-4 text-sm text-emerald-100/60">
              আমরা আপনার ব্যক্তিগত তথ্যের গোপনীয়তা রক্ষা করি।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
