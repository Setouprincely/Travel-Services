"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const paymentMethods = [
  {
    name: "Credit Card",
    icon: "💳",
    description: "Secure payment with Visa, Mastercard, or American Express",
    supported: true,
  },
  {
    name: "PayPal",
    icon: "🌐",
    description: "Fast and secure international payments",
    supported: true,
  },
  {
    name: "Mobile Money",
    icon: "📱",
    description: "MTN Mobile Money, Orange Money, etc.",
    supported: true,
  }
];

const countries = [
  {
    name: "United States",
    flag: "🇺🇸",
    stages: [
      "Initial Documentation Fee",
      "Service Fee Payment",
      "Embassy Fee",
      "Additional Services (if needed)"
    ],
    methods: ["Credit Card", "PayPal"]
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    stages: [
      "Application Fee",
      "Service Charge",
      "NHS Surcharge",
      "Visa Fee"
    ],
    methods: ["Credit Card", "PayPal"]
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    stages: [
      "Processing Fee",
      "Service Fee",
      "Biometrics Fee",
      "Right of Permanent Residence Fee (if applicable)"
    ],
    methods: ["Credit Card", "PayPal"]
  }
];

export default function PaymentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-forest-50 to-forest-100">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-forest-100 text-forest-800 text-sm font-semibold tracking-wide">
              SECURE PAYMENTS
            </span>
          </motion.div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Flexible Payment Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our range of secure and convenient payment methods tailored to your needs
          </p>
        </motion.div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {paymentMethods.map((method, index) => (
            <motion.div
              key={method.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-forest-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-forest-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">{method.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{method.name}</h3>
                <p className="text-gray-600 leading-relaxed">{method.description}</p>
                {method.supported && (
                  <span className="inline-flex items-center mt-4 px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                    <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Available
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Country-specific Payment Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Payment Process by Country</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-3">{country.flag}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{country.name}</h3>
                </div>
                
                <div className="space-y-4">
                  {country.stages.map((stage, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-100 flex items-center justify-center mt-1">
                        <span className="font-semibold text-forest-600">{idx + 1}</span>
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-700">{stage}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Accepted Payment Methods:</h4>
                  <div className="flex flex-wrap gap-2">
                    {country.methods.map((method) => (
                      <span
                        key={method}
                        className="inline-flex items-center px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-sm"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Security Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 shadow-xl mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-forest-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Encryption</h3>
              <p className="text-gray-600">256-bit SSL encryption for all transactions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-forest-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Fraud Protection</h3>
              <p className="text-gray-600">Advanced fraud detection system</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-forest-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-forest-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock payment assistance</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-block p-8 bg-white rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Proceed with Payment?</h3>
            <p className="text-gray-600 mb-6">Our team is here to assist you with any payment-related queries</p>
            <div className="flex justify-center gap-4">
              <Button variant="premium" size="lg">
                Start Payment Process
              </Button>
              <Button variant="outline" size="lg">
                Contact Support
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Countries */}
        <div className="space-y-12">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg p-8 shadow-xl"
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{country.flag}</span>
                <h2 className="text-2xl font-bold">{country.name}</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Payment Stages</h3>
                  <ul className="space-y-3">
                    {country.stages.map((stage, stageIndex) => (
                      <motion.li
                        key={stage}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: stageIndex * 0.1 }}
                        className="flex items-center text-gray-700"
                      >
                        <span className="w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full mr-3 text-blue-600 font-semibold">
                          {stageIndex + 1}
                        </span>
                        {stage}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Accepted Payment Methods</h3>
                  <div className="flex flex-wrap gap-3">
                    {country.methods.map((method) => (
                      <span
                        key={method}
                        className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
