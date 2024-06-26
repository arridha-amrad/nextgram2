import LoginForm from "@/components/Form/FormLogin";
import GithubLoginButton from "@/components/Form/FormLogin/GithubLoginBtn";
import GoogleLoginButton from "@/components/Form/FormLogin/GoogleLoginBtn";
import getServerSession from "@/getServerSession";
import Link from "next/link";
import { redirect } from "next/navigation";

async function Page() {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return (
    <main className="overflow-y-auto py-4 flex items-center justify-center flex-col min-h-screen max-w-md mx-auto">
      <div className="my-8 self-end">
        <h1 className="text-4xl font-bold">
          <span className="bg-lime-600 py-1 px-3 text-background rounded-xl">
            Next
          </span>
          <span className="px-1">Gram</span>
        </h1>
      </div>
      <LoginForm>
        <GoogleLoginButton />
        <GithubLoginButton />
      </LoginForm>
      <div className="mt-4 space-x-2">
        <p className="inline">Don&apos;have an account ?</p>
        <Link
          href="/register"
          className="text-lime-600 hover:underline hover:underline-offset-4"
        >
          register
        </Link>
      </div>
    </main>
  );
}

export default Page;
