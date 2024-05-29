import RegisterForm from "@/components/Form/FormRegister";
import Link from "next/link";

function Page() {
  return (
    <main className="w-full overflow-y-auto py-4 flex flex-col min-h-screen max-w-md mx-auto">
      <div className="my-8 self-start">
        <h1 className="text-4xl font-bold">
          <span className="bg-lime-600 py-1 px-3 text-background rounded-xl">
            Next
          </span>
          <span className="px-1">Gram</span>
        </h1>
      </div>
      <RegisterForm />
      <div className="mt-4 space-x-2 mx-auto">
        <p className="inline">have an account ?</p>
        <Link
          href="/login"
          className="text-lime-600 hover:underline hover:underline-offset-4"
        >
          login
        </Link>
      </div>
    </main>
  );
}

export default Page;
