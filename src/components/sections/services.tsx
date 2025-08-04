"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import {
  FileText,
  GraduationCap,
  Plane,
  Home,
  Briefcase,
  Package,
  ArrowRight,
  CheckCircle,
  Sparkles
} from "@/components/ui/icons";

export function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useLanguage();

  const services = [
    {
      id: "visa",
      title: t.services.visa.title,
      icon: FileText,
      description: t.services.visa.description,
      image: "/images/two-us-passports-held-hand.jpg",
      features: [
        "Document preparation and review",
        "Application form completion",
        "Interview preparation",
        "Embassy appointment booking",
        "Status tracking and updates"
      ],
      destinations: ["Europe", "Canada", "USA", "UAE", "Australia"],
      color: "bg-blue-500"
    },
    {
      id: "study",
      title: t.services.study.title,
      icon: GraduationCap,
      description: t.services.study.description,
      image: "/images/group-five-african-college-students-spending-time-together-campus-university-yard-black-afro-friends-studying-bench-with-school-items-laptops-notebooks.jpg",
      features: [
        "University selection guidance",
        "Application assistance",
        "Scholarship opportunities",
        "Student visa support",
        "Pre-departure orientation"
      ],
      destinations: ["UK", "Canada", "Germany", "France", "Australia"],
      color: "bg-green-500"
    },
    {
      id: "flights",
      title: t.services.flights.title,
      icon: Plane,
      description: t.services.flights.description,
      image: "/images/airplane-aircraft-travel-trip.jpg",
      features: [
        "Competitive flight prices",
        "Flexible booking options",
        "Group travel discounts",
        "Travel insurance",
        "24/7 booking support"
      ],
      destinations: ["Worldwide", "Africa", "Europe", "Americas", "Asia"],
      color: "bg-purple-500"
    },
    {
      id: "housing",
      title: t.services.housing.title,
      icon: Home,
      description: t.services.housing.description,
      features: [
        "Student dormitories",
        "Shared apartments",
        "Family housing",
        "Temporary accommodation",
        "Housing verification"
      ],
      destinations: ["Major Cities", "University Towns", "Business Hubs"],
      color: "bg-orange-500"
    },
    {
      id: "jobs",
      title: t.services.jobs.title,
      icon: Briefcase,
      description: t.services.jobs.description,
      image: "/images/african-american-couple-loading-baggage-vehicle-leave-holiday-vacation-trip-partners-travelling-by-car-with-luggage-suitcase-bags-go-summer-adventure-cityscape.jpg",
      features: [
        "Job matching services",
        "CV/Resume optimization",
        "Interview coaching",
        "Work permit assistance",
        "Career counseling"
      ],
      destinations: ["Europe", "Canada", "UAE", "Africa", "Remote"],
      color: "bg-red-500"
    },
    {
      id: "parcel",
      title: t.services.parcel.title,
      icon: Package,
      description: t.services.parcel.description,
      features: [
        "Door-to-door delivery",
        "Package tracking",
        "Customs clearance",
        "Insurance coverage",
        "Express shipping options"
      ],
      destinations: ["Worldwide", "Africa", "Europe", "Americas"],
      color: "bg-indigo-500"
    }
  ];

  const activeService = services[activeTab];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles className="h-4 w-4" />
            <span>Professional Services</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-dm-sans">
            <span className="gradient-text">{t.services.title}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Enhanced Service Tabs */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.button
                  key={service.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-500 relative overflow-hidden ${
                    activeTab === index
                      ? 'bg-white text-gray-900 shadow-2xl'
                      : 'bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white/80 border border-white/50'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {activeTab === index && (
                    <motion.div
                      className={`absolute inset-0 ${service.color} opacity-10`}
                      layoutId="activeTab"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className={`p-2 rounded-xl ${activeTab === index ? service.color : 'bg-gray-100'} transition-colors`}>
                    <IconComponent className={`h-5 w-5 ${activeTab === index ? 'text-white' : 'text-gray-600'}`} />
                  </div>
                  <span className="hidden sm:inline relative z-10">{service.title}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Enhanced Active Service Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="glass rounded-3xl shadow-2xl overflow-hidden border border-white/20"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left side - Content */}
                <motion.div
                  className="p-8 lg:p-12"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <motion.div
                    className="flex items-center space-x-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <div className={`p-4 rounded-2xl ${activeService.color} shadow-lg`}>
                      <activeService.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 font-dm-sans">
                      {activeService.title}
                    </h3>
                  </motion.div>

                  <motion.p
                    className="text-xl text-gray-600 mb-10 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    {activeService.description}
                  </motion.p>

                  {/* Features */}
                  <motion.div
                    className="mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <h4 className="text-2xl font-semibold text-gray-900 mb-6 font-dm-sans">
                      What We Offer:
                    </h4>
                    <ul className="space-y-4">
                      {activeService.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          className="flex items-center space-x-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                        >
                          <div className="flex-shrink-0">
                            <CheckCircle className="h-6 w-6 text-green-500" />
                          </div>
                          <span className="text-gray-700 text-lg">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Destinations */}
                  <motion.div
                    className="mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <h4 className="text-2xl font-semibold text-gray-900 mb-6 font-dm-sans">
                      Destinations:
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {activeService.destinations.map((destination, index) => (
                        <motion.span
                          key={index}
                          className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-700 rounded-2xl text-sm font-medium border border-blue-100"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.9 + index * 0.1, duration: 0.3 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {destination}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <Button
                      size="lg"
                      className={`${activeService.color} hover:opacity-90 px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover-glow transition-all duration-300`}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-6 w-6" />
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Right side - Enhanced Visual */}
                <motion.div
                  className={`${activeService.color} p-8 lg:p-12 flex items-center justify-center relative overflow-hidden`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <motion.div
                    className="relative z-10 text-center text-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <activeService.icon className="h-32 w-32 mx-auto mb-8 opacity-90" />
                    </motion.div>
                    <h4 className="text-3xl font-bold mb-4 font-dm-sans">Ready to Begin?</h4>
                    <p className="text-xl opacity-90 mb-8 leading-relaxed">
                      Contact our experts for personalized assistance
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline"
                        className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg font-semibold rounded-2xl transition-all duration-300"
                      >
                        Contact Us
                      </Button>
                    </motion.div>
                  </motion.div>

                  {/* Enhanced background decoration */}
                  <motion.div
                    className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{ transform: "translate(50%, -50%)" }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    style={{ transform: "translate(-50%, 50%)" }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Enhanced Quick Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { value: "98%", label: "Success Rate", color: "text-blue-600", bg: "bg-blue-50" },
            { value: "24/7", label: "Support", color: "text-green-600", bg: "bg-green-50" },
            { value: "5+", label: "Years Experience", color: "text-purple-600", bg: "bg-purple-50" },
            { value: "1000+", label: "Happy Clients", color: "text-orange-600", bg: "bg-orange-50" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass p-8 rounded-3xl text-center border border-white/20 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className={`text-4xl md:text-5xl font-bold ${stat.color} mb-3 font-dm-sans`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  delay: 0.6 + index * 0.1
                }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-600 font-medium text-lg group-hover:text-gray-800 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
