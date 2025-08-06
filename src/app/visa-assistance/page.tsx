"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { WhatsAppWidget } from "@/components/ui/whatsapp-widget";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EnhancedButton, PrimaryButton, OutlineButton } from "@/components/ui/enhanced-button";
import { Textarea } from "@/components/ui/textarea";
import { 
  FileText, 
  CheckCircle, 
  Clock, 
  Users, 
  Globe, 
  Star,
  ArrowRight,
  Download,
  Calendar,
  MapPin
} from "@/components/ui/icons";

export default function VisaAssistancePage() {
  const features = [
    "Document preparation and review",
    "Application form completion", 
    "Interview preparation",
    "Embassy appointment booking",
    "Status tracking and updates",
    "Expert consultation",
    "Success guarantee"
  ];

  const destinations = [
    { name: "Europe", flag: "🇪🇺", processing: "15-30 days" },
    { name: "Canada", flag: "🇨🇦", processing: "20-45 days" },
    { name: "USA", flag: "🇺🇸", processing: "30-60 days" },
    { name: "UAE", flag: "🇦🇪", processing: "7-14 days" },
    { name: "Australia", flag: "🇦🇺", processing: "25-40 days" },
    { name: "UK", flag: "🇬🇧", processing: "15-30 days" }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      destination: "France",
      text: "Patrick Travel made my visa process so smooth. Got my visa in just 3 weeks!",
      rating: 5
    },
    {
      name: "John Smith", 
      destination: "Canada",
      text: "Professional service and excellent guidance throughout the process.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      destination: "Australia", 
      text: "They handled everything perfectly. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/two-us-passports-held-hand.jpg"
            alt="Visa Assistance"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <FileText className="h-4 w-4" />
                <span>Visa Services</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-dm-sans">
                <span className="gradient-text">Visa Assistance</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional visa application support for all destinations. Our expert team ensures your visa application is complete, accurate, and submitted on time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <PrimaryButton
                  size="lg"
                  icon={<ArrowRight className="h-5 w-5" />}
                  iconPosition="right"
                >
                  Start Application
                </PrimaryButton>
                <OutlineButton
                  size="lg"
                  icon={<Download className="h-5 w-5" />}
                  iconPosition="right"
                >
                  Download Checklist
                </OutlineButton>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>98% Success Rate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <span>Fast Processing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-purple-500" />
                  <span>Expert Support</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass p-8 rounded-3xl border border-white/20">
                <div className="text-center mb-6">
                  <FileText className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Quick Assessment</h3>
                  <p className="text-gray-600">Get instant feedback on your visa eligibility</p>
                </div>
                
                <form className="space-y-4">
                  <Input placeholder="Full Name" className="rounded-xl" />
                  <Input placeholder="Email Address" type="email" className="rounded-xl" />
                  <select className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Select Destination</option>
                    <option>Europe</option>
                    <option>Canada</option>
                    <option>USA</option>
                    <option>UAE</option>
                    <option>Australia</option>
                  </select>
                  <select className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Visa Type</option>
                    <option>Tourist Visa</option>
                    <option>Business Visa</option>
                    <option>Student Visa</option>
                    <option>Work Visa</option>
                  </select>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold">
                    Get Free Assessment
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-dm-sans">What We Offer</h2>
            <p className="text-xl text-gray-600">Comprehensive visa services to ensure your success</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl border border-white/20 hover:shadow-lg transition-all duration-300"
              >
                <CheckCircle className="h-8 w-8 text-green-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature}</h3>
                <p className="text-gray-600">Professional assistance to ensure your application meets all requirements.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-dm-sans">Popular Destinations</h2>
            <p className="text-xl text-gray-600">We process visas for destinations worldwide</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-6 rounded-2xl border border-white/20 text-center group cursor-pointer"
              >
                <div className="text-4xl mb-4">{destination.flag}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>{destination.processing}</span>
                </div>
                <Button variant="outline" className="mt-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-dm-sans">Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from our satisfied clients</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl border border-white/20"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">Visa to {testimonial.destination}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
