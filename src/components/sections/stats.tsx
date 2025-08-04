"use client";

import { StatsGrid } from "@/components/ui/animated-counter";
import { 
  Users, 
  Globe, 
  Award, 
  CheckCircle, 
  GraduationCap, 
  Plane,
  Star,
  Heart
} from "@/components/ui/icons";

export function Stats() {
  const mainStats = [
    {
      icon: Users,
      value: 1000,
      suffix: "+",
      label: "Happy Clients",
      description: "Satisfied customers who achieved their dreams",
      color: "text-blue-600"
    },
    {
      icon: Globe,
      value: 25,
      suffix: "+",
      label: "Countries Served",
      description: "Global destinations we help you reach",
      color: "text-green-600"
    },
    {
      icon: CheckCircle,
      value: 98,
      suffix: "%",
      label: "Success Rate",
      description: "Successful visa and application approvals",
      color: "text-purple-600"
    },
    {
      icon: Award,
      value: 5,
      suffix: "+",
      label: "Years Experience",
      description: "Proven track record in travel services",
      color: "text-orange-600"
    }
  ];

  const serviceStats = [
    {
      icon: GraduationCap,
      value: 500,
      suffix: "+",
      label: "Students Placed",
      description: "Successfully enrolled in universities worldwide",
      color: "text-indigo-600"
    },
    {
      icon: Plane,
      value: 2500,
      suffix: "+",
      label: "Flights Booked",
      description: "Seamless travel arrangements made",
      color: "text-sky-600"
    },
    {
      icon: Star,
      value: 4.9,
      suffix: "/5",
      label: "Client Rating",
      description: "Average satisfaction score from reviews",
      color: "text-yellow-600"
    },
    {
      icon: Heart,
      value: 95,
      suffix: "%",
      label: "Referral Rate",
      description: "Clients who recommend us to others",
      color: "text-pink-600"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Stats */}
      <StatsGrid
        stats={mainStats}
        title="Our Impact in Numbers"
        subtitle="Trusted by thousands of clients worldwide for their travel and education needs"
        className="relative"
      />

      {/* Service-specific Stats */}
      <StatsGrid
        stats={serviceStats}
        title="Service Excellence"
        subtitle="Detailed metrics showcasing our commitment to quality and customer satisfaction"
        className="bg-white/30 backdrop-blur-sm relative"
      />
    </div>
  );
}
