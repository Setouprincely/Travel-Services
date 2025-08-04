"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface EnhancedButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "gradient";
  size?: "sm" | "md" | "lg" | "xl";
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export function EnhancedButton({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  className = "",
  disabled = false,
  icon,
  iconPosition = "right"
}: EnhancedButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-2 border-blue-500 hover:border-blue-400 shadow-blue-500/25 hover:shadow-blue-500/40",
    secondary: "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-2 border-purple-500 hover:border-purple-400 shadow-purple-500/25 hover:shadow-purple-500/40",
    outline: "border-3 border-blue-600 bg-transparent text-blue-600 hover:bg-blue-600 hover:text-white shadow-blue-500/25 hover:shadow-blue-500/40",
    gradient: "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white border-2 border-white/20 shadow-purple-500/25 hover:shadow-purple-500/40"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-12 py-6 text-xl"
  };
  
  const disabledClasses = disabled 
    ? "opacity-50 cursor-not-allowed hover:scale-100 active:scale-100" 
    : "";
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
  
  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="ml-2">{icon}</span>
      )}
    </>
  );
  
  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        whileHover={{ scale: disabled ? 1 : 1.05 }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
        onClick={disabled ? undefined : onClick}
      >
        {content}
      </motion.a>
    );
  }
  
  return (
    <motion.button
      className={buttonClasses}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {content}
    </motion.button>
  );
}

// Preset button variants for common use cases
export function PrimaryButton(props: Omit<EnhancedButtonProps, "variant">) {
  return <EnhancedButton {...props} variant="primary" />;
}

export function SecondaryButton(props: Omit<EnhancedButtonProps, "variant">) {
  return <EnhancedButton {...props} variant="secondary" />;
}

export function OutlineButton(props: Omit<EnhancedButtonProps, "variant">) {
  return <EnhancedButton {...props} variant="outline" />;
}

export function GradientButton(props: Omit<EnhancedButtonProps, "variant">) {
  return <EnhancedButton {...props} variant="gradient" />;
}
