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
import { ReactNode, useEffect, useRef, useState } from "react";
import LoginSubmitButton from "./LoginSubmitBtn";
import { useFormState } from "react-dom";
import { loginAction } from "./login-action";
import { useToast } from "@/components/ui/use-toast";

const initState = {
  type: "",
  message: "",
  errors: {} as any,
};

type Props = {
  children: ReactNode;
};

export default function LoginForm({ children }: Props) {
  const [isShow, setIsShow] = useState(false);
  const [formState, formAction] = useFormState(loginAction, initState);
  const { toast } = useToast();

  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (formState?.message) {
      toast({
        variant: formState.type === "error" ? "destructive" : "default",
        title:
          formState.type === "error"
            ? "Uh oh! Something went wrong."
            : "Congratuation",
        description: formState.message,
      });
    }
  }, [formState?.message, formState?.type]);

  return (
    <Card className="w-full">
      <form ref={formRef} action={formAction}>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login to your nextgram account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">Email Address</Label>
            <Input name="email" type="text" id="email" />
            <small className="text-sm dark:text-red-700 text-red-500 font-medium leading-none">
              {formState?.errors?.email ? formState.errors.email[0] : ""}
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
              {formState?.errors?.password ? formState.errors.password[0] : ""}
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
          <LoginSubmitButton />
        </CardFooter>
      </form>
      <div className="flex pb-3 mt-6 justify-center items-center gap-4">
        {children}
      </div>
    </Card>
  );
}
