"use server";

import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(3, { message: "Invalid password" }),
});

export const loginAction = async (prevState: any, formData: FormData) => {
  await new Promise((res) => setTimeout(res, 3000));
  const validatedFields = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
};
