"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { useAuth } from "@/contexts/auth-context";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await login(formData.email, formData.password);
      router.push('/auth/profile');
    } catch (error) {
      setErrors({
        form: "Invalid credentials. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full space-y-8"
        >
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="/images/logo.png"
              alt="Patrick Travel"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-forest-600">
              Welcome back to Patrick Travel Services
            </p>
          </div>

          <div className="mt-8 bg-white shadow-xl rounded-lg p-8 border border-gray-200">
            {errors.form && (
              <div className="mb-4 p-3 rounded bg-red-50 border border-red-200 text-red-600 text-sm">
                {errors.form}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <FormField
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
              />

              <FormField
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleInputChange}
                error={errors.password}
              />

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <Link href="/auth/forgot-password" className="text-forest-600 hover:text-forest-500">
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-forest-600 hover:bg-forest-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing in..." : "Sign in"}
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or
                  </span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link href="/auth/register" className="text-forest-600 hover:text-forest-500">
                  Don't have an account? <span className="font-semibold">Sign up</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
