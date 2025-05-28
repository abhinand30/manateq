import SidebarComponent from "@/components/SidebarComponent";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { ReactNode } from "react";

interface props{
  children:ReactNode;
}
const Layout = ({ children }:props) => {
  return (
    <SidebarProvider>
      <div className="flex w-full">
        <SidebarComponent />
        <main className="w-full overflow-hidden bg-[#F8F8F8]">
          {/* <SidebarTrigger /> */}
          {children} 
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
