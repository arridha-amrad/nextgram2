"use client";

import { Input } from "@/components/ui/input";
import SearchSubmitButton from "./SearchSubmitButton";
import { useFormState } from "react-dom";
import { searchAction } from "./search-action";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const initialState = {
  result: [] as any,
};

function SearchFormAndResult() {
  const [formState, formAction] = useFormState(searchAction, initialState);

  return (
    <div className="space-y-4 max-w-md">
      <form className="flex items-center gap-2" action={formAction}>
        <Input
          className="w-full"
          name="name"
          type="text"
          placeholder="Type their username..."
        />
        <SearchSubmitButton />
      </form>
      <div className="">
        {formState.result.map((user: any) => (
          <Link
            href={`/${user.username}`}
            className="flex overflow-x-hidden items-start gap-4 py-2 rounded-lg max-w-sm"
            key={user.id}
          >
            <Avatar>
              <AvatarImage src={user.image ?? ""} alt="@shadcn" />
              <AvatarFallback>
                {user.name
                  .split(" ")
                  .map((v: any) => v[0].toUpperCase())
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="w-full text-sm overflow-hidden">
              <p className="truncate">{user.username}</p>
              <p className="text-muted-foreground">{user.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SearchFormAndResult;
