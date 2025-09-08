import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = ({ 
  children, 
  variant = "primary", 
  href, 
  onClick, 
  className = "", 
  type = "button" 
}: ButtonProps) => {
  
  // Base styles for all buttons
  const baseStyles = "inline-block px-8 py-3 font-medium transition-all duration-300 text-center";
  
  // Variant styles
  const variantStyles = {
    primary: "text-base font-base bg-primary text-background border-2 border-primary hover:bg-transparent hover:text-primary",
    secondary: "text-base font-base bg-background text-primary border-2 border-primary hover:bg-background/80",
    outline: "text-base font-base bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-background"
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
      type={type} 
      onClick={onClick} 
      className={combinedClasses}
    >
      {children}
    </button>
  );
};

export default Button;