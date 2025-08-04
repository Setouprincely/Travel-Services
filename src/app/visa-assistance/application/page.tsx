"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { WhatsAppWidget } from "@/components/ui/whatsapp-widget";
import { FormField, FileUpload, SuccessMessage } from "@/components/ui/rich-form";
import { AnimatedButton } from "@/components/ui/animated-button";
import { FloatingParticles } from "@/components/ui/dynamic-backgrounds";
import { 
  FileText, 
  User, 
  MapPin, 
  Calendar, 
  Plane,
  ArrowRight,
  ArrowLeft,
  CheckCircle
} from "@/components/ui/icons";

export default function VisaApplicationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    nationality: "",
    passportNumber: "",
    passportExpiry: "",
    
    // Travel Information
    destination: "",
    visaType: "",
    travelPurpose: "",
    departureDate: "",
    returnDate: "",
    previousVisits: "",
    
    // Additional Information
    occupation: "",
    employer: "",
    monthlyIncome: "",
    emergencyContact: "",
    emergencyPhone: "",
    additionalInfo: ""
  });

  const [files, setFiles] = useState<{
    passport: File[];
    photo: File[];
    bankStatement: File[];
    employmentLetter: File[];
    additional: File[];
  }>({
    passport: [],
    photo: [],
    bankStatement: [],
    employmentLetter: [],
    additional: []
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const steps = [
    {
      id: 1,
      title: "Personal Information",
      icon: User,
      description: "Basic personal details and passport information"
    },
    {
      id: 2,
      title: "Travel Details",
      icon: Plane,
      description: "Destination, dates, and purpose of travel"
    },
    {
      id: 3,
      title: "Background Information",
      icon: FileText,
      description: "Employment, financial, and contact details"
    },
    {
      id: 4,
      title: "Document Upload",
      icon: MapPin,
      description: "Required documents and supporting files"
    }
  ];

  const destinations = [
    { value: "france", label: "France" },
    { value: "canada", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
    { value: "germany", label: "Germany" },
    { value: "usa", label: "United States" },
    { value: "australia", label: "Australia" },
    { value: "uae", label: "United Arab Emirates" }
  ];

  const visaTypes = [
    { value: "tourist", label: "Tourist Visa" },
    { value: "business", label: "Business Visa" },
    { value: "student", label: "Student Visa" },
    { value: "work", label: "Work Visa" },
    { value: "transit", label: "Transit Visa" },
    { value: "family", label: "Family Visit Visa" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (category: keyof typeof files, newFiles: File[]) => {
    setFiles(prev => ({ ...prev, [category]: newFiles }));
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (!formData.firstName) newErrors.firstName = "First name is required";
        if (!formData.lastName) newErrors.lastName = "Last name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.phone) newErrors.phone = "Phone number is required";
        if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required";
        if (!formData.nationality) newErrors.nationality = "Nationality is required";
        if (!formData.passportNumber) newErrors.passportNumber = "Passport number is required";
        if (!formData.passportExpiry) newErrors.passportExpiry = "Passport expiry date is required";
        break;
      
      case 2:
        if (!formData.destination) newErrors.destination = "Destination is required";
        if (!formData.visaType) newErrors.visaType = "Visa type is required";
        if (!formData.travelPurpose) newErrors.travelPurpose = "Travel purpose is required";
        if (!formData.departureDate) newErrors.departureDate = "Departure date is required";
        break;
      
      case 3:
        if (!formData.occupation) newErrors.occupation = "Occupation is required";
        if (!formData.monthlyIncome) newErrors.monthlyIncome = "Monthly income is required";
        if (!formData.emergencyContact) newErrors.emergencyContact = "Emergency contact is required";
        if (!formData.emergencyPhone) newErrors.emergencyPhone = "Emergency phone is required";
        break;
      
      case 4:
        if (files.passport.length === 0) newErrors.passport = "Passport copy is required";
        if (files.photo.length === 0) newErrors.photo = "Passport photo is required";
        if (files.bankStatement.length === 0) newErrors.bankStatement = "Bank statement is required";
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              error={errors.firstName}
              required
            />
            <FormField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              error={errors.lastName}
              required
            />
            <FormField
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
              required
            />
            <FormField
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              error={errors.phone}
              required
            />
            <FormField
              label="Date of Birth"
              name="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              error={errors.dateOfBirth}
              required
            />
            <FormField
              label="Nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleInputChange}
              error={errors.nationality}
              required
            />
            <FormField
              label="Passport Number"
              name="passportNumber"
              value={formData.passportNumber}
              onChange={handleInputChange}
              error={errors.passportNumber}
              required
            />
            <FormField
              label="Passport Expiry Date"
              name="passportExpiry"
              type="date"
              value={formData.passportExpiry}
              onChange={handleInputChange}
              error={errors.passportExpiry}
              required
            />
          </div>
        );

      case 2:
        return (
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              label="Destination Country"
              name="destination"
              type="select"
              value={formData.destination}
              onChange={handleInputChange}
              options={destinations}
              error={errors.destination}
              required
            />
            <FormField
              label="Visa Type"
              name="visaType"
              type="select"
              value={formData.visaType}
              onChange={handleInputChange}
              options={visaTypes}
              error={errors.visaType}
              required
            />
            <FormField
              label="Purpose of Travel"
              name="travelPurpose"
              type="textarea"
              value={formData.travelPurpose}
              onChange={handleInputChange}
              error={errors.travelPurpose}
              required
              rows={3}
              className="md:col-span-2"
            />
            <FormField
              label="Departure Date"
              name="departureDate"
              type="date"
              value={formData.departureDate}
              onChange={handleInputChange}
              error={errors.departureDate}
              required
            />
            <FormField
              label="Return Date"
              name="returnDate"
              type="date"
              value={formData.returnDate}
              onChange={handleInputChange}
              error={errors.returnDate}
            />
            <FormField
              label="Previous Visits"
              name="previousVisits"
              type="textarea"
              value={formData.previousVisits}
              onChange={handleInputChange}
              placeholder="Describe any previous visits to this country"
              rows={3}
              className="md:col-span-2"
            />
          </div>
        );

      case 3:
        return (
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              label="Occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleInputChange}
              error={errors.occupation}
              required
            />
            <FormField
              label="Employer"
              name="employer"
              value={formData.employer}
              onChange={handleInputChange}
              error={errors.employer}
            />
            <FormField
              label="Monthly Income (XAF)"
              name="monthlyIncome"
              type="number"
              value={formData.monthlyIncome}
              onChange={handleInputChange}
              error={errors.monthlyIncome}
              required
            />
            <FormField
              label="Emergency Contact Name"
              name="emergencyContact"
              value={formData.emergencyContact}
              onChange={handleInputChange}
              error={errors.emergencyContact}
              required
            />
            <FormField
              label="Emergency Contact Phone"
              name="emergencyPhone"
              type="tel"
              value={formData.emergencyPhone}
              onChange={handleInputChange}
              error={errors.emergencyPhone}
              required
            />
            <FormField
              label="Additional Information"
              name="additionalInfo"
              type="textarea"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              placeholder="Any additional information you'd like to provide"
              rows={4}
              className="md:col-span-2"
            />
          </div>
        );

      case 4:
        return (
          <div className="space-y-8">
            <FileUpload
              label="Passport Copy"
              name="passport"
              files={files.passport}
              onChange={(newFiles) => handleFileChange('passport', newFiles)}
              accept="image/*,.pdf"
              error={errors.passport}
              required
            />
            <FileUpload
              label="Passport Photo"
              name="photo"
              files={files.photo}
              onChange={(newFiles) => handleFileChange('photo', newFiles)}
              accept="image/*"
              error={errors.photo}
              required
            />
            <FileUpload
              label="Bank Statement (Last 3 months)"
              name="bankStatement"
              files={files.bankStatement}
              onChange={(newFiles) => handleFileChange('bankStatement', newFiles)}
              accept=".pdf,image/*"
              error={errors.bankStatement}
              required
            />
            <FileUpload
              label="Employment Letter"
              name="employmentLetter"
              files={files.employmentLetter}
              onChange={(newFiles) => handleFileChange('employmentLetter', newFiles)}
              accept=".pdf,image/*"
            />
            <FileUpload
              label="Additional Documents"
              name="additional"
              files={files.additional}
              onChange={(newFiles) => handleFileChange('additional', newFiles)}
              accept="*/*"
              multiple
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative">
      <FloatingParticles count={30} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FileText className="h-4 w-4" />
              <span>Visa Application</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-dm-sans">
              Visa Application Form
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Complete your visa application with our step-by-step guided process
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <motion.div
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                    currentStep >= step.id
                      ? 'bg-blue-600 border-blue-600 text-white'
                      : 'bg-white border-gray-300 text-gray-400'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {currentStep > step.id ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    <step.icon className="h-6 w-6" />
                  )}
                </motion.div>
                
                {index < steps.length - 1 && (
                  <div className={`w-16 h-1 mx-4 transition-all duration-300 ${
                    currentStep > step.id ? 'bg-blue-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {steps[currentStep - 1].title}
            </h2>
            <p className="text-gray-600">
              {steps[currentStep - 1].description}
            </p>
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="glass p-8 rounded-3xl border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderStepContent()}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12">
              <AnimatedButton
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                icon={ArrowLeft}
                iconPosition="left"
              >
                Previous
              </AnimatedButton>

              {currentStep < steps.length ? (
                <AnimatedButton
                  variant="glow"
                  onClick={nextStep}
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Next Step
                </AnimatedButton>
              ) : (
                <AnimatedButton
                  variant="gradient"
                  onClick={handleSubmit}
                  loading={isSubmitting}
                  icon={CheckCircle}
                  iconPosition="right"
                >
                  Submit Application
                </AnimatedButton>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />

      <AnimatePresence>
        {showSuccess && (
          <SuccessMessage
            title="Application Submitted!"
            message="Your visa application has been submitted successfully. We'll contact you within 24 hours with next steps."
            onClose={() => setShowSuccess(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
