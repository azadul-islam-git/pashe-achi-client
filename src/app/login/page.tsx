"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaGoogle, FaGithub, FaArrowRight } from "react-icons/fa";
import { MdEmail, MdLockOutline } from "react-icons/md";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailLogin = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    setIsLoading(true);
    const toastId = toast.loading("Signing in...");

    const { data, error } = await authClient.signIn.email({
      ...user,
    });

    if (error) {
      toast.error(error.message || "Failed to sign in. Please try again.", {
        id: toastId,
      });

      setIsLoading(false);
      return;
    }

    if (data) {
      toast.success("Login successful!", {
        id: toastId,
      });
      redirect("/");
    }
    setIsLoading(false);
  };

  const handleGoogleSingIn = async () => {
    const toastId = toast.loading("Signing in with Google...");
    const { error } = await authClient.signIn.social({
      provider: "google",
    });
    if (error) {
      toast.error(error.message || "Google sign-in failed. Please try again.", {
        id: toastId,
      });
    }
  };

  const handleGithubSignIn = async () => {
    const toastId = toast.loading("Signing in with GitHub...");
    const { error } = await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });
    if (error) {
      toast.error(error.message || "GitHub sign-in failed. Please try again.", {
        id: toastId,
      });
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

        {/* Login Card */}
        <div className="auth-fade-in rounded-3xl border border-base-300 bg-base-100 p-6 shadow-xl shadow-black/5 sm:p-9">
          <div className="mb-7">
            <h1 className="text-2xl font-bold text-base-content sm:text-3xl">
              Welcome back!
            </h1>

            <p className="mt-2 text-sm text-base-content/60">
              Sign in to continue making a difference.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleEmailLogin} className="space-y-5">
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
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  className="grow"
                />
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary group w-full rounded-xl text-base font-bold shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[0.98]"
            >
              {isLoading ? "Signing in..." : "Login"}

              {!isLoading && (
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-base-300" />

            <span className="text-xs font-medium uppercase tracking-wider text-base-content/40">
              Or continue with
            </span>

            <div className="h-px flex-1 bg-base-300" />
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={handleGoogleSingIn}
              className="btn btn-outline rounded-xl border-base-300 bg-base-100 text-base-content transition-all duration-200 hover:-translate-y-0.5 hover:border-base-content/20 hover:bg-base-200 active:scale-[0.98]"
            >
              <FaGoogle className="text-lg" />
              Google
            </button>

            <button
              type="button"
              onClick={handleGithubSignIn}
              className="btn btn-outline rounded-xl border-base-300 bg-base-100 text-base-content transition-all duration-200 hover:-translate-y-0.5 hover:border-base-content/20 hover:bg-base-200 active:scale-[0.98]"
            >
              <FaGithub className="text-lg" />
              GitHub
            </button>
          </div>

          {/* Register Link */}
          <p className="mt-7 text-center text-sm text-base-content/60">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-bold text-primary transition-colors hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-base-content/40">
          By continuing, you support a community built on kindness.
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
