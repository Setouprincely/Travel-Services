"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plane, GraduationCap, MapPin, Briefcase, Star, Users, Globe } from "@/components/ui/icons";
import { useLanguage } from "@/contexts/language-context";
import { smoothScrollTo } from "@/lib/smooth-scroll";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const slides = [
    {
      title: t.hero.title,
      subtitle: t.hero.subtitle,
      description: t.hero.description,
      icon: Plane,
      image: "/images/airplane-aircraft-travel-trip.jpg"
    },
    {
      title: t.services.study.title,
      subtitle: "Academic Excellence Worldwide",
      description: "From university applications to scholarship guidance, we help you achieve your academic goals worldwide.",
      icon: GraduationCap,
      image: "/images/group-five-african-college-students-spending-time-together-campus-university-yard-black-afro-friends-studying-bench-with-school-items-laptops-notebooks.jpg"
    },
    {
      title: t.services.visa.title,
      subtitle: "Your Gateway to Global Opportunities",
      description: "Professional visa assistance for all major destinations with expert guidance and support.",
      icon: Globe,
      image: "/images/two-us-passports-held-hand.jpg"
    },
    {
      title: "Travel with Confidence",
      subtitle: "Complete Travel Solutions",
      description: "From flight booking to accommodation, we handle all your travel needs with professional care.",
      icon: Briefcase,
      image: "/images/african-american-couple-loading-baggage-vehicle-leave-holiday-vacation-trip-partners-travelling-by-car-with-luggage-suitcase-bags-go-summer-adventure-cityscape.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const currentSlideData = slides[currentSlide];
  const IconComponent = currentSlideData.icon;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image Background Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <img
            src={currentSlideData.image}
            alt={currentSlideData.title}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </motion.div>
      </AnimatePresence>

      {/* Floating animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Icon with glassmorphism */}
              <motion.div
                className="mb-8 flex justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <div className="p-6 glass rounded-2xl shadow-2xl">
                  <IconComponent className="h-20 w-20 text-white" />
                </div>
              </motion.div>

              {/* Main heading with gradient text */}
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight font-dm-sans"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  {currentSlideData.title}
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-xl md:text-3xl text-white/90 mb-6 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {currentSlideData.subtitle}
              </motion.p>

              {/* Description */}
              <motion.p
                className="text-lg md:text-xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {currentSlideData.description}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* CTA Buttons with enhanced animations */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={() => smoothScrollTo('services')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-2 border-white/20 px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                {t.hero.cta1}
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => smoothScrollTo('contact')}
                className="border-3 border-white bg-white/10 text-white hover:bg-white hover:text-gray-900 px-12 py-6 text-xl font-bold rounded-2xl backdrop-blur-sm shadow-2xl hover:shadow-white/25 hover:scale-105 transition-all duration-300"
              >
                {t.hero.cta2}
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced slide indicators */}
          <motion.div
            className="flex justify-center space-x-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-500 ${
                  index === currentSlide
                    ? 'bg-white shadow-lg shadow-white/50'
                    : 'bg-white/40 hover:bg-white/70'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  scale: index === currentSlide ? 1.3 : 1,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced stats section with glassmorphism */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 glass border-t border-white/30"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: t.hero.stats.clients, icon: Star },
              { number: "200+", label: t.hero.stats.countries, icon: GraduationCap },
              { number: "98%", label: t.hero.stats.successRate, icon: Globe },
              { number: "5+", label: t.hero.stats.experience, icon: Users }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="flex flex-col items-center space-y-3">
                  <stat.icon className="h-8 w-8 text-white/80 group-hover:text-white transition-colors" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1 font-dm-sans">
                    {stat.number}
                  </div>
                  <div className="text-white/80 text-sm md:text-base font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Enhanced floating elements */}
      <motion.div
        className="absolute top-20 left-10 hidden lg:block"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center space-x-3 glass rounded-2xl px-6 py-3 shadow-xl">
          <MapPin className="h-6 w-6 text-white" />
          <span className="text-white font-medium">Douala, Cameroon</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-32 right-10 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center space-x-3 glass rounded-2xl px-6 py-3 shadow-xl">
          <span className="text-white font-medium text-lg">🇨🇲 🇫🇷 🇬🇧 🇨🇦 🇦🇪</span>
        </div>
      </motion.div>

      {/* Additional floating testimonial */}
      <motion.div
        className="absolute bottom-32 left-10 hidden xl:block"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="glass rounded-2xl p-4 max-w-xs shadow-xl">
          <div className="flex items-center space-x-2 mb-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
          </div>
          <p className="text-white/90 text-sm italic">
            "Patrick Travel made my dream of studying in Canada come true!"
          </p>
          <p className="text-white/70 text-xs mt-2">- Sarah M.</p>
        </div>
      </motion.div>
    </section>
  );
}
