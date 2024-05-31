function Page() {
  return (
    <div className="flex gap-4">
      <section className="bg-purple-800 flex-[2]">Search Content</section>
      <section className="bg-green-800 flex-1 lg:block hidden">
        Search Another Content
      </section>
    </div>
  );
}

export default Page;
