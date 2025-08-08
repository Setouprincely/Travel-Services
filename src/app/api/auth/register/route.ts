import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase-client';
import { SignJWT } from 'jose';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key'
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    console.log('Registration attempt for:', body.email);
    
    const { data, error } = await supabase.auth.signUp({
      email: body.email,
      password: body.password,
      options: {
        data: {
          firstName: body.firstName,
          lastName: body.lastName,
          country: body.country,
          nationality: body.nationality,
          dateOfBirth: body.dateOfBirth,
          placeOfBirth: body.placeOfBirth,
          gender: body.gender,
          documentType: body.documentType,
          documentNumber: body.documentNumber,
          documentIssueDate: body.documentIssueDate,
          hasHandicap: body.hasHandicap,
          handicapDetails: body.handicapDetails
        }
      }
    });

    if (error) {
      console.error('Supabase registration error:', error);
      return NextResponse.json(
        { message: error.message },
        { status: 400 }
      );
    }

    if (!data.user) {
      console.error('No user data returned from Supabase');
      return NextResponse.json(
        { message: 'User creation failed' },
        { status: 500 }
      );
    }

    console.log('User created successfully:', data.user.id);

    // Create JWT token
    const token = await new SignJWT({ userId: data.user.id })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('7d')
      .sign(JWT_SECRET);

    const userData = {
      id: data.user.id,
      firstName: data.user.user_metadata?.firstName || body.firstName,
      lastName: data.user.user_metadata?.lastName || body.lastName,
      email: data.user.email,
      country: data.user.user_metadata?.country || body.country,
      nationality: data.user.user_metadata?.nationality || body.nationality,
      dateOfBirth: data.user.user_metadata?.dateOfBirth || body.dateOfBirth,
      placeOfBirth: data.user.user_metadata?.placeOfBirth || body.placeOfBirth,
      gender: data.user.user_metadata?.gender || body.gender,
      documentType: data.user.user_metadata?.documentType || body.documentType,
      documentNumber: data.user.user_metadata?.documentNumber || body.documentNumber,
      documentIssueDate: data.user.user_metadata?.documentIssueDate || body.documentIssueDate,
      hasHandicap: data.user.user_metadata?.hasHandicap || body.hasHandicap,
      handicapDetails: data.user.user_metadata?.handicapDetails || body.handicapDetails
    };

    return NextResponse.json(
      {
        message: 'Registration successful! Please check your email and click the confirmation link to activate your account.',
        user: userData,
        token,
        requiresConfirmation: true
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
