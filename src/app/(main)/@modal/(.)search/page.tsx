import SearchInput from "./SearchInput";
import db from "@/drizzle/db";
import { UsersTable } from "@/drizzle/schema";
import { ilike, or } from "drizzle-orm";
import SearchDialog from "./Dialog";
import NewDialog from "./NewDialog";

const search = async (name: string) => {
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
  return users;
};

type Props = {
  searchParams: {
    quser: string;
  };
};

export default async function Page({ searchParams: { quser } }: Props) {
  const users = quser !== "" ? await search(quser) : [];

  return (
    <SearchDialog>
      <SearchInput />
    </SearchDialog>
  );
}
