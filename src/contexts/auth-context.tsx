"use client";

import { createContext, useContext, useState, useEffect } from 'react';

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
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
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: Omit<User, 'id'> & { password: string }) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored session
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Invalid credentials');
      }

      const data = await response.json();
      
      // Store the token in a cookie
      document.cookie = `token=${data.token}; path=/; max-age=86400; secure; samesite=strict`;
      
      setUser(data.user);
      localStorage.setItem('user', JSON.stringify(data.user));
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const register = async (userData: Omit<User, 'id'> & { password: string }) => {
    try {
      console.log('Attempting registration with data:', userData);
      
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const responseData = await response.json();
      console.log('Registration response:', responseData);

      if (!response.ok) {
        throw new Error(responseData.message || 'Registration failed');
      }

      // Store the token in a cookie
      document.cookie = `token=${responseData.token}; path=/; max-age=86400; secure; samesite=strict`;
      
      setUser(responseData.user);
      localStorage.setItem('user', JSON.stringify(responseData.user));
    } catch (error) {
      console.error('Registration error in context:', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    // Clear the token cookie
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
