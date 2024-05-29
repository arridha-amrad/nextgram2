import Sidebar from "@/components/Sidebar";

function Page() {
  return (
    <main className="min-h-screen container mx-auto">
      <div className="flex gap-4 w-full min-h-screen">
        <section className="items-start flex-col justify-start md:flex w-full xl:max-w-[250px] sm:max-w-[55px] hidden">
          <Sidebar />
        </section>
        <section className="bg-purple-800 flex-[2]">Home Content</section>
        <section className="bg-green-800 flex-1 lg:block hidden">
          Home Another Content
        </section>
      </div>
    </main>
  );
}

export default Page;

{
  /* <div className="grid grid-cols-12 gap-3 min-h-screen">
<section className="items-start border-r  p-1 flex-col justify-start md:flex lg:col-span-2 md:col-span-1 hidden">
  <Sidebar />
</section>
<section className="bg-purple-800 lg:col-span-6 md:col-span-7 col-span-12">
  Home Content
</section>
<section className="bg-green-800 md:col-span-4 md:block hidden">
  Home Another Content
</section>
</div> */
}
