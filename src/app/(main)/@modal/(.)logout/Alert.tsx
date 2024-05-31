"use client";

import { signOut } from "next-auth/react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Alert() {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const qp = useSearchParams();
  const cbUrl = qp.get("cb");

  // to handle esc press
  useEffect(() => {
    if (!open) {
      router.push(cbUrl ?? "/");
    }
  }, [open]);

  useEffect(() => {
    if (cbUrl) {
      setOpen(true);
    }
  }, [cbUrl]);

  const logout = async () => {
    await signOut({ callbackUrl: "/login" });
  };
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you absolutely sure to logout?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action will clear your session and you need to re-login again
            to use this app.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={logout}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
