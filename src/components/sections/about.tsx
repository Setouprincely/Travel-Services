"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PrimaryButton } from "@/components/ui/enhanced-button";
import { useLanguage } from "@/contexts/language-context";
import {
  Award,
  Users,
  Globe,
  Heart,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Sparkles
} from "@/components/ui/icons";

export function About() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Student in France",
      image: "/images/testimonial-1.jpg",
      content: "Patrick Travel Services made my dream of studying in France a reality. Their visa assistance was exceptional, and they guided me through every step of the process.",
      rating: 5,
      country: "🇫🇷"
    },
    {
      name: "John Kamau",
      role: "Software Engineer in Canada",
      image: "/images/testimonial-2.jpg",
      content: "Thanks to their job placement program, I landed my dream job in Toronto. The team's professionalism and dedication are unmatched.",
      rating: 5,
      country: "🇨🇦"
    },
    {
      name: "Fatima Al-Hassan",
      role: "Business Owner in UAE",
      image: "/images/testimonial-3.jpg",
      content: "Excellent service for my business visa to Dubai. They handled all the paperwork efficiently and kept me informed throughout the process.",
      rating: 5,
      country: "🇦🇪"
    }
  ];

  const values = [
    {
      icon: Award,
      title: t.about.values.excellence.title,
      description: t.about.values.excellence.description
    },
    {
      icon: Heart,
      title: t.about.values.integrity.title,
      description: t.about.values.integrity.description
    },
    {
      icon: Globe,
      title: t.about.values.innovation.title,
      description: t.about.values.innovation.description
    },
    {
      icon: Users,
      title: t.about.values.support.title,
      description: t.about.values.support.description
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
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
            className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles className="h-4 w-4" />
            <span>{t.about.title}</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-dm-sans">
            <span className="gradient-text">{t.about.title}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t.about.subtitle}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl border border-white/20"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-8 font-dm-sans">
              {t.about.story.title}
            </h3>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {t.about.story.content[0]}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {t.about.story.content[1]}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                We believe that everyone deserves the chance to pursue their dreams, whether it&apos;s studying at a
                world-class university, building a career abroad, or simply exploring new horizons. That&apos;s why
                we&apos;re committed to providing accessible, reliable, and professional services to all our clients.
              </motion.p>
            </div>
            
            <div className="mt-8">
              <PrimaryButton size="lg">
                Learn More About Us
              </PrimaryButton>
            </div>
          </motion.div>

          {/* Right side - Stats & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl border border-white/20"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Achievements
            </h3>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-700">Successful Visas</div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
                <div className="text-gray-700">Students Placed</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-700">University Partners</div>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">15+</div>
                <div className="text-gray-700">Countries Served</div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Certifications & Partnerships</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Certified Education Agent (CEA)</li>
                <li>• IATA Accredited Travel Agency</li>
                <li>• Member of International Education Association</li>
                <li>• Authorized Visa Application Center</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Our Clients Say
          </h3>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <div className="text-center">
                <Quote className="h-12 w-12 text-blue-600 mx-auto mb-6" />
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-xl text-gray-700 mb-8 italic leading-relaxed">
                  "                  &ldquo;{testimonials[currentTestimonial].content}&rdquo;"
                </p>
                
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-2xl">{testimonials[currentTestimonial].country}</span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
