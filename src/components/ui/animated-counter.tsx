"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  decimals?: number;
}

export function AnimatedCounter({ 
  end, 
  duration = 2, 
  suffix = "", 
  prefix = "", 
  className = "",
  decimals = 0 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = easeOutQuart * end;
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);

  const formatNumber = (num: number) => {
    if (decimals > 0) {
      return num.toFixed(decimals);
    }
    return Math.floor(num).toLocaleString();
  };

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {prefix}{formatNumber(count)}{suffix}
    </motion.span>
  );
}

interface StatsCardProps {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
  color?: string;
  delay?: number;
}

export function StatsCard({ 
  icon: Icon, 
  value, 
  suffix = "", 
  prefix = "", 
  label, 
  description,
  color = "text-blue-600",
  delay = 0
}: StatsCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="glass p-8 rounded-3xl border border-white/20 text-center group cursor-pointer"
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
        transition={{ duration: 0.8, delay: delay + 0.2, type: "spring", stiffness: 200 }}
        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${color.replace('text-', 'bg-').replace('600', '100')} mb-6 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className={`h-8 w-8 ${color}`} />
      </motion.div>
      
      <div className="mb-4">
        <AnimatedCounter
          end={value}
          suffix={suffix}
          prefix={prefix}
          className={`text-4xl md:text-5xl font-bold ${color} font-dm-sans block`}
          duration={2.5}
        />
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
        {label}
      </h3>
      
      {description && (
        <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
          {description}
        </p>
      )}
    </motion.div>
  );
}

interface StatsGridProps {
  stats: Array<{
    icon: React.ComponentType<{ className?: string }>;
    value: number;
    suffix?: string;
    prefix?: string;
    label: string;
    description?: string;
    color?: string;
  }>;
  title?: string;
  subtitle?: string;
  className?: string;
}

export function StatsGrid({ stats, title, subtitle, className = "" }: StatsGridProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-dm-sans">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              {...stat}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
