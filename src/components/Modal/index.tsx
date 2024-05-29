"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function Modal({ children, title }: Props) {
  const router = useRouter();
  const [state, setState] = useState(true);
  useEffect(() => {
    if (!state) {
      router.back();
    }
  }, [state]);
  return (
    <Dialog modal={true} open={state} onOpenChange={setState}>
      <DialogContent className="sm:max-w-[425px] overflow-y-scroll max-h-screen">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
        <DialogFooter>
          <Button
            onClick={() => router.back()}
            type="button"
            variant="secondary"
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
