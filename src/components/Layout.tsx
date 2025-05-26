import SidebarComponent from "@/components/SidebarComponent";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const Layout = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="flex w-full">
        <SidebarComponent />
        <main className="w-full bg-[#F8F8F8]">
          <SidebarTrigger />
          {children} 
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
