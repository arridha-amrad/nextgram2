"use server";

import db from "@/drizzle/db";
import { UsersTable } from "@/drizzle/schema";
import { ilike, or } from "drizzle-orm";

export const searchAction = async (prevState: any, data: FormData) => {
  const name = data.get("name");

  const users = await db
    .select({
      id: UsersTable.id,
      name: UsersTable.name,
      username: UsersTable.username,
      image: UsersTable.avatar,
    })
    .from(UsersTable)
    .where(
      or(
        ilike(UsersTable.name, `%${name}%`),
        ilike(UsersTable.username, `%${name}%`)
      )
    );

  return {
    result: users,
  };
};
