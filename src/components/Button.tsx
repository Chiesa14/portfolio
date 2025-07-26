import { FaAngleRight } from "react-icons/fa";
import React from "react";

interface ButtonProps {
  text: string;
  size?: number;
  color?: "blue" | "orange" | "sky" | "green";
  onClick?: () => void;
  className?: string; // Allow custom Tailwind classes
}

const glowMap = {
  blue: "shadow-[0_0_10px_1px_rgba(0,10,255,0.6)]",
  orange: "shadow-[0_0_10px_1px_rgba(255,162,23,0.6)]",
  sky: "shadow-[0_0_10px_1px_rgba(42,176,144,0.6)]",
  green: "shadow-[0_0_10px_1px_rgba(63,142,0,0.6)]",
};

const colorMap = {
  blue: "bg-[#000AFF] hover:bg-[#0008d0] text-white",
  orange: "bg-[#FFA217] hover:bg-[#e88d00] text-white",
  sky: "bg-[#2AB090] hover:bg-[#219e7f] text-white",
  green: "bg-[#3F8E00] hover:bg-[#366F00] text-white",
};

export default function Button({
  text,
  color = "blue",
  onClick,
  className = "",
  size,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 justify-center  rounded-lg font-semibold transition-all duration-300 cursor-pointer ${colorMap[color]} ${glowMap[color]} ${className}`}
    >
      {text}
      <FaAngleRight className="text-sm" size={size || 20} />
    </button>
  );
}
