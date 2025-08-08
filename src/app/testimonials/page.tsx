"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const testimonials = [
  {
    name: "Sarah Okonjo",
    role: "Student",
    country: "Nigeria",
    image: "/images/testimonials/student-1.jpg",
    text: "Patrick Travel made my dream of studying in Canada a reality. Their visa assistance service was exceptional, and they guided me through every step.",
    program: "Study Abroad"
  },
  {
    name: "Emmanuel Kwame",
    role: "Business Owner",
    country: "Ghana",
    image: "/images/testimonials/business-1.jpg",
    text: "The team's professionalism in handling my business visa application was outstanding. They made the complex process simple and straightforward.",
    program: "Business Travel"
  },
  {
    name: "Amina Diallo",
    role: "Medical Professional",
    country: "Senegal",
    image: "/images/testimonials/professional-1.jpg",
    text: "I'm grateful for the exceptional service I received. They helped me secure my work visa and handled all the documentation perfectly.",
    program: "Work Visa"
  },
  {
    name: "John Mensah",
    role: "Graduate Student",
    country: "Ghana",
    image: "/images/testimonials/student-2.jpg",
    text: "The study abroad program support was invaluable. From university selection to visa application, everything was handled professionally.",
    program: "Study Abroad"
  },
  {
    name: "Fatima Sow",
    role: "Entrepreneur",
    country: "Mali",
    image: "/images/testimonials/business-2.jpg",
    text: "Their expertise in business travel arrangements made my international business expansion possible. Highly recommended!",
    program: "Business Travel"
  }
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-forest-50 to-forest-100">
      <Navigation />
      <div className="relative">
        {/* Hero Section with Pattern Background */}
        <div className="absolute inset-0 bg-opacity-10 bg-forest-600 pattern-grid-lg" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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
              <span className="inline-block px-4 py-1 rounded-full bg-forest-100 text-forest-800 text-sm font-semibold tracking-wide mb-4">
                TRUSTED BY THOUSANDS
              </span>
            </motion.div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Client Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Discover how Patrick Travel has helped transform dreams into reality through our comprehensive travel and visa services
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <div className="flex flex-col items-center px-8 py-4 bg-white rounded-lg shadow-md">
                <span className="text-3xl font-bold text-forest-600 mb-1">2,500+</span>
                <span className="text-sm text-gray-600">Happy Clients</span>
              </div>
              <div className="flex flex-col items-center px-8 py-4 bg-white rounded-lg shadow-md">
                <span className="text-3xl font-bold text-forest-600 mb-1">98%</span>
                <span className="text-sm text-gray-600">Success Rate</span>
              </div>
              <div className="flex flex-col items-center px-8 py-4 bg-white rounded-lg shadow-md">
                <span className="text-3xl font-bold text-forest-600 mb-1">50+</span>
                <span className="text-sm text-gray-600">Countries</span>
              </div>
            </div>
          </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-forest-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative">
                {/* Quote Icon */}
                <div className="absolute -top-2 -right-2 text-forest-100 opacity-30 transform -rotate-12">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Profile Section */}
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-forest-100">
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-forest-200 flex items-center justify-center">
                          <span className="text-3xl">👤</span>
                        </div>
                      )}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-forest-600 rounded-full flex items-center justify-center">
                      <img
                        src={`/images/flags/${testimonial.country.toLowerCase()}.svg`}
                        alt={testimonial.country}
                        className="w-5 h-5 rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <p className="text-forest-600 font-medium">{testimonial.country}</p>
                  </div>
                </div>
                
                {/* Testimonial Text */}
                <blockquote className="relative text-gray-700 mb-6">
                  <p className="text-lg leading-relaxed">"{testimonial.text}"</p>
                </blockquote>
                
                {/* Footer */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-sm font-medium">
                      {testimonial.program}
                    </span>
                  </div>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-white rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h3>
            <p className="text-gray-600 mb-6">Join thousands of satisfied clients who have trusted Patrick Travel</p>
            <Link href="/auth/register">
              <Button variant="premium" size="lg" className="w-full sm:w-auto">
                Get Started Today
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  );
}
