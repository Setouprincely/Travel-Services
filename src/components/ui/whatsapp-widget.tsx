"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone } from "lucide-react";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in your travel services. Could you please provide more information?"
    );
    const whatsappUrl = `https://wa.me/237123456789?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 bg-white rounded-2xl shadow-2xl p-6 max-w-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Patrick Travel</h3>
                  <p className="text-sm text-green-600">Online now</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="mb-4">
              <p className="text-gray-700 text-sm mb-3">
                Hi there! 👋 How can we help you with your travel plans today?
              </p>
              <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
                <p className="mb-2">We typically reply within minutes!</p>
                <div className="flex items-center space-x-2 text-xs">
                  <Phone className="h-3 w-3" />
                  <span>+237 123 456 789</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Start Chat</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main WhatsApp button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center text-white transition-colors group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(34, 197, 94, 0.7)",
            "0 0 0 10px rgba(34, 197, 94, 0)",
            "0 0 0 0 rgba(34, 197, 94, 0)"
          ]
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-7 w-7" />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="h-7 w-7" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
