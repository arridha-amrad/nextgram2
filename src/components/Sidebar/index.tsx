import Link from "next/link";
import { Home, Search, Compass, Bell, Mail, SquarePen } from "lucide-react";
import NavLink from "./NavLink";
import { SwitchTheme } from "../SwitchTheme";
import ProfileLink from "./ProfileLink";

const className = {
  icon: "w-6 h-6",
};

const links = [
  {
    href: "/",
    title: "Home",
    icon: <Home className={className.icon} />,
  },
  {
    href: "/search",
    title: "Search",
    icon: <Search className={className.icon} />,
  },
  {
    href: "/explore",
    title: "Explore",
    icon: <Compass className={className.icon} />,
  },
  {
    href: "/notifications",
    title: "Notifications",
    icon: <Bell className={className.icon} />,
  },
  {
    href: "/messages",
    title: "Messages",
    icon: <Mail className={className.icon} />,
  },
  {
    href: "/create-post",
    title: "New Post",
    icon: <SquarePen className={className.icon} />,
  },
];

function Sidebar() {
  return (
    <aside className="w-full h-full pb-4 flex flex-shrink-0 flex-col xl:pr-4">
      <Link
        href="/"
        className="w-full cursor-pointer lg:h-[70px] h-[50px] flex items-center justify-center"
      >
        <h1 className="text-xl font-bold xl:block hidden">
          <span className="bg-lime-600 py-1 px-3 text-background rounded">
            Next
          </span>
          <span className="px-1">Gram</span>
        </h1>
        <h1 className="bg-lime-600 text-xl font-bold text-foreground block xl:hidden py-1 px-3  rounded">
          N
        </h1>
      </Link>
      <div className="space-y-1 py-4 w-full flex-1">
        {links.map((link) => (
          <NavLink link={link} key={link.href} />
        ))}
        <ProfileLink />
      </div>
      <SwitchTheme />
    </aside>
  );
}

export default Sidebar;
