"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { WhatsAppWidget } from "@/components/ui/whatsapp-widget";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Plane, 
  CheckCircle, 
  Clock, 
  Users, 
  Globe, 
  Star,
  ArrowRight,
  Calendar,
  MapPin,
  Shield,
  CreditCard,
  Phone
} from "@/components/ui/icons";

export default function FlightBookingPage() {
  const features = [
    "Competitive flight prices",
    "Flexible booking options", 
    "Group travel discounts",
    "Travel insurance",
    "24/7 booking support",
    "Multi-city itineraries",
    "Seat selection assistance"
  ];

  const destinations = [
    { city: "Paris", country: "France", flag: "🇫🇷", price: "From $850", popular: true },
    { city: "London", country: "UK", flag: "🇬🇧", price: "From $920", popular: true },
    { city: "Dubai", country: "UAE", flag: "🇦🇪", price: "From $650", popular: true },
    { city: "Toronto", country: "Canada", flag: "🇨🇦", price: "From $1,200", popular: false },
    { city: "Sydney", country: "Australia", flag: "🇦🇺", price: "From $1,450", popular: false },
    { city: "New York", country: "USA", flag: "🇺🇸", price: "From $1,100", popular: true }
  ];

  const airlines = [
    { name: "Air France", logo: "🇫🇷", rating: 4.5 },
    { name: "Emirates", logo: "🇦🇪", rating: 4.8 },
    { name: "British Airways", logo: "🇬🇧", rating: 4.3 },
    { name: "Turkish Airlines", logo: "🇹🇷", rating: 4.4 },
    { name: "Qatar Airways", logo: "🇶🇦", rating: 4.7 },
    { name: "Lufthansa", logo: "🇩🇪", rating: 4.2 }
  ];

  const services = [
    {
      title: "Flight Search & Booking",
      description: "Find the best deals across multiple airlines",
      icon: Plane
    },
    {
      title: "Travel Insurance",
      description: "Comprehensive coverage for your journey",
      icon: Shield
    },
    {
      title: "Group Bookings",
      description: "Special rates for group travel",
      icon: Users
    },
    {
      title: "Payment Plans",
      description: "Flexible payment options available",
      icon: CreditCard
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer assistance",
      icon: Phone
    },
    {
      title: "Multi-City Trips",
      description: "Complex itinerary planning",
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Plane className="h-4 w-4" />
                <span>Flight Booking</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-dm-sans">
                <span className="gradient-text">Flight Booking</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Find the best flight deals for your journey. We compare prices across multiple airlines to get you the most competitive rates with flexible booking options.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 px-8 py-4 text-lg font-semibold rounded-2xl hover-glow">
                  Search Flights
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold rounded-2xl">
                  Group Booking
                  <Users className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Best Price Guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-purple-500" />
                  <span>Secure Booking</span>
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
                  <Plane className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Flight Search</h3>
                  <p className="text-gray-600">Find your perfect flight</p>
                </div>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                      <Input placeholder="Departure city" className="rounded-xl" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                      <Input placeholder="Destination city" className="rounded-xl" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Departure</label>
                      <Input type="date" className="rounded-xl" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Return</label>
                      <Input type="date" className="rounded-xl" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
                      <select className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option>1 Adult</option>
                        <option>2 Adults</option>
                        <option>3 Adults</option>
                        <option>4+ Adults</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Class</label>
                      <select className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option>Economy</option>
                        <option>Premium Economy</option>
                        <option>Business</option>
                        <option>First Class</option>
                      </select>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-xl font-semibold">
                    Search Flights
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
            <p className="text-xl text-gray-600">Complete flight booking solutions</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl border border-white/20 hover:shadow-lg transition-all duration-300 text-center"
              >
                <service.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
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
            <p className="text-xl text-gray-600">Top destinations from Cameroon</p>
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
                className={`glass p-6 rounded-2xl border border-white/20 text-center group cursor-pointer relative ${
                  destination.popular ? 'ring-2 ring-purple-200' : ''
                }`}
              >
                {destination.popular && (
                  <div className="absolute -top-2 -right-2 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                )}
                <div className="text-4xl mb-4">{destination.flag}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{destination.city}</h3>
                <p className="text-gray-600 mb-3">{destination.country}</p>
                <div className="text-2xl font-bold text-purple-600 mb-4">{destination.price}</div>
                <Button variant="outline" className="group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                  Book Now
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Airlines */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-dm-sans">Partner Airlines</h2>
            <p className="text-xl text-gray-600">Trusted airline partners worldwide</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {airlines.map((airline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl border border-white/20 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{airline.logo}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{airline.name}</h3>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${
                        i < Math.floor(airline.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">{airline.rating}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-dm-sans">Why Choose Us</h2>
            <p className="text-xl text-gray-600">Benefits of booking with Patrick Travel</p>
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
                <p className="text-gray-600">Professional service to ensure your travel experience is seamless.</p>
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
