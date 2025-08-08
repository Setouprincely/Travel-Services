import { NextResponse } from 'next/server';
import { connect } from '@/lib/mongodb';
import { User } from '@/models/User';
import { sendVerificationEmail } from '@/lib/email';
import { SignJWT } from 'jose';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key'
);

export async function POST(req: Request) {
  try {
    await connect();
    const body = await req.json();
    
    // Check if user already exists
    const existingUser = await User.findOne({ email: body.email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 400 }
      );
    }

    // Create new user
    const user = new User(body);
    
    // Generate verification token
    const verificationToken = user.generateVerificationToken();
    
    // Save user
    await user.save();

    // Send verification email
    await sendVerificationEmail(user.email, verificationToken);

    // Create JWT token
    const token = await new SignJWT({ userId: user._id.toString() })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('7d')
      .sign(JWT_SECRET);

    return NextResponse.json(
      {
        message: 'Registration successful. Please check your email to verify your account.',
        user: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email
        },
        token
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
