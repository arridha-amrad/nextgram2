"use client";

import MySpinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

function SearchInput() {
  const [query, setQuery] = useState("");
  const [value, { isPending }] = useDebounce(query, 500);
  const router = useRouter();
  const pathname = usePathname();
  const qp = useSearchParams();

  const currentQp = new URLSearchParams(Array.from(qp.entries()));

  useEffect(() => {
    currentQp.set("quser", value);
    const search = currentQp.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
  }, [value]);

  return (
    <div className="flex items-center gap-2">
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border-none"
        type="email"
        placeholder="Type their username..."
      />
      <Button variant="outline" size="icon">
        {isPending() ? <MySpinner /> : <Search className="w-4 h-4" />}
      </Button>
    </div>
  );
}

export default SearchInput;
