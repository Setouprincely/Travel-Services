"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { CheckCircle, AlertCircle, Loader2 } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ConfirmPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const confirmEmail = async () => {
      const token = searchParams.get('token');
      const type = searchParams.get('type');

      if (!token || type !== 'signup') {
        setStatus('error');
        setMessage('Invalid confirmation link.');
        return;
      }

      try {
        // In a real implementation, you would verify the token with Supabase
        // For now, we'll simulate a successful confirmation
        await new Promise(resolve => setTimeout(resolve, 2000));
        setStatus('success');
        setMessage('Your email has been confirmed successfully!');
      } catch (error) {
        setStatus('error');
        setMessage('Failed to confirm email. Please try again.');
      }
    };

    confirmEmail();
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            {status === 'loading' && (
              <>
                <Loader2 className="w-16 h-16 text-blue-600 mx-auto mb-4 animate-spin" />
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Confirming Your Email
                </h1>
                <p className="text-gray-600">
                  Please wait while we confirm your email address...
                </p>
              </>
            )}

            {status === 'success' && (
              <>
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Email Confirmed!
                </h1>
                <p className="text-gray-600 mb-6">
                  {message}
                </p>
                <Link href="/auth/login">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Continue to Login
                  </Button>
                </Link>
              </>
            )}

            {status === 'error' && (
              <>
                <AlertCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Confirmation Failed
                </h1>
                <p className="text-gray-600 mb-6">
                  {message}
                </p>
                <div className="space-y-3">
                  <Link href="/auth/register">
                    <Button variant="outline" className="w-full">
                      Try Registering Again
                    </Button>
                  </Link>
                  <Link href="/auth/login">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Back to Login
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}