import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

type Props = {
  params: {
    username: string;
  };
  children: ReactNode;
};

function Layout({ params: { username }, children }: Props) {
  return (
    <main className="min-h-screen container mx-auto">
      <div className="grid grid-cols-12 gap-3 min-h-screen">
        <section className="items-start border-r  p-1 flex-col justify-start md:flex lg:col-span-2 md:col-span-1 hidden">
          <Sidebar />
        </section>
        <section className="lg:col-span-10 md:col-span-11 col-span-12">
          Profile Content of {username}
          {children}
        </section>
      </div>
    </main>
  );
}

export default Layout;
