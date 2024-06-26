"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function SearchDialog({ children }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname !== "/search") return null;

  return (
    <Dialog
      defaultOpen
      onOpenChange={(e) => {
        if (!e) {
          router.back();
        }
      }}
    >
      <DialogContent className="w-full max-w-md max-h-screen top-[10%] -translate-y-[10%]">
        <DialogHeader>
          <DialogTitle>Search Users</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default SearchDialog;
