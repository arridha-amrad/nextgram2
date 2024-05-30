"use client";

import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import {
  Home,
  Search,
  Compass,
  Bell,
  Mail,
  SquarePen,
  LogOut,
} from "lucide-react";

const className = {
  icon: "w-6 h-6",
};

const links = [
  {
    href: "/",
    title: "Home",
    icon: <Home className={className.icon} />,
    isInterCeptedRoute: false,
  },
  {
    href: "/search",
    title: "Search",
    icon: <Search className={className.icon} />,
    isInterCeptedRoute: true,
  },
  {
    href: "/explore",
    title: "Explore",
    icon: <Compass className={className.icon} />,
    isInterCeptedRoute: false,
  },
  {
    href: "/notifications",
    title: "Notifications",
    icon: <Bell className={className.icon} />,
    isInterCeptedRoute: true,
  },
  {
    href: "/messages",
    title: "Messages",
    icon: <Mail className={className.icon} />,
    isInterCeptedRoute: false,
  },
  {
    href: "/create-post",
    title: "New Post",
    icon: <SquarePen className={className.icon} />,
    isInterCeptedRoute: true,
  },
  {
    href: "/logout",
    title: "Logout",
    icon: <LogOut className={className.icon} />,
    isInterCeptedRoute: true,
  },
];

function Links() {
  const pathname = usePathname();
  console.log(pathname);

  return links.map((link) => (
    <NavLink prevRoute={pathname} link={link} key={link.href} />
  ));
}

export default Links;
