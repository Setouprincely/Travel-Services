"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Phone, Mail } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { smoothScrollTo } from "@/lib/smooth-scroll";
import { useLanguage } from "@/contexts/language-context";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "home", label: t.nav.home },
    { href: "about", label: t.nav.about },
    { href: "testimonials", label: "Testimonials" },
    { href: "payments", label: "Payments" },
    { href: "contact", label: t.nav.contact },
  ];

  const handleNavClick = (href: string) => {
    smoothScrollTo(href);
    setIsOpen(false);
  };

  const services = [
    { href: "/visa-assistance", label: t.nav.visaAssistance },
    { href: "/study-abroad", label: t.nav.studyAbroad },
    { href: "/flight-booking", label: t.nav.flightBooking },
    { href: "/housing", label: t.nav.housing },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 ${scrolled ? 'bg-white shadow-lg' : 'bg-white'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="/images/logo.png"
                alt="Patrick Travel Logo"
                className="h-12 w-auto"
              />
              <span className="font-bold text-xl text-gray-900">
                Patrick Travel
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-700 hover:text-forest-600 px-3 py-2 rounded-md text-sm font-medium transition-colors relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-forest-600 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  {t.nav.services}
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/auth/login">
              <Button variant="premium" size="sm">Login</Button>
            </Link>
            <Link href="/auth/register">
              <Button variant="premium" size="sm">Register</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Services */}
            <div className="px-3 py-2">
              <div className="text-gray-900 font-medium mb-2">Services</div>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="text-gray-600 hover:text-blue-600 block px-3 py-1 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {service.label}
                </Link>
              ))}
            </div>
            
            {/* Mobile Auth Buttons */}
            <div className="px-3 py-2 border-t border-gray-200">
              <div className="flex flex-col space-y-2">
                <Link href="/auth/login">
                  <Button variant="premium" className="w-full justify-center">
                    Login
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button variant="premium" className="w-full justify-center">
                    Register
                  </Button>
                </Link>
              </div>
            </div>

            {/* Mobile Contact */}
            <div className="px-3 py-2 border-t border-gray-200">
              <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                <Phone className="h-4 w-4" />
                <span>+237 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="h-4 w-4" />
                <span>info@patricktravel.cm</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
