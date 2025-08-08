"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Password reset instructions have been sent to your email.");
      } else {
        setStatus("error");
        setMessage("Failed to process your request. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[800px] h-[800px] opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full filter blur-3xl animate-pulse" />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 relative"
      >
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="/images/logo.png"
            alt="Patrick Travel"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Reset your password
          </h2>
          <p className="mt-2 text-center text-sm text-blue-200">
            Enter your email address and we'll send you instructions to reset your password.
          </p>
        </div>

        <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-lg shadow-xl p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-blue-100">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-blue-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white/10 text-white"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <Button
                type="submit"
                variant="premium"
                className="w-full"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Reset Password"}
              </Button>
            </div>

            {message && (
              <div className={`mt-4 text-sm ${
                status === "success" ? "text-green-400" : "text-red-400"
              }`}>
                {message}
              </div>
            )}
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-blue-300/30" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-blue-100">
                  Or go back to
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <Link href="/auth/login">
                <Button variant="ghost" className="text-blue-200 hover:text-white">
                  Sign in
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
