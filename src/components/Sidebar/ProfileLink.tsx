"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User } from "lucide-react";

function ProfileLink() {
  const pathaname = usePathname();
  const target = "/ari";
  const isPath = target === pathaname;
  return (
    <Link
      className={cn(
        "flex items-center justify-center xl:justify-start rounded-lg h-[50px] gap-4 xl:px-4",
        isPath ? "bg-foreground/10" : "hover:bg-foreground/10"
      )}
      href={target}
    >
      <User className="w-6 h-6" />
      <span className={cn("xl:block hidden", isPath ? "font-semibold" : "")}>
        Profile
      </span>
    </Link>
  );
}

export default ProfileLink;
