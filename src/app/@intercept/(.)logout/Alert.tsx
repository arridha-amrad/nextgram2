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
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { logoutAction } from "./action";

export default function Alert() {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  // to handle esc press
  useEffect(() => {
    if (!open) {
      router.back();
    }
  }, [open]);

  const logout = async () => {
    await signOut({ callbackUrl: "/login" });
    // await logoutAction();
    // setOpen(false);
    // router.refresh();
    // window.location.href = "/login";
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
