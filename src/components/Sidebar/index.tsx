import Link from "next/link";
import { SwitchTheme } from "../SwitchTheme";
import ProfileLink from "./ProfileLink";
import getServerSession from "@/getServerSession";
import Links from "./Links";

async function Sidebar() {
  const session = await getServerSession();
  if (!session) {
    return null;
  }
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
        <Links />
        <ProfileLink
          avatarUrl={session?.user.image}
          username={session?.user.username}
        />
      </div>
      <SwitchTheme />
    </aside>
  );
}

export default Sidebar;
