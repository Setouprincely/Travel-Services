"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Phone, Mail, User, Settings, LogOut, CreditCard, FileText, Shield, Bell, ChevronDown } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { smoothScrollTo } from "@/lib/smooth-scroll";
import { useLanguage } from "@/contexts/language-context";
import { useAuth } from "@/contexts/auth-context";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const { t } = useLanguage();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (profileDropdownOpen && !target.closest('.profile-dropdown')) {
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [profileDropdownOpen]);

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

          {/* Auth Section */}
          <div className="hidden lg:flex items-center space-x-3">
            {user ? (
              /* Premium Profile Dropdown */
              <div className="relative profile-dropdown">
                <motion.button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center space-x-3 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold">{user.firstName}</div>
                    <div className="text-xs opacity-80">{user.email}</div>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${profileDropdownOpen ? 'rotate-180' : ''}`} />
                </motion.button>

                <AnimatePresence>
                  {profileDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                    >
                      {/* Profile Header */}
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-white">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                            <User className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{user.firstName} {user.lastName}</h3>
                            <p className="text-sm opacity-90">{user.email}</p>
                            <div className="flex items-center space-x-1 mt-1">
                              <Shield className="w-3 h-3" />
                              <span className="text-xs">Verified Account</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Quick Stats */}
                      <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-lg font-bold text-blue-600">0</div>
                            <div className="text-xs text-gray-600">Applications</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-green-600">0</div>
                            <div className="text-xs text-gray-600">Approved</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-purple-600">
                              {Math.round(((user.firstName ? 1 : 0) + 
                                          (user.lastName ? 1 : 0) + 
                                          (user.email ? 1 : 0) + 
                                          (user.country ? 1 : 0) + 
                                          (user.nationality ? 1 : 0) + 
                                          (user.dateOfBirth ? 1 : 0) + 
                                          (user.placeOfBirth ? 1 : 0) + 
                                          (user.gender ? 1 : 0) + 
                                          (user.documentType ? 1 : 0) + 
                                          (user.documentNumber ? 1 : 0)) / 10 * 100)}%
                            </div>
                            <div className="text-xs text-gray-600">Complete</div>
                          </div>
                        </div>
                      </div>

                      {/* Menu Items */}
                      <div className="py-2">
                        <Link
                          href="/auth/profile"
                          className="flex items-center space-x-3 px-6 py-3 hover:bg-blue-50 transition-colors group"
                          onClick={() => setProfileDropdownOpen(false)}
                        >
                          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                            <User className="w-4 h-4 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">Personal Details</div>
                            <div className="text-sm text-gray-500">Manage your profile information</div>
                          </div>
                        </Link>

                        <Link
                          href="/auth/profile/documents"
                          className="flex items-center space-x-3 px-6 py-3 hover:bg-green-50 transition-colors group"
                          onClick={() => setProfileDropdownOpen(false)}
                        >
                          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                            <FileText className="w-4 h-4 text-green-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">Documents</div>
                            <div className="text-sm text-gray-500">Upload and manage documents</div>
                          </div>
                        </Link>

                        <Link
                          href="/auth/profile/applications"
                          className="flex items-center space-x-3 px-6 py-3 hover:bg-purple-50 transition-colors group"
                          onClick={() => setProfileDropdownOpen(false)}
                        >
                          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                            <CreditCard className="w-4 h-4 text-purple-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">Applications</div>
                            <div className="text-sm text-gray-500">Track your visa applications</div>
                          </div>
                        </Link>

                        <Link
                          href="/auth/profile/notifications"
                          className="flex items-center space-x-3 px-6 py-3 hover:bg-yellow-50 transition-colors group"
                          onClick={() => setProfileDropdownOpen(false)}
                        >
                          <div className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                            <Bell className="w-4 h-4 text-yellow-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">Notifications</div>
                            <div className="text-sm text-gray-500">Manage your preferences</div>
                          </div>
                        </Link>

                        <Link
                          href="/auth/profile/settings"
                          className="flex items-center space-x-3 px-6 py-3 hover:bg-gray-50 transition-colors group"
                          onClick={() => setProfileDropdownOpen(false)}
                        >
                          <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                            <Settings className="w-4 h-4 text-gray-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">Settings</div>
                            <div className="text-sm text-gray-500">Account and privacy settings</div>
                          </div>
                        </Link>
                      </div>

                      {/* Logout */}
                      <div className="border-t border-gray-100 py-2">
                        <button
                          onClick={() => {
                            logout();
                            setProfileDropdownOpen(false);
                          }}
                          className="flex items-center space-x-3 px-6 py-3 hover:bg-red-50 transition-colors group w-full text-left"
                        >
                          <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center group-hover:bg-red-200 transition-colors">
                            <LogOut className="w-4 h-4 text-red-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">Sign Out</div>
                            <div className="text-sm text-gray-500">Sign out of your account</div>
                          </div>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              /* Login/Register Buttons */
              <>
                <Link href="/auth/login">
                  <Button variant="premium" size="sm">Login</Button>
                </Link>
                <Link href="/auth/register">
                  <Button variant="premium" size="sm">Register</Button>
                </Link>
              </>
            )}
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
            
            {/* Mobile Auth Section */}
            <div className="px-3 py-2 border-t border-gray-200">
              {user ? (
                /* Mobile Profile Section */
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold">{user.firstName} {user.lastName}</div>
                      <div className="text-sm opacity-90">{user.email}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Link
                      href="/auth/profile"
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-50 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <User className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium">Personal Details</span>
                    </Link>
                    <Link
                      href="/auth/profile/documents"
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-green-50 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <FileText className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium">Documents</span>
                    </Link>
                    <Link
                      href="/auth/profile/applications"
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-purple-50 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <CreditCard className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-medium">Applications</span>
                    </Link>
                    <Link
                      href="/auth/profile/settings"
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <Settings className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-medium">Settings</span>
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsOpen(false);
                      }}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-red-50 transition-colors w-full text-left"
                    >
                      <LogOut className="w-4 h-4 text-red-600" />
                      <span className="text-sm font-medium">Sign Out</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Mobile Login/Register Buttons */
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
              )}
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
