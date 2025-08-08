import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key'
);

// Protected routes that require authentication
const protectedRoutes = [
  '/',
  '/visa-assistance',
  '/study-abroad',
  '/flight-booking',
  '/housing',
  '/auth/profile',
];

// Public routes that don't require authentication
const publicRoutes = [
  '/auth/login',
  '/auth/register',
  '/api/auth/login',
  '/api/auth/register',
];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Allow public routes
  if (publicRoutes.some(route => path.startsWith(route))) {
    return NextResponse.next();
  }

  // Check if the path is in protected routes
  if (protectedRoutes.some(route => path.startsWith(route))) {
    // Get the token from the cookies
    const token = request.cookies.get('token')?.value;

    if (!token) {
      // Redirect to login if no token is found
      const loginUrl = new URL('/auth/login', request.url);
      loginUrl.searchParams.set('from', request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }

    try {
      // Verify the token
      const { payload } = await jwtVerify(token, JWT_SECRET);
      const userId = payload.userId as string;

      // For now, skip user confirmation check since we don't have service role key
      // In production, you would check user confirmation status here
      return NextResponse.next();
    } catch (error) {
      // Token is invalid, expired, or user not confirmed
      const loginUrl = new URL('/auth/login', request.url);
      loginUrl.searchParams.set('from', request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/visa-assistance/:path*',
    '/study-abroad/:path*',
    '/flight-booking/:path*',
    '/housing/:path*',
    '/jobs/:path*',
    '/auth/profile',
  ],
};
