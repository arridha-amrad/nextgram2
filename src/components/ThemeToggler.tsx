"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

function ThemeToggler() {
  const { setTheme, theme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <Button onClick={changeTheme} size="icon" variant="outline">
      <Moon className="block dark:hidden w-5 h-5" />
      <Sun className="hidden dark:block w-5 h-5" />
    </Button>
  );
}

export default ThemeToggler;
