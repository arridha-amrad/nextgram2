import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

function Layout({ children, modal }: Props) {
  return (
    <main className="min-h-screen container mx-auto">
      <div className="flex gap-4 w-full min-h-screen">
        <section className="items-start flex-col justify-start md:flex w-full xl:max-w-[250px] sm:max-w-[55px] hidden">
          <Sidebar />
        </section>
        <div className="w-full flex-1">
          {children}
          {modal}
        </div>
      </div>
    </main>
  );
}

export default Layout;
