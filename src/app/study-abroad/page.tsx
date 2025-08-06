"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { WhatsAppWidget } from "@/components/ui/whatsapp-widget";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PrimaryButton, SecondaryButton, OutlineButton } from "@/components/ui/enhanced-button";
import { 
  GraduationCap, 
  CheckCircle, 
  BookOpen, 
  Users, 
  Globe, 
  Star,
  ArrowRight,
  Award,
  DollarSign,
  Calendar
} from "@/components/ui/icons";

export default function StudyAbroadPage() {
  const services = [
    "University selection guidance",
    "Application assistance", 
    "Scholarship opportunities",
    "Student visa support",
    "Pre-departure orientation",
    "Accommodation assistance",
    "Academic counseling"
  ];

  const universities = [
    { name: "University of Toronto", country: "Canada", flag: "🇨🇦", ranking: "#1 in Canada" },
    { name: "Oxford University", country: "UK", flag: "🇬🇧", ranking: "#2 Globally" },
    { name: "TU Munich", country: "Germany", flag: "🇩🇪", ranking: "#1 in Germany" },
    { name: "Sorbonne", country: "France", flag: "🇫🇷", ranking: "#1 in France" },
    { name: "University of Melbourne", country: "Australia", flag: "🇦🇺", ranking: "#1 in Australia" },
    { name: "MIT", country: "USA", flag: "🇺🇸", ranking: "#1 in Tech" }
  ];

  const programs = [
    {
      title: "Engineering & Technology",
      duration: "3-4 years",
      cost: "$15,000 - $50,000/year",
      scholarships: "Up to 100%",
      icon: "⚙️"
    },
    {
      title: "Business & Management", 
      duration: "2-3 years",
      cost: "$20,000 - $60,000/year",
      scholarships: "Up to 80%",
      icon: "💼"
    },
    {
      title: "Medicine & Health Sciences",
      duration: "5-6 years", 
      cost: "$25,000 - $80,000/year",
      scholarships: "Up to 70%",
      icon: "🏥"
    },
    {
      title: "Computer Science",
      duration: "3-4 years",
      cost: "$18,000 - $55,000/year", 
      scholarships: "Up to 90%",
      icon: "💻"
    },
    {
      title: "Arts & Humanities",
      duration: "3-4 years",
      cost: "$12,000 - $40,000/year",
      scholarships: "Up to 85%", 
      icon: "🎨"
    },
    {
      title: "Sciences",
      duration: "3-4 years",
      cost: "$16,000 - $45,000/year",
      scholarships: "Up to 75%",
      icon: "🔬"
    }
  ];

  const scholarships = [
    {
      name: "Merit-Based Scholarships",
      amount: "Up to 100% tuition",
      description: "For academically excellent students"
    },
    {
      name: "Need-Based Financial Aid", 
      amount: "Up to 80% tuition",
      description: "For students with financial constraints"
    },
    {
      name: "Country-Specific Grants",
      amount: "€5,000 - €15,000",
      description: "Government and institutional grants"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/group-five-african-college-students-spending-time-together-campus-university-yard-black-afro-friends-studying-bench-with-school-items-laptops-notebooks.jpg"
            alt="Students studying"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-blue-900/70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <GraduationCap className="h-4 w-4" />
                <span>Study Abroad</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-dm-sans">
                <span className="gradient-text">Study Abroad</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Turn your academic dreams into reality. We provide comprehensive education consulting and university placement services for students worldwide.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <PrimaryButton
                  size="lg"
                  icon={<ArrowRight className="h-5 w-5" />}
                  iconPosition="right"
                >
                  Find Universities
                </PrimaryButton>
                <SecondaryButton
                  size="lg"
                  icon={<Award className="h-5 w-5" />}
                  iconPosition="right"
                >
                  Scholarship Guide
                </SecondaryButton>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>200+ Students Placed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <span>50+ Partner Universities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-blue-500" />
                  <span>Scholarship Support</span>
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
                  <GraduationCap className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">University Finder</h3>
                  <p className="text-gray-600">Find the perfect university for your goals</p>
                </div>
                
                <form className="space-y-4">
                  <Input placeholder="Full Name" className="rounded-xl" />
                  <Input placeholder="Email Address" type="email" className="rounded-xl" />
                  <select className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Preferred Country</option>
                    <option>Canada</option>
                    <option>UK</option>
                    <option>Germany</option>
                    <option>France</option>
                    <option>Australia</option>
                    <option>USA</option>
                  </select>
                  <select className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Field of Study</option>
                    <option>Engineering</option>
                    <option>Business</option>
                    <option>Medicine</option>
                    <option>Computer Science</option>
                    <option>Arts</option>
                    <option>Sciences</option>
                  </select>
                  <select className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Study Level</option>
                    <option>Bachelor&apos;s</option>
                    <option>Master&apos;s</option>
                    <option>PhD</option>
                  </select>
                  <Button className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-xl font-semibold">
                    Find Universities
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
            <p className="text-xl text-gray-600">Complete support for your study abroad journey</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl border border-white/20 hover:shadow-lg transition-all duration-300"
              >
                <CheckCircle className="h-8 w-8 text-green-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service}</h3>
                <p className="text-gray-600">Expert guidance to help you succeed in your academic journey.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Universities */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-dm-sans">Partner Universities</h2>
            <p className="text-xl text-gray-600">Top-ranked institutions worldwide</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.map((university, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-6 rounded-2xl border border-white/20 text-center group cursor-pointer"
              >
                <div className="text-4xl mb-4">{university.flag}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{university.name}</h3>
                <p className="text-gray-600 mb-2">{university.country}</p>
                <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {university.ranking}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-dm-sans">Popular Programs</h2>
            <p className="text-xl text-gray-600">Explore study options across various fields</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl border border-white/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{program.title}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Duration: {program.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4" />
                    <span>Cost: {program.cost}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4" />
                    <span>Scholarships: {program.scholarships}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-dm-sans">Scholarship Opportunities</h2>
            <p className="text-xl text-gray-600">Financial support to make your dreams affordable</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {scholarships.map((scholarship, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl border border-white/20 text-center"
              >
                <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{scholarship.name}</h3>
                <div className="text-2xl font-bold text-green-600 mb-4">{scholarship.amount}</div>
                <p className="text-gray-600">{scholarship.description}</p>
                <Button variant="outline" className="mt-4">
                  Apply Now
                </Button>
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
