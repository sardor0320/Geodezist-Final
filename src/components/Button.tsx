import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "black" | "danger" | "warning" | "success";
  size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  className = "",
  ...props
}) => {
  const baseStyle =
    "font-bold rounded focus:outline-none focus:ring-2 focus:ring-opacity-50";

  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-400",
    secondary: " text-gray-500 focus:ring-gray-400",
    black:
      "bg-black-500 hover:bg-dimgrey-600 text-white focus:ring-dimgrey-400",
    danger: "bg-red-500 hover:bg-red-600 text-white focus:ring-red-400",
    warning:
      "bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-400",
  };

  const sizeStyles = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-lg",
  };

  const buttonStyle = `${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button className={buttonStyle} {...props}>
      {children}
    </button>
  );
};

export default Button;
