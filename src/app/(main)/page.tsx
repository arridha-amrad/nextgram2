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
    <div className="flex gap-4">
      <section className="bg-purple-800 flex-[2]">
        Home Content
        <Link href="/search">Search</Link>
      </section>
      <section className="bg-green-800 flex-1 lg:block hidden">
        Home Another Content
      </section>
    </div>
  );
}

export default Page;
