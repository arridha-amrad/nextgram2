"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "../../ui/checkbox";
import { useState } from "react";
import { useFormState } from "react-dom";
import { registerAction } from "./register-action";
import RegisterSubmitButton from "./RegisterSubmitBtn";

const initState = {
  errors: {} as any,
};

export default function RegisterForm() {
  const [isShow, setIsShow] = useState(false);
  const [formState, formAction] = useFormState(registerAction, initState);

  return (
    <Card className="w-full">
      <form action={formAction}>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Create a nextgram account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input name="name" type="text" id="name" />
            <small className="text-sm dark:text-red-700 text-red-500 font-medium leading-none">
              {formState?.errors.name ? formState.errors.name[0] : ""}
            </small>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="username">Username</Label>
            <Input name="username" type="text" id="username" />
            <small className="text-sm dark:text-red-700 text-red-500 font-medium leading-none">
              {formState?.errors.username ? formState.errors.username[0] : ""}
            </small>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">Email Address</Label>
            <Input name="email" type="text" id="email" />
            <small className="text-sm dark:text-red-700 text-red-500 font-medium leading-none">
              {formState?.errors.email ? formState.errors.email[0] : ""}
            </small>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              type={`${isShow ? "text" : "password"}`}
              name="password"
              id="password"
            />
            <small className="text-sm dark:text-red-700 text-red-500 font-medium leading-none">
              {formState?.errors.password ? formState.errors.password[0] : ""}
            </small>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={isShow}
              onCheckedChange={() => setIsShow((val) => !val)}
              id="show-password"
            />
            <label
              htmlFor="show-password"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Show Password
            </label>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <RegisterSubmitButton />
        </CardFooter>
      </form>
    </Card>
  );
}
