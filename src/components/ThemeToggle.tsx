// components/ThemeToggle.tsx
"use client";
import { Button } from "./ui/button";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full fixed z-150 left-5 bottom-5 shadow-[0_0_10px_3px_rgba(107,114,128,0.6)]"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <FaSun className=" h-10 w-10 absolute scale-100 rotate-0 dark:-rotate-90 dark:scale-0" />
      <FaMoon className="absolute h-10 w-10 rotate-90 scale-0 dark:rotate-0 dark:scale-100"></FaMoon>
    </Button>
  );
}
