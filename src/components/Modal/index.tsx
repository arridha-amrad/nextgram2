"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useRouter, useSearchParams } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function ModalGanteng({ children, title }: Props) {
  const router = useRouter();
  const [state, setState] = useState(true);
  const qp = useSearchParams();
  const cbUrl = qp.get("cb");

  useEffect(() => {
    if (!state) {
      router.push(cbUrl ?? "/");
    }
  }, [state]);

  useEffect(() => {
    if (cbUrl) {
      setState(true);
    }
  }, [cbUrl]);

  return (
    <Dialog modal={true} open={state} onOpenChange={setState}>
      <DialogContent className="w-full overflow-y-scroll max-h-screen">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
