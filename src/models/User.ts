import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  accountType: 'student' | 'worker' | 'tourist' | 'business';
  country: string;
  nationality: string;
  dateOfBirth: string;
  placeOfBirth: string;
  gender: string;
  documentType: string;
  documentNumber: string;
  documentIssueDate: string;
  hasHandicap: boolean;
  handicapDetails?: string;
  isVerified: boolean;
  verificationToken: string;
  verificationExpires: Date;
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
  createdAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
  generateVerificationToken(): string;
  generatePasswordResetToken(): string;
}

const userSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  accountType: { 
    type: String, 
    required: true, 
    enum: ['student', 'worker', 'tourist', 'business']
  },
  country: { type: String, required: true },
  nationality: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  placeOfBirth: { type: String, required: true },
  gender: { type: String, required: true },
  documentType: { type: String, required: true },
  documentNumber: { type: String, required: true },
  documentIssueDate: { type: String, required: true },
  hasHandicap: { type: Boolean, default: false },
  handicapDetails: { type: String },
  isVerified: { type: Boolean, default: false },
  verificationToken: { type: String },
  verificationExpires: { type: Date },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
  createdAt: { type: Date, default: Date.now },
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

// Generate email verification token
userSchema.methods.generateVerificationToken = function(): string {
  const token = crypto.randomBytes(32).toString('hex');
  this.verificationToken = token;
  this.verificationExpires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
  return token;
};

// Generate password reset token
userSchema.methods.generatePasswordResetToken = function(): string {
  const token = crypto.randomBytes(32).toString('hex');
  this.resetPasswordToken = token;
  this.resetPasswordExpires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
  return token;
};

export const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);
