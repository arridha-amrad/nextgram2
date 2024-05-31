"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createPortal } from "react-dom";

function NewDialog() {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname !== "/search") return null;

  return createPortal(
    <div className="fixed inset-0 flex justify-center items-center">
      <div
        onClick={() => router.back()}
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
      />
      <div className="relative px-8 border rounded-lg max-w-md w-full min-h-[500px] max-h-screen">
        <div className="h-[50px] flex items-center">
          <h1 className="font-semibold">Search</h1>
        </div>
        <form className="flex items-center gap-2" action={() => {}}>
          <Input placeholder="search..." className="flex-1" />
          <Button className="flex-shrink-0" variant="outline" size="icon">
            <Search className="w-4 h-4" />
          </Button>
        </form>
        <div>
          <Link href="/alex">Alex</Link>
        </div>
      </div>
    </div>,
    document.body!
  );
}

export default NewDialog;
