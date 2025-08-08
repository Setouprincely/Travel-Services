import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    return NextResponse.json({
      success: true,
      message: 'Login route is working'
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
