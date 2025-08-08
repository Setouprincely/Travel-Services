"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { WhatsAppWidget } from "@/components/ui/whatsapp-widget";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { useAuth } from "@/contexts/auth-context";
import { 
  User, 
  Edit, 
  Save, 
  X, 
  Camera, 
  MapPin, 
  Calendar, 
  Mail, 
  Phone, 
  Globe, 
  FileText, 
  Shield,
  CheckCircle,
  AlertCircle,
  Settings,
  Bell,
  CreditCard
} from "@/components/ui/icons";

export default function ProfilePage() {
  const router = useRouter();
  const { user, loading, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);
  const [activeTab, setActiveTab] = useState('personal');
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
    }
    if (user) {
      setEditedUser(user);
    }
  }, [loading, user, router]);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSaveMessage('Profile updated successfully!');
      setIsEditing(false);
      setTimeout(() => setSaveMessage(''), 3000);
    } catch (error) {
      setSaveMessage('Failed to update profile. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setEditedUser(user);
    setIsEditing(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setEditedUser(prev => prev ? { ...prev, [field]: value } : null);
  };

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Navigation />
        <main className="container mx-auto px-4 py-8 pt-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="relative h-32 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end space-x-4">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white flex items-center justify-center">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <button className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <Camera className="w-3 h-3 text-white" />
                    </button>
                  </div>
                  <div className="text-white pb-2">
                    <h1 className="text-2xl font-bold">{user.firstName} {user.lastName}</h1>
                    <p className="text-blue-100 text-sm">{user.email}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="p-6 bg-gray-50 border-b">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">0</div>
                  <div className="text-sm text-gray-600">Applications</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">0</div>
                  <div className="text-sm text-gray-600">Approved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">0</div>
                  <div className="text-sm text-gray-600">Services Used</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">
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
                  <div className="text-sm text-gray-600">Profile Complete</div>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex overflow-x-auto">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-blue-600 text-blue-600 bg-blue-50'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Save Message */}
          <AnimatePresence>
            {saveMessage && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`mb-6 p-4 rounded-lg flex items-center space-x-2 ${
                  saveMessage.includes('success') 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {saveMessage.includes('success') ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <AlertCircle className="w-5 h-5" />
                )}
                <span>{saveMessage}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Content Area */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6">
              {/* Personal Info Tab */}
              {activeTab === 'personal' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
                    <div className="flex space-x-3">
                      {isEditing ? (
                        <>
                          <Button
                            onClick={handleCancel}
                            variant="outline"
                            className="flex items-center space-x-2"
                          >
                            <X className="w-4 h-4" />
                            <span>Cancel</span>
                          </Button>
                          <Button
                            onClick={handleSave}
                            disabled={isSaving}
                            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
                          >
                            <Save className="w-4 h-4" />
                            <span>{isSaving ? 'Saving...' : 'Save Changes'}</span>
                          </Button>
                        </>
                      ) : (
                        <Button
                          onClick={() => setIsEditing(true)}
                          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
                        >
                          <Edit className="w-4 h-4" />
                          <span>Edit Profile</span>
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Basic Information */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
                        <User className="w-5 h-5 text-blue-600" />
                        <span>Basic Information</span>
                      </h3>
                      
                      <div className="space-y-4">
                        {isEditing ? (
                          <>
                            <FormField
                              label="First Name"
                              name="firstName"
                              value={editedUser?.firstName || ''}
                              onChange={(e) => handleInputChange('firstName', e.target.value)}
                            />
                            <FormField
                              label="Last Name"
                              name="lastName"
                              value={editedUser?.lastName || ''}
                              onChange={(e) => handleInputChange('lastName', e.target.value)}
                            />
                            <FormField
                              label="Email"
                              name="email"
                              type="email"
                              value={editedUser?.email || ''}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                            />
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                              <select
                                value={editedUser?.gender || ''}
                                onChange={(e) => handleInputChange('gender', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              >
                                <option value="">Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                              </select>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                              <User className="w-5 h-5 text-gray-400" />
                              <div>
                                <div className="text-sm text-gray-500">Full Name</div>
                                <div className="font-medium">{user.firstName} {user.lastName}</div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                              <Mail className="w-5 h-5 text-gray-400" />
                              <div>
                                <div className="text-sm text-gray-500">Email Address</div>
                                <div className="font-medium">{user.email}</div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                              <User className="w-5 h-5 text-gray-400" />
                              <div>
                                <div className="text-sm text-gray-500">Gender</div>
                                <div className="font-medium capitalize">{user.gender}</div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Location & Birth Information */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
                        <MapPin className="w-5 h-5 text-green-600" />
                        <span>Location & Birth</span>
                      </h3>
                      
                      <div className="space-y-4">
                        {isEditing ? (
                          <>
                            <FormField
                              label="Date of Birth"
                              name="dateOfBirth"
                              type="date"
                              value={editedUser?.dateOfBirth || ''}
                              onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                            />
                            <FormField
                              label="Place of Birth"
                              name="placeOfBirth"
                              value={editedUser?.placeOfBirth || ''}
                              onChange={(e) => handleInputChange('placeOfBirth', e.target.value)}
                            />
                            <FormField
                              label="Country"
                              name="country"
                              value={editedUser?.country || ''}
                              onChange={(e) => handleInputChange('country', e.target.value)}
                            />
                            <FormField
                              label="Nationality"
                              name="nationality"
                              value={editedUser?.nationality || ''}
                              onChange={(e) => handleInputChange('nationality', e.target.value)}
                            />
                          </>
                        ) : (
                          <>
                            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                              <Calendar className="w-5 h-5 text-gray-400" />
                              <div>
                                <div className="text-sm text-gray-500">Date of Birth</div>
                                <div className="font-medium">{user.dateOfBirth}</div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                              <MapPin className="w-5 h-5 text-gray-400" />
                              <div>
                                <div className="text-sm text-gray-500">Place of Birth</div>
                                <div className="font-medium">{user.placeOfBirth}</div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                              <Globe className="w-5 h-5 text-gray-400" />
                              <div>
                                <div className="text-sm text-gray-500">Country</div>
                                <div className="font-medium">{user.country}</div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                              <Globe className="w-5 h-5 text-gray-400" />
                              <div>
                                <div className="text-sm text-gray-500">Nationality</div>
                                <div className="font-medium">{user.nationality}</div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Documents Tab */}
              {activeTab === 'documents' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900">Document Information</h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
                        <FileText className="w-5 h-5 text-purple-600" />
                        <span>Identity Document</span>
                      </h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <FileText className="w-5 h-5 text-gray-400" />
                          <div>
                            <div className="text-sm text-gray-500">Document Type</div>
                            <div className="font-medium capitalize">{user.documentType}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <Shield className="w-5 h-5 text-gray-400" />
                          <div>
                            <div className="text-sm text-gray-500">Document Number</div>
                            <div className="font-medium">{user.documentNumber}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <Calendar className="w-5 h-5 text-gray-400" />
                          <div>
                            <div className="text-sm text-gray-500">Issue Date</div>
                            <div className="font-medium">{user.documentIssueDate}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-gray-800">Document Upload</h3>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                        <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2">Upload your identity document</p>
                        <p className="text-sm text-gray-500">PDF, JPG, PNG up to 10MB</p>
                        <Button className="mt-4">Choose File</Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Security Tab */}
              {activeTab === 'security' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900">Security Settings</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="font-medium text-green-800">Account Verified</div>
                        <div className="text-sm text-green-600">Your email address has been verified</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800">Password</h3>
                        <div className="space-y-3">
                          <FormField
                            label="Current Password"
                            name="currentPassword"
                            type="password"
                            placeholder="Enter current password"
                          />
                          <FormField
                            label="New Password"
                            name="newPassword"
                            type="password"
                            placeholder="Enter new password"
                          />
                          <FormField
                            label="Confirm New Password"
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm new password"
                          />
                          <Button className="w-full">Update Password</Button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800">Two-Factor Authentication</h3>
                        <div className="p-4 border border-gray-200 rounded-lg">
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <div className="font-medium">SMS Authentication</div>
                              <div className="text-sm text-gray-500">Receive codes via SMS</div>
                            </div>
                            <button className="w-12 h-6 bg-gray-200 rounded-full relative transition-colors">
                              <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform"></div>
                            </button>
                          </div>
                          <Button variant="outline" className="w-full">Setup 2FA</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Notifications Tab */}
              {activeTab === 'notifications' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900">Notification Preferences</h2>
                  
                  <div className="space-y-6">
                    {[
                      { title: 'Application Updates', desc: 'Get notified about your visa application status', enabled: true },
                      { title: 'Email Notifications', desc: 'Receive important updates via email', enabled: true },
                      { title: 'SMS Notifications', desc: 'Get text messages for urgent updates', enabled: false },
                      { title: 'Marketing Emails', desc: 'Receive promotional offers and news', enabled: false },
                      { title: 'Document Reminders', desc: 'Reminders for document expiration dates', enabled: true },
                    ].map((notification, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <div className="font-medium">{notification.title}</div>
                          <div className="text-sm text-gray-500">{notification.desc}</div>
                        </div>
                        <button 
                          className={`w-12 h-6 rounded-full relative transition-colors ${
                            notification.enabled ? 'bg-blue-600' : 'bg-gray-200'
                          }`}
                        >
                          <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                            notification.enabled ? 'translate-x-6' : 'translate-x-0.5'
                          }`}></div>
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}