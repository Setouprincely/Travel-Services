import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase-client';
import { SignJWT } from 'jose';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key'
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }

    console.log('Attempting login for:', email);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      console.error('Supabase login error:', error);
      
      // Handle specific error cases
      if (error.message === 'Email not confirmed') {
        return NextResponse.json(
          { message: 'Please check your email and click the confirmation link before logging in.' },
          { status: 400 }
        );
      }
      
      return NextResponse.json(
        { message: error.message },
        { status: 401 }
      );
    }

    if (!data.user) {
      console.error('No user data returned from Supabase');
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    console.log('Login successful for user:', data.user.id);

    // Create JWT token
    const token = await new SignJWT({ userId: data.user.id })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('7d')
      .sign(JWT_SECRET);

    return NextResponse.json(
      {
        message: 'Login successful',
        user: {
          id: data.user.id,
          firstName: data.user.user_metadata.firstName,
          lastName: data.user.user_metadata.lastName,
          email: data.user.email,
          country: data.user.user_metadata.country,
          nationality: data.user.user_metadata.nationality,
          dateOfBirth: data.user.user_metadata.dateOfBirth,
          placeOfBirth: data.user.user_metadata.placeOfBirth,
          gender: data.user.user_metadata.gender,
          documentType: data.user.user_metadata.documentType,
          documentNumber: data.user.user_metadata.documentNumber,
          documentIssueDate: data.user.user_metadata.documentIssueDate,
          hasHandicap: data.user.user_metadata.hasHandicap,
          handicapDetails: data.user.user_metadata.handicapDetails
        },
        token
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
