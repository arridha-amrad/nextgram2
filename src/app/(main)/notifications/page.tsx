import Sidebar from "@/components/Sidebar";

function Page() {
  return (
    <div className="flex gap-4">
      <section className="bg-purple-800 flex-[2]">
        Notifications Content
      </section>
      <section className="bg-green-800 flex-1 lg:block hidden">
        Notifications Another Content
      </section>
    </div>
  );
}

export default Page;
