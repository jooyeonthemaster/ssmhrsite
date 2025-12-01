import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-brand-blue text-white hover:bg-blue-900 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
      secondary: "bg-brand-gold text-white hover:bg-amber-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
      outline: "border-2 border-slate-200 bg-transparent hover:bg-slate-50 text-slate-900",
      ghost: "hover:bg-slate-100 text-slate-700",
    };
    
    const sizes = {
      sm: "h-9 px-4 text-xs rounded-full",
      md: "h-12 px-6 py-2 rounded-full",
      lg: "h-14 px-8 text-lg rounded-full",
    };

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center font-bold transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-95",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
