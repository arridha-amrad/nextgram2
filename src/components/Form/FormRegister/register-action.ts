"use server";

import { z } from "zod";

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
};
