"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { WhatsAppWidget } from "@/components/ui/whatsapp-widget";
import { AnimatedButton } from "@/components/ui/animated-button";
import { useAuth } from "@/contexts/auth-context";

export default function ProfilePage() {
  const router = useRouter();
  const { user, loading, logout } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
    }
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <p className="text-center text-gray-600">Loading...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Profile</h1>
            <AnimatedButton onClick={logout}>
              Log Out
            </AnimatedButton>
          </div>

          <div className="space-y-6">
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-700">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500">Full Name</label>
                  <p className="text-gray-800">{user.firstName} {user.lastName}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Email</label>
                  <p className="text-gray-800">{user.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Country</label>
                  <p className="text-gray-800">{user.country}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Nationality</label>
                  <p className="text-gray-800">{user.nationality}</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-700">Additional Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500">Date of Birth</label>
                  <p className="text-gray-800">{user.dateOfBirth}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Place of Birth</label>
                  <p className="text-gray-800">{user.placeOfBirth}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Gender</label>
                  <p className="text-gray-800">{user.gender}</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-700">Document Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500">Document Type</label>
                  <p className="text-gray-800">{user.documentType}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Document Number</label>
                  <p className="text-gray-800">{user.documentNumber}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Issue Date</label>
                  <p className="text-gray-800">{user.documentIssueDate}</p>
                </div>
              </div>
            </section>

            {user.hasHandicap && (
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-700">Special Needs</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Handicap Details</label>
                  <p className="text-gray-800">{user.handicapDetails}</p>
                </div>
              </section>
            )}
          </div>
        </motion.div>
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
