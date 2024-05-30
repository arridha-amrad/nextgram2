"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type Props = {
  username: string;
  avatarUrl?: string | null;
};

function ProfileLink({ avatarUrl, username }: Props) {
  const pathaname = usePathname();
  const target = `/${username}`;
  const isPath = target === pathaname;

  return (
    <Link
      className={cn(
        "flex items-center justify-center xl:justify-start rounded-lg h-[50px] gap-4 xl:px-4",
        isPath ? "bg-foreground/10" : "hover:bg-foreground/10"
      )}
      href={target}
    >
      <Avatar className="w-8 h-8">
        <AvatarImage src={avatarUrl ?? ""} alt="avatar" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span className={cn("xl:block hidden", isPath ? "font-semibold" : "")}>
        Profile
      </span>
    </Link>
  );
}

export default ProfileLink;
