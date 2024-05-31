"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

const paths = ["/messages", "/explore", "/"];

export default function ModalGanteng({ children, title }: Props) {
  const router = useRouter();
  const [state, setState] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (paths.find((p) => p === pathname)) {
      setState(false);
    } else {
      setState(true);
    }
  }, [pathname]);

  useEffect(() => {
    if (!state) {
      router.back();
    }
  }, [state]);

  return (
    <Dialog modal={true} open={state} onOpenChange={setState}>
      <DialogContent className="w-full max-w-md overflow-y-scroll overflow-x-hidden max-h-screen top-[10%] -translate-y-[10%]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
