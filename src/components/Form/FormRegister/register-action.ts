"use server";

import db from "@/drizzle/db";
import { UsersTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { hash } from "argon2";

const schema = z.object({
  name: z.string().min(5, { message: "Invalid name" }),
  email: z.string().email({ message: "Invalid email" }),
  username: z.string().min(5, { message: "Invalid username" }),
  password: z.string().min(3, { message: "Invalid password" }),
});

export const registerAction = async (prevState: any, formData: FormData) => {
  await new Promise((res) => setTimeout(res, 3000));
  const validatedFields = schema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    username: formData.get("username"),
    name: formData.get("name"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, name, password, username } = Object.fromEntries(
    formData.entries()
  ) as z.infer<typeof schema>;

  try {
    const [registeredUser] = await db
      .select()
      .from(UsersTable)
      .where(eq(UsersTable.email, email));

    if (registeredUser) {
      return {
        type: "error",
        message: "Email has been registered",
      };
    }

    const hashedPassword = await hash(password);

    await db.insert(UsersTable).values({
      username,
      email,
      name,
      provider: "credentials",
      password: hashedPassword,
    });
    return {
      type: "success",
      message: "Registration successful",
    };
  } catch (err) {
    console.log(err);
    return {
      type: "error",
      message: "Something went wrong",
    };
  }
};
