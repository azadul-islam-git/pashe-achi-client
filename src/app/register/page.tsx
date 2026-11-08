"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import {
  FaGoogle,
  FaGithub,
  FaArrowRight,
  FaUser,
  FaImage,
} from "react-icons/fa";
import { MdEmail, MdLockOutline } from "react-icons/md";

const RegisterPage = () => {
  const handleEmailSignUp = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
      email: string;
      password: string;
    };
    console.log(user);

    const { data, error } = await authClient.signUp.email({
      ...user,
    });

    if (data) {
      console.log(data);
      redirect("/");
    }
    if (error) {
      console.log(error);
    }
  };

  return (
    <main className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden bg-base-200 px-4 py-12 sm:px-6">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative w-full max-w-md">
        {/* Brand */}
        <div className="mb-8 text-center">
          <h1 className="inline-flex items-center gap-2">
            <span className="text-3xl font-extrabold tracking-tight text-base-content sm:text-4xl">
              পাশে আছি
            </span>

            <span className="text-3xl font-extrabold text-primary sm:text-4xl">
              ফাউন্ডেশন
            </span>
          </h1>

          <p className="mt-3 text-sm text-base-content/60 sm:text-base">
            প্রতিটি ভালো কাজ শুরু হোক একজনের পাশে দাঁড়িয়ে।
          </p>
        </div>

        {/* Register Card */}
        <div className="auth-fade-in rounded-3xl border border-base-300 bg-base-100 p-6 shadow-xl shadow-black/5 sm:p-9">
          <div className="mb-7">
            <h1 className="text-2xl font-bold text-base-content sm:text-3xl">
              Create an account
            </h1>

            <p className="mt-2 text-sm text-base-content/60">
              Join us and become part of something meaningful.
            </p>
          </div>

          {/* Register Form */}
          <form onSubmit={handleEmailSignUp} className="space-y-4">
            {/* Name */}
            <div className="form-control">
              <label
                htmlFor="name"
                className="mb-2 text-sm font-semibold text-base-content"
              >
                Full Name
              </label>

              <label className="input input-bordered flex w-full items-center gap-3 rounded-xl bg-base-100 transition-all duration-200 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                <FaUser className="text-base-content/40" />

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  autoComplete="name"
                  required
                  className="grow"
                />
              </label>
            </div>

            {/* Email */}
            <div className="form-control">
              <label
                htmlFor="email"
                className="mb-2 text-sm font-semibold text-base-content"
              >
                Email Address
              </label>

              <label className="input input-bordered flex w-full items-center gap-3 rounded-xl bg-base-100 transition-all duration-200 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                <MdEmail className="text-xl text-base-content/40" />

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="grow"
                />
              </label>
            </div>

            {/* Photo URL */}
            <div className="form-control">
              <label
                htmlFor="photoURL"
                className="mb-2 text-sm font-semibold text-base-content"
              >
                Profile Photo URL
              </label>

              <label className="input input-bordered flex w-full items-center gap-3 rounded-xl bg-base-100 transition-all duration-200 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                <FaImage className="text-base-content/40" />

                <input
                  id="photoURL"
                  name="photoURL"
                  type="url"
                  placeholder="https://example.com/photo.jpg"
                  autoComplete="url"
                  required
                  className="grow"
                />
              </label>
            </div>

            {/* Password */}
            <div className="form-control">
              <label
                htmlFor="password"
                className="mb-2 text-sm font-semibold text-base-content"
              >
                Password
              </label>

              <label className="input input-bordered flex w-full items-center gap-3 rounded-xl bg-base-100 transition-all duration-200 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                <MdLockOutline className="text-xl text-base-content/40" />

                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create a strong password"
                  autoComplete="new-password"
                  minLength={6}
                  required
                  className="grow"
                />
              </label>

              <p className="mt-2 text-xs text-base-content/50">
                Use at least 6 characters.
              </p>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="btn btn-primary group mt-2 w-full rounded-xl text-base font-bold shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[0.98]"
            >
              Create Account
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-base-300" />

            <span className="text-xs font-medium uppercase tracking-wider text-base-content/40">
              Or sign up with
            </span>

            <div className="h-px flex-1 bg-base-300" />
          </div>

          {/* Social Registration */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="btn btn-outline rounded-xl border-base-300 bg-base-100 text-base-content hover:border-base-content/20 hover:bg-base-200"
            >
              <FaGoogle className="text-lg" />
              Google
            </button>

            <button
              type="button"
              className="btn btn-outline rounded-xl border-base-300 bg-base-100 text-base-content hover:border-base-content/20 hover:bg-base-200"
            >
              <FaGithub className="text-lg" />
              GitHub
            </button>
          </div>

          {/* Login Link */}
          <p className="mt-7 text-center text-sm text-base-content/60">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-bold text-primary transition-colors hover:underline"
            >
              Login Here
            </Link>
          </p>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-base-content/40">
          Every act of kindness makes a difference.
        </p>
      </div>
    </main>
  );
};

export default RegisterPage;
