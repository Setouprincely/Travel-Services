"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import {
  Globe,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MessageSquare,
  Heart
} from "@/components/ui/icons";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const services = [
    { name: t.nav.visaAssistance, href: "/visa-assistance" },
    { name: t.nav.studyAbroad, href: "/study-abroad" },
    { name: t.nav.flightBooking, href: "/flight-booking" },
    { name: t.nav.housing, href: "/housing" },
    { name: t.nav.jobs, href: "/jobs" },
    { name: t.nav.parcelShipping, href: "/parcel-shipping" }
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Success Stories", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" }
  ];

  const destinations = [
    { name: "Study in Canada", href: "/destinations/canada" },
    { name: "Study in UK", href: "/destinations/uk" },
    { name: "Study in France", href: "/destinations/france" },
    { name: "Study in Germany", href: "/destinations/germany" },
    { name: "Work in UAE", href: "/destinations/uae" },
    { name: "Visit Europe", href: "/destinations/europe" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/patricktravel", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/patricktravel", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/patricktravel", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/patricktravel", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com/patricktravel", label: "YouTube" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center space-x-3 mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <img
                src="/images/logo.png"
                alt="Patrick Travel Logo"
                className="h-16 w-auto"
              />
              <span className="font-bold text-2xl font-dm-sans">Patrick Travel</span>
            </motion.div>

            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Your trusted partner for global opportunities. We specialize in visa assistance,
              study abroad programs, and comprehensive travel services across Africa, Europe,
              Canada, and UAE.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  123 Business District, Douala, Cameroon
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+237 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@patricktravel.cm</span>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="mt-6">
              <a
                href="https://wa.me/237987654321"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors"
              >
                <MessageSquare className="h-5 w-5" />
                <span className="text-sm font-medium">WhatsApp Us</span>
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Popular Destinations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-6">Popular Destinations</h3>
            <ul className="space-y-3">
              {destinations.map((destination) => (
                <li key={destination.name}>
                  <Link
                    href={destination.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {destination.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center lg:max-w-none lg:text-left lg:flex lg:items-center lg:justify-between">
            <div className="lg:flex-1">
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300 text-sm">
                Get the latest updates on visa requirements, scholarship opportunities, and travel tips.
              </p>
            </div>
            <div className="mt-6 lg:mt-0 lg:ml-8">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <motion.div
          className="border-t border-white/10 mt-12 pt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-6 md:mb-0">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass p-4 rounded-2xl hover:bg-blue-600/50 transition-all duration-300 group border border-white/20"
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              className="text-center md:text-right"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 text-lg mb-4 font-medium">
                Licensed Travel Agency | IATA Accredited
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
                {["🇨🇲 Cameroon", "🇫🇷 France", "🇬🇧 UK", "🇨🇦 Canada", "🇦🇪 UAE"].map((country, index) => (
                  <motion.span
                    key={country}
                    className="glass px-3 py-1 rounded-full text-white/80 border border-white/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {country}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 md:mb-0 flex items-center space-x-2">
              <Heart className="h-4 w-4 text-red-400" />
              <p>
                © {currentYear} Patrick Travel Services. Made with love in Cameroon.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-blue-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
