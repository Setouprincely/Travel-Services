"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2 } from "@/components/ui/icons";

const getButtonClasses = (variant: string = "default", size: string = "default") => {
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group";

  const variantClasses = {
    default: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl",
    destructive: "bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl",
    outline: "border-2 border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 hover:border-gray-400",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 shadow-md hover:shadow-lg",
    ghost: "hover:bg-gray-100 hover:text-gray-900",
    link: "text-blue-600 underline-offset-4 hover:underline",
    gradient: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl",
    glow: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/50 hover:shadow-2xl",
  };

  const sizeClasses = {
    default: "h-12 px-6 py-3",
    sm: "h-10 rounded-xl px-4 py-2",
    lg: "h-14 rounded-2xl px-8 py-4 text-lg",
    icon: "h-12 w-12",
  };

  return cn(baseClasses, variantClasses[variant as keyof typeof variantClasses], sizeClasses[size as keyof typeof sizeClasses]);
};

export interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "gradient" | "glow";
  size?: "default" | "sm" | "lg" | "icon";
  loading?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
  iconPosition?: "left" | "right";
  ripple?: boolean;
  glow?: boolean;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ 
    className, 
    variant = "default", 
    size = "default", 
    loading = false,
    icon: Icon,
    iconPosition = "left",
    ripple = true,
    glow = false,
    children,
    onClick,
    ...props 
  }, ref) => {
    const [ripples, setRipples] = React.useState<Array<{ id: number; x: number; y: number }>>([]);
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (ripple && buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const newRipple = { id: Date.now(), x, y };
        
        setRipples(prev => [...prev, newRipple]);
        
        setTimeout(() => {
          setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
        }, 600);
      }
      
      if (onClick) {
        onClick(e);
      }
    };

    React.useImperativeHandle(ref, () => buttonRef.current!);

    return (
      <motion.button
        ref={buttonRef}
        className={cn(getButtonClasses(variant, size), glow && "hover-glow", className)}
        onClick={handleClick}
        disabled={loading}
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        {...props}
      >
        {/* Ripple effect */}
        {ripple && (
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <AnimatePresence>
              {ripples.map((ripple) => (
                <motion.div
                  key={ripple.id}
                  className="absolute bg-white/30 rounded-full pointer-events-none"
                  style={{
                    left: ripple.x - 10,
                    top: ripple.y - 10,
                    width: 20,
                    height: 20,
                  }}
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 4, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Gradient overlay for hover effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
          animate={{ x: ["-100%", "100%"] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            repeatDelay: 3,
            ease: "easeInOut"
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex items-center space-x-2">
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Loading...</span>
            </>
          ) : (
            <>
              {Icon && iconPosition === "left" && (
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Icon className="h-4 w-4" />
                </motion.div>
              )}
              
              <span>{children}</span>
              
              {Icon && iconPosition === "right" && (
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Icon className="h-4 w-4" />
                </motion.div>
              )}
            </>
          )}
        </div>
      </motion.button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton };

// Convenience components for common button types
export const PrimaryButton = React.forwardRef<HTMLButtonElement, Omit<AnimatedButtonProps, 'variant'>>(
  (props, ref) => <AnimatedButton ref={ref} variant="glow" {...props} />
);

export const SecondaryButton = React.forwardRef<HTMLButtonElement, Omit<AnimatedButtonProps, 'variant'>>(
  (props, ref) => <AnimatedButton ref={ref} variant="outline" {...props} />
);

export const GradientButton = React.forwardRef<HTMLButtonElement, Omit<AnimatedButtonProps, 'variant'>>(
  (props, ref) => <AnimatedButton ref={ref} variant="gradient" {...props} />
);

PrimaryButton.displayName = "PrimaryButton";
SecondaryButton.displayName = "SecondaryButton";
GradientButton.displayName = "GradientButton";
