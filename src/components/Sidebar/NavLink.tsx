"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  link: {
    href: string;
    title: string;
    icon: JSX.Element;
    isInterCeptedRoute: boolean;
  };
  prevRoute: string;
};

function NavLink({
  link: { href, icon, title, isInterCeptedRoute },
  prevRoute,
}: Props) {
  const pathname = usePathname();
  const isPath = pathname === href;
  return (
    <Link
      className={cn(
        "flex items-center justify-center xl:justify-start rounded-lg h-[50px] gap-4 xl:px-4",
        isPath ? "bg-foreground/10" : "hover:bg-foreground/10"
      )}
      href={isInterCeptedRoute ? `${href}?cb=${prevRoute}` : href}
    >
      {icon}
      <span className={cn("xl:block hidden", isPath ? "font-semibold" : "")}>
        {title}
      </span>
    </Link>
  );
}

export default NavLink;
