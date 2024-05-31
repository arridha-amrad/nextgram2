"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  children: ReactNode;
};

function SearchDialog({ children }: Props) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement | null>(null);

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
      <DialogContent
        ref={ref}
        className="w-full max-w-md overflow-y-scroll overflow-x-hidden max-h-screen top-[10%] -translate-y-[10%]"
      >
        <DialogHeader>
          <DialogTitle>Search Users</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default SearchDialog;
