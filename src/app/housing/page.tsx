"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { WhatsAppWidget } from "@/components/ui/whatsapp-widget";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Home, 
  CheckCircle, 
  MapPin, 
  Users, 
  Star,
  ArrowRight,
  Wifi,
  Car,
  Shield,
  DollarSign
} from "@/components/ui/icons";

export default function HousingPage() {
  const features = [
    "Verified accommodation listings",
    "Student housing specialists", 
    "Temporary and permanent options",
    "Budget-friendly solutions",
    "Location assistance",
    "Contract support",
    "Move-in coordination"
  ];

  const housingTypes = [
    {
      title: "Student Accommodation",
      description: "Purpose-built student housing near universities",
      price: "€300-800/month",
      features: ["Study areas", "Social spaces", "Security", "Utilities included"],
      icon: "🎓"
    },
    {
      title: "Shared Apartments",
      description: "Cost-effective shared living with other students",
      price: "€250-600/month", 
      features: ["Shared kitchen", "Private bedroom", "Flexible terms", "Furnished"],
      icon: "🏠"
    },
    {
      title: "Private Studios",
      description: "Independent living with complete privacy",
      price: "€500-1200/month",
      features: ["Private bathroom", "Kitchenette", "Living space", "Utilities"],
      icon: "🏢"
    },
    {
      title: "Host Families",
      description: "Cultural immersion with local families",
      price: "€400-900/month",
      features: ["Meals included", "Cultural exchange", "Language practice", "Support"],
      icon: "👨‍👩‍👧‍👦"
    }
  ];

  const cities = [
    { name: "Paris", country: "France", flag: "🇫🇷", avgRent: "€800-1500" },
    { name: "London", country: "UK", flag: "🇬🇧", avgRent: "£600-1200" },
    { name: "Berlin", country: "Germany", flag: "🇩🇪", avgRent: "€400-800" },
    { name: "Toronto", country: "Canada", flag: "🇨🇦", avgRent: "CAD 800-1500" },
    { name: "Sydney", country: "Australia", flag: "🇦🇺", avgRent: "AUD 800-1600" },
    { name: "Dubai", country: "UAE", flag: "🇦🇪", avgRent: "AED 2000-5000" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Home className="h-4 w-4" />
                <span>Housing Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-dm-sans">
                <span className="gradient-text">Housing Solutions</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Find your perfect home away from home. We provide comprehensive housing assistance for students and professionals worldwide.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg font-semibold rounded-2xl hover-glow">
                  Find Housing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold rounded-2xl">
                  Housing Guide
                  <Home className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Verified Properties</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-blue-500" />
                  <span>Secure Booking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-purple-500" />
                  <span>24/7 Support</span>
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
                  <Home className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Housing Search</h3>
                  <p className="text-gray-600">Find your ideal accommodation</p>
                </div>
                
                <form className="space-y-4">
                  <Input placeholder="Destination City" className="rounded-xl" />
                  <select className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Housing Type</option>
                    <option>Student Accommodation</option>
                    <option>Shared Apartment</option>
                    <option>Private Studio</option>
                    <option>Host Family</option>
                  </select>
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Budget (min)" type="number" className="rounded-xl" />
                    <Input placeholder="Budget (max)" type="number" className="rounded-xl" />
                  </div>
                  <Input placeholder="Move-in Date" type="date" className="rounded-xl" />
                  <Button className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-xl font-semibold">
                    Search Properties
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Housing Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-dm-sans">Housing Options</h2>
            <p className="text-xl text-gray-600">Choose the perfect accommodation for your needs</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {housingTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl border border-white/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="text-2xl font-bold text-green-600 mb-4">{type.price}</div>
                <ul className="space-y-2 mb-6">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Cities */}
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
            <p className="text-xl text-gray-600">Average rental prices in top student cities</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-6 rounded-2xl border border-white/20 text-center group cursor-pointer"
              >
                <div className="text-4xl mb-4">{city.flag}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{city.name}</h3>
                <p className="text-gray-600 mb-3">{city.country}</p>
                <div className="text-lg font-semibold text-green-600 mb-4">{city.avgRent}</div>
                <Button variant="outline" className="group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  View Properties
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-dm-sans">Our Services</h2>
            <p className="text-xl text-gray-600">Complete housing support from search to move-in</p>
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
                <p className="text-gray-600">Professional assistance to find and secure your ideal accommodation.</p>
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
