"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function SwitchTheme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex xl:flex-row flex-col gap-2 w-full xl:justify-start xl:px-4 justify-center items-center">
      <Switch
        onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        checked={theme === "dark"}
        id="dark-mode"
      />
      <Label className="text-center" htmlFor="dark-mode">
        Dark Mode
      </Label>
    </div>
  );
}
