import Link from "next/link";
import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  className?: string;
}

const LinkButton = ({ 
  children, 
  variant = "primary", 
  href, 
  className = "", 
  ...props 
}: ButtonProps) => {
  
  // Base styles for all buttons
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2";
  
  // Variant styles
  const variantStyles = {
    primary: "bg-primary text-background border border-primary hover:bg-transparent hover:text-primary shadow hover:shadow-md",
    outline: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-background"
  };
  
  // Combined classes
  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  // If href is provided, return a Link component
  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }
  
  // Otherwise, return a button element
  return (
    <button 
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default LinkButton;