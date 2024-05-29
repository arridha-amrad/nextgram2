import Sidebar from "@/components/Sidebar";
import Modal from "../explore/modal";

function Page() {
  return (
    <main className="min-h-screen container mx-auto">
      <div className="grid grid-cols-12 gap-3 min-h-screen">
        <section className="items-start border-r  p-1 flex-col justify-start md:flex lg:col-span-2 md:col-span-1 hidden">
          <Sidebar />
        </section>
        <section className="lg:col-span-6 md:col-span-7 col-span-12">
          Message Content
          <Modal />
        </section>
        <section className="bg-green-500 md:col-span-4 md:block hidden">
          Explore Another Content
        </section>
      </div>
    </main>
  );
}

export default Page;
