"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const useRefresh = () => {
  const query = useSearchParams();
  const isRefresh = query.get("isRefresh") === "true";
  const router = useRouter();

  useEffect(() => {
    if (isRefresh) {
      router.refresh();
    }
  }, []);
};
