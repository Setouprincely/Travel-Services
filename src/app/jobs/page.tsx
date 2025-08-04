"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { WhatsAppWidget } from "@/components/ui/whatsapp-widget";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Briefcase, 
  CheckCircle, 
  MapPin, 
  Users, 
  Star,
  ArrowRight,
  Clock,
  DollarSign,
  Award,
  TrendingUp
} from "@/components/ui/icons";

export default function JobsPage() {
  const services = [
    "CV/Resume optimization",
    "Job search assistance", 
    "Interview preparation",
    "Work permit guidance",
    "Salary negotiation",
    "Career counseling",
    "Networking opportunities"
  ];

  const jobCategories = [
    {
      title: "Information Technology",
      openings: "2,500+",
      avgSalary: "€45,000-80,000",
      growth: "+15%",
      icon: "💻",
      skills: ["Programming", "Cloud Computing", "Data Analysis", "Cybersecurity"]
    },
    {
      title: "Healthcare & Medicine",
      openings: "1,800+", 
      avgSalary: "€40,000-90,000",
      growth: "+12%",
      icon: "🏥",
      skills: ["Patient Care", "Medical Research", "Healthcare Management", "Nursing"]
    },
    {
      title: "Engineering",
      openings: "1,200+",
      avgSalary: "€50,000-85,000", 
      growth: "+10%",
      icon: "⚙️",
      skills: ["Mechanical Design", "Civil Engineering", "Electrical Systems", "Project Management"]
    },
    {
      title: "Business & Finance",
      openings: "2,000+",
      avgSalary: "€35,000-75,000",
      growth: "+8%", 
      icon: "💼",
      skills: ["Financial Analysis", "Business Strategy", "Accounting", "Investment Management"]
    },
    {
      title: "Education & Research",
      openings: "900+",
      avgSalary: "€30,000-60,000",
      growth: "+6%",
      icon: "🎓", 
      skills: ["Teaching", "Research", "Curriculum Development", "Academic Writing"]
    },
    {
      title: "Hospitality & Tourism",
      openings: "1,500+",
      avgSalary: "€25,000-50,000",
      growth: "+20%",
      icon: "🏨",
      skills: ["Customer Service", "Event Management", "Tourism Planning", "Hotel Operations"]
    }
  ];

  const countries = [
    { name: "Germany", flag: "🇩🇪", jobs: "15,000+", visa: "EU Blue Card" },
    { name: "Canada", flag: "🇨🇦", jobs: "12,000+", visa: "Express Entry" },
    { name: "Australia", flag: "🇦🇺", jobs: "8,000+", visa: "Skilled Migration" },
    { name: "UAE", flag: "🇦🇪", jobs: "10,000+", visa: "Work Permit" },
    { name: "France", flag: "🇫🇷", jobs: "7,000+", visa: "Talent Passport" },
    { name: "UK", flag: "🇬🇧", jobs: "9,000+", visa: "Skilled Worker" }
  ];

  const benefits = [
    {
      title: "Career Advancement",
      description: "Access to international career opportunities",
      icon: TrendingUp
    },
    {
      title: "Competitive Salaries", 
      description: "Higher earning potential in global markets",
      icon: DollarSign
    },
    {
      title: "Professional Growth",
      description: "Skill development and networking opportunities", 
      icon: Award
    },
    {
      title: "Work-Life Balance",
      description: "Better working conditions and benefits",
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Briefcase className="h-4 w-4" />
                <span>Jobs & Internships</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-dm-sans">
                <span className="gradient-text">Global Career Opportunities</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Launch your international career with our comprehensive job placement and internship programs. Access thousands of opportunities worldwide.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 px-8 py-4 text-lg font-semibold rounded-2xl hover-glow">
                  Find Jobs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold rounded-2xl">
                  Upload CV
                  <Briefcase className="ml-2 h-5 w-5" />
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>50,000+ Job Openings</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  <span>Expert Career Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-purple-500" />
                  <span>Visa Assistance</span>
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
                  <Briefcase className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Job Search</h3>
                  <p className="text-gray-600">Find your dream career opportunity</p>
                </div>
                
                <form className="space-y-4">
                  <Input placeholder="Job Title or Keywords" className="rounded-xl" />
                  <select className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option>Select Country</option>
                    <option>Germany</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>UAE</option>
                    <option>France</option>
                    <option>UK</option>
                  </select>
                  <select className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option>Industry</option>
                    <option>Information Technology</option>
                    <option>Healthcare</option>
                    <option>Engineering</option>
                    <option>Business & Finance</option>
                    <option>Education</option>
                    <option>Hospitality</option>
                  </select>
                  <select className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option>Experience Level</option>
                    <option>Entry Level</option>
                    <option>Mid Level</option>
                    <option>Senior Level</option>
                    <option>Executive</option>
                  </select>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 py-3 rounded-xl font-semibold">
                    Search Jobs
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-dm-sans">Popular Job Categories</h2>
            <p className="text-xl text-gray-600">Explore opportunities across various industries</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl border border-white/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Open Positions:</span>
                    <span className="font-semibold text-orange-600">{category.openings}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Avg Salary:</span>
                    <span className="font-semibold text-green-600">{category.avgSalary}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Growth:</span>
                    <span className="font-semibold text-blue-600">{category.growth}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Key Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    {category.skills.map((skill, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  View Jobs
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-dm-sans">Top Destinations</h2>
            <p className="text-xl text-gray-600">Countries with the most job opportunities</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-6 rounded-2xl border border-white/20 text-center group cursor-pointer"
              >
                <div className="text-4xl mb-4">{country.flag}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{country.name}</h3>
                <div className="text-lg font-semibold text-orange-600 mb-2">{country.jobs}</div>
                <div className="text-sm text-gray-600 mb-4">Visa: {country.visa}</div>
                <Button variant="outline" className="group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                  Explore Jobs
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-dm-sans">Why Work Abroad?</h2>
            <p className="text-xl text-gray-600">Benefits of international career opportunities</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl border border-white/20 text-center hover:shadow-lg transition-all duration-300"
              >
                <benefit.icon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
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
