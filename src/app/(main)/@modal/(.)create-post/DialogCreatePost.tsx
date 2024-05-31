"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function DialogCreatePost({ children }: Props) {
  const router = useRouter();
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
        className="max-h-screen max-w-[800px]"
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>Create new post</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default DialogCreatePost;
