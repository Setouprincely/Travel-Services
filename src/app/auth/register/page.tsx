"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { useAuth } from "@/contexts/auth-context";

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    confirmEmail: "",
    surname: "",
    otherNames: "",
    firstName: "",
    gender: "",
    dateOfBirth: "",
    birthCountry: "",
    birthPlace: "",
    nationality: "",
    idType: "",
    idValidityDate: "",
    idNumber: "",
    idIssuingCountry: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
    acceptPatrickServices: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.surname) newErrors.surname = "Surname is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (formData.email !== formData.confirmEmail) newErrors.confirmEmail = "Emails do not match";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required";
    if (!formData.birthCountry) newErrors.birthCountry = "Birth country is required";
    if (!formData.birthPlace) newErrors.birthPlace = "Birth place is required";
    if (!formData.nationality) newErrors.nationality = "Nationality is required";
    if (!formData.idType) newErrors.idType = "ID type is required";
    if (!formData.idNumber) newErrors.idNumber = "ID number is required";
    if (!formData.idIssuingCountry) newErrors.idIssuingCountry = "ID issuing country is required";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const userData = {
        firstName: formData.firstName,
        lastName: formData.surname,
        email: formData.email,
        password: formData.password,
        accountType: 'student', // Assuming default, adjust if needed
        country: formData.idIssuingCountry,
        nationality: formData.nationality,
        dateOfBirth: formData.dateOfBirth,
        placeOfBirth: formData.birthPlace,
        gender: formData.gender,
        documentType: formData.idType,
        documentNumber: formData.idNumber,
        documentIssueDate: formData.idValidityDate,
        hasHandicap: false, // Adjust if there's a field
      };
      await register(userData);
      setRegistrationSuccess(true);
    } catch (error) {
      setErrors({
        form: "Registration failed. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white pt-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8"
      >
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="/images/logo.png"
            alt="Patrick Travel"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-forest-600">
            Join Patrick Travel Services today
          </p>
        </div>

        <div className="mt-8 bg-white shadow-xl rounded-lg p-8 border border-gray-200">
          {registrationSuccess ? (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Registration Successful!</h3>
              <p className="text-gray-600">
                We've sent a confirmation email to <strong>{formData.email}</strong>. 
                Please check your inbox and click the confirmation link to activate your account.
              </p>
              <div className="space-y-3 pt-4">
                <Link href="/auth/login">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Go to Login
                  </Button>
                </Link>
                <p className="text-sm text-gray-500">
                  Didn't receive the email? Check your spam folder or contact support.
                </p>
              </div>
            </div>
          ) : (
            <>
              {errors.form && (
                <div className="mb-4 p-3 rounded bg-red-50 border border-red-200 text-red-600 text-sm">
                  {errors.form}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-4">
                This address will serve as my login to access my account and, if I accept, to receive information messages from my patrick services and the establishments to which I wish to apply.
              </p>
              <FormField
                label="Email address *"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
              />
              <FormField
                label="Confirmation of email address *"
                name="confirmEmail"
                type="email"
                autoComplete="email"
                required
                value={formData.confirmEmail}
                onChange={handleInputChange}
                error={errors.confirmEmail}
              />
              <FormField
                label="Password *"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={handleInputChange}
                error={errors.password}
              />
              <FormField
                label="Confirm Password *"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                value={formData.confirmPassword}
                onChange={handleInputChange}
                error={errors.confirmPassword}
              />
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Identity</h3>
              <FormField
                label="Surname *"
                name="surname"
                type="text"
                required
                value={formData.surname}
                onChange={handleInputChange}
                error={errors.surname}
              />
              <FormField
                label="Other names (surname)"
                name="otherNames"
                type="text"
                value={formData.otherNames}
                onChange={handleInputChange}
                error={errors.otherNames}
              />
              <FormField
                label="First name *"
                name="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                error={errors.firstName}
              />
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Gender *</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-forest-500 focus:ring-forest-500"
                  required
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && <p className="mt-1 text-sm text-red-600">{errors.gender}</p>}
              </div>
              <FormField
                label="Date of birth * (dd/mm/yyyy)"
                name="dateOfBirth"
                type="date"
                required
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                error={errors.dateOfBirth}
              />
              <FormField
                label="Countries and territories of birth *"
                name="birthCountry"
                type="text"
                required
                value={formData.birthCountry}
                onChange={handleInputChange}
                error={errors.birthCountry}
              />
              <FormField
                label="Place of birth *"
                name="birthPlace"
                type="text"
                required
                value={formData.birthPlace}
                onChange={handleInputChange}
                error={errors.birthPlace}
              />
              <FormField
                label="Countries and territories of nationality *"
                name="nationality"
                type="text"
                required
                value={formData.nationality}
                onChange={handleInputChange}
                error={errors.nationality}
              />
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Identity document</h3>
              <p className="text-sm text-gray-600 mb-4">
                To finalize my account, I carefully fill in the information below as it appears on my identity document.
              </p>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Type of ID *</label>
                <select
                  name="idType"
                  value={formData.idType}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-forest-500 focus:ring-forest-500"
                  required
                >
                  <option value="">Select ID type</option>
                  <option value="passport">Passport</option>
                  <option value="national_id">National ID</option>
                  <option value="drivers_license">Driver's License</option>
                </select>
                {errors.idType && <p className="mt-1 text-sm text-red-600">{errors.idType}</p>}
              </div>
              <FormField
                label="Validity date (dd/mm/yyyy)"
                name="idValidityDate"
                type="date"
                value={formData.idValidityDate}
                onChange={handleInputChange}
                error={errors.idValidityDate}
              />
              <FormField
                label="Identity document number *"
                name="idNumber"
                type="text"
                required
                value={formData.idNumber}
                onChange={handleInputChange}
                error={errors.idNumber}
              />
              <FormField
                label="Countries and territories issuing the identity document *"
                name="idIssuingCountry"
                type="text"
                required
                value={formData.idIssuingCountry}
                onChange={handleInputChange}
                error={errors.idIssuingCountry}
              />
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Miscellaneous</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    id="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={(e) => setFormData(prev => ({ ...prev, acceptTerms: e.target.checked }))}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-forest-600 focus:ring-forest-500"
                  />
                  <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-600">
                    I agree that the information entered will be used as part of the application procedure for studies in France.
                  </label>
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    name="acceptPatrickServices"
                    id="acceptPatrickServices"
                    checked={formData.acceptPatrickServices}
                    onChange={(e) => setFormData(prev => ({ ...prev, acceptPatrickServices: e.target.checked }))}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-forest-600 focus:ring-forest-500"
                  />
                  <label htmlFor="acceptPatrickServices" className="ml-2 block text-sm text-gray-600">
                    I would like to register with the patrick services. The following data will be transmitted to patrick services: last name, first name, email address, academic background (diploma, year of graduation, secondary or higher education institution), professional background (if any), and training for which I am applying for a visa.
                  </label>
                </div>
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="w-full bg-forest-600 hover:bg-forest-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating account..." : "Create Account"}
              </Button>
            </div>
          </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Or
                    </span>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Link href="/auth/login" className="text-forest-600 hover:text-forest-500">
                    Already have an account? <span className="font-semibold">Sign in</span>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}
