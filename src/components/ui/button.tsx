import * as React from "react"
import { cn } from "@/lib/utils"

const getButtonClasses = (variant: string = "default", size: string = "default") => {
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl",
    destructive: "bg-error text-white hover:bg-error/90 shadow-lg hover:shadow-xl",
    outline: "border-2 border-primary/20 bg-background/50 text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl backdrop-blur-sm",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-lg hover:shadow-xl",
    ghost: "hover:bg-accent/10 hover:text-accent",
    link: "text-primary underline-offset-4 hover:underline",
    premium: "bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground hover:opacity-90 shadow-lg hover:shadow-xl animate-gradient",
  };

  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  };

  return cn(baseClasses, variantClasses[variant as keyof typeof variantClasses], sizeClasses[size as keyof typeof sizeClasses]);
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "premium";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(getButtonClasses(variant, size), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
