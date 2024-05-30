import Sidebar from "@/components/Sidebar";
import getServerSession from "@/getServerSession";
import Link from "next/link";
import { redirect } from "next/navigation";

async function Page() {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  return (
    <main className="min-h-screen container mx-auto">
      <div className="flex gap-4 w-full min-h-screen">
        <section className="items-start flex-col justify-start md:flex w-full xl:max-w-[250px] sm:max-w-[55px] hidden">
          <Sidebar />
        </section>
        <section className="bg-purple-800 flex-[2]">
          Home Content
          <Link href="/search">Search</Link>
        </section>
        <section className="bg-green-800 flex-1 lg:block hidden">
          Home Another Content
        </section>
      </div>
    </main>
  );
}

export default Page;
