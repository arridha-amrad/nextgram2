"use server";

import { signIn } from "@/auth";
import db from "@/drizzle/db";
import { UsersTable } from "@/drizzle/schema";
import { verify } from "argon2";
import { eq } from "drizzle-orm";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(3, { message: "Invalid password" }),
});

export const loginAction = async (prevState: any, formData: FormData) => {
  const validatedFields = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  const [dbUser] = await db
    .select()
    .from(UsersTable)
    .where(eq(UsersTable.email, email));

  if (!dbUser) {
    return {
      type: "error",
      message: "User not found",
    };
  }

  if (!dbUser.password) {
    return {
      type: "error",
      message: "Invalid credentials",
    };
  }

  const isMatch = await verify(dbUser.password, password);

  if (!isMatch) {
    return {
      type: "error",
      message: "Wrong password",
    };
  }

  await signIn("credentials", {
    id: dbUser.id,
    username: dbUser.username,
    email: dbUser.email,
    image: dbUser.avatar,
    name: dbUser.name,
    redirect: true,
    redirectTo: "/",
  });
};
