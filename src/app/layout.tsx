import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/language-context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Patrick Travel Services - Visa Support & Study Abroad",
  description: "Professional visa assistance, study abroad programs, flight booking, housing, and job placement services in Cameroon. Expert support for Africa, Europe, Canada, and UAE destinations.",
  keywords: "visa assistance, study abroad, travel services, Cameroon, flight booking, housing, job placement",
  authors: [{ name: "Patrick Travel Services" }],
  openGraph: {
    title: "Patrick Travel Services - Your Gateway to Global Opportunities",
    description: "Professional visa assistance, study abroad programs, and travel logistics services in Cameroon.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-inter antialiased bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
