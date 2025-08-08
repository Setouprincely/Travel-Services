"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plane, GraduationCap, MapPin, Briefcase, Star, Users, Globe } from "@/components/ui/icons";
import { useLanguage } from "@/contexts/language-context";
import { smoothScrollTo } from "@/lib/smooth-scroll";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage() || {
    t: {
      hero: {
        title: "Patrick Travel Services",
        subtitle: "Your Trusted Travel Partner",
        description: "Professional travel and visa services for all your needs",
      },
    },
  };

  const slides = [
    {
      title: t?.hero?.title || "Patrick Travel Services",
      subtitle: t?.hero?.subtitle || "Your Trusted Travel Partner",
      description: t?.hero?.description || "Professional travel and visa services for all your needs",
      icon: Plane,
      image: "/images/airplane-aircraft-travel-trip.jpg"
    },
    {
      title: t.services.study.title,
      subtitle: t.services.study.title,
      description: t.services.study.description,
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
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-accent/5 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Premium floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full filter blur-xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`
            }}
          />
        ))}
      </div>

      {/* Image Background Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div className="relative w-full h-full">
            <Image
              src={currentSlideData.image}
              alt={currentSlideData.title}
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover"
              style={{
                objectFit: "cover",
                filter: "brightness(0.7)"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/80 mix-blend-multiply" />
          </div>
        </motion.div>
      </AnimatePresence>

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
                <div className="p-6 glass rounded-2xl bg-white/10 backdrop-blur-md">
                  <IconComponent className="h-20 w-20 text-primary" />
                </div>
              </motion.div>

              {/* Auth Buttons */}
              <div className="flex justify-center gap-4 mb-8">
                <Link href="/auth/login">
                  <Button variant="premium" size="lg" className="text-lg px-8">
                    Login
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button variant="premium" size="lg" className="text-lg px-8">
                    Register
                  </Button>
                </Link>
              </div>

              {/* Main heading with gradient text */}
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] font-heading"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <span className="inline bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                  {currentSlideData.title}
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-xl md:text-3xl text-foreground/90 mb-6 font-medium font-heading tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {currentSlideData.subtitle}
              </motion.p>

              {/* Description */}
              <motion.p
                className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-sans"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {currentSlideData.description}
              </motion.p>

              {/* Premium Badge */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20">
                  <Star className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Premium Travel Services</span>
                </span>
              </motion.div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="premium"
                    size="lg"
                    onClick={() => smoothScrollTo("services")}
                    className="relative group px-8 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center">
                      {t.hero?.cta1 || "Explore Our Services"}
                      <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => smoothScrollTo("contact")}
                    className="relative overflow-hidden px-8 py-6 text-lg font-bold rounded-xl backdrop-blur-sm"
                  >
                    <span className="relative z-10">{t.hero?.cta2 || "Contact Us"}</span>
                  </Button>
                </motion.div>
              </div>

              {/* Slide indicators */}
              <div className="flex justify-center space-x-3">
                {slides.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-500 ${
                      index === currentSlide
                        ? "bg-primary shadow-lg shadow-primary/50"
                        : "bg-white/40 hover:bg-white/70"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{
                      scale: index === currentSlide ? 1.3 : 1
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Stats section */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-t border-border/50"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              {
                number: "500+",
                label: t.hero?.stats?.clients || "Happy Clients",
                icon: Star,
              },
              {
                number: "200+",
                label: t.hero?.stats?.countries || "Countries Served",
                icon: GraduationCap,
              },
              {
                number: "98%",
                label: t.hero?.stats?.successRate || "Success Rate",
                icon: Globe,
              },
              {
                number: "5+",
                label: t.hero?.stats?.experience || "Years Experience",
                icon: Users,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative flex flex-col items-center space-y-4 p-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-transparent">
                    <stat.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-1 font-heading bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm md:text-base font-medium font-sans">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
