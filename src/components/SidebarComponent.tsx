import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
  } from "@/components/ui/sidebar";
import dashboardIcon from '../assets/icons/dashboard.svg';
import plotIcon from '../assets/icons/plot.svg';
import chatIcon from '../assets/icons/chat.svg';
import agreementIcon from '../assets/icons/agreement.svg';
import userIcon from '../assets/icons/user.svg';
import logo from '../assets/icons/Isolation_Mode.svg';

const SidebarComponent = () => {
    const items = [
        {
          title: "Dashboard",
          url: "#",
          icon: dashboardIcon,
        },
        {
          title: "Plot",
          url: "#",
          icon: plotIcon,
        },
        {
          title: "Agreements",
          url: "#",
          icon: agreementIcon,
        },
        {
          title: "Service Requests",
          url: "#",
          icon: chatIcon,
        },
        {
          title: "Investors",
          url: "#",
          icon: userIcon,
        },
      ]
  return (
    // <SidebarProvider>
    <Sidebar>
    <SidebarContent>
      <SidebarHeader>
        <img src={logo} alt="logo" className="h-10"/>
      </SidebarHeader>
      <SidebarGroup>
        {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <img src={item?.icon} alt="icon" />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
  // </SidebarProvider>
  )
}

export default SidebarComponent;