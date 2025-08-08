import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://udweeirbcyvuqlzjfmix.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkd2VlaXJiY3l2dXFsempmbWl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2NzY3ODgsImV4cCI6MjA3MDI1Mjc4OH0.bc2377BCPc9D_cpAMFd02XYosujlXffIsNMPzuP4pWI';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});
