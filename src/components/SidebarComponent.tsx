import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

import dashboardIcon from '../assets/icons/dashboard.svg';
import plotIcon from '../assets/icons/plot.svg';
import chatIcon from '../assets/icons/chat.svg';
import agreementIcon from '../assets/icons/agreement.svg';
import userIcon from '../assets/icons/user.svg';
import logo from '../assets/icons/Isolation_Mode.svg';
import settingsIcon from '../assets/icons/settingIcon.png';
import logoutIcon from '../assets/icons/logoutIcon.png';
import profileImage from '../assets/profile.jpg';
import { ArrowRight, ChevronRight, ForwardIcon } from "lucide-react";


const SidebarComponent = () => {
  const items = [
    {
      title: "Dashboard",
      url: "/",
      icon: dashboardIcon,
    },
    {
      title: "Plot",
      url: "/plots",
      icon: plotIcon,
    },
    {
      title: "Agreements",
      url: "/agreements",
      icon: agreementIcon,
    },
    {
      title: "Service Requests",
      url: "#",
      icon: chatIcon,
    },
    {
      title: "Investors",
      url: "/investors",
      icon: userIcon,
    },
  ]
  const footerItems = [
    {
      title: "Settings",
      url: "",
      icon: settingsIcon,
    },
    {
      title: "Logout",
      url: "",
      icon: logoutIcon,
    },]

  return (

    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarHeader>
          <img src={logo} alt="logo" className="h-10" />
        </SidebarHeader>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <img src={item?.icon} alt="icon" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          {footerItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link to={item?.url}>
                  <img src={item?.icon} alt="icon" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <SidebarContent>

          <div className="flex gap-5 items-center">

            <div className="relative">
              <img src={profileImage} className="size-[40px] rounded-full" alt="Profile" />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border border-white rounded-full"></span>
            </div>

            <div className="flex flex-col leading-tight">
              <div className="flex items-center gap-2">
                <p className="text-[14px] text-white font-medium">Mushthofa Ahmad Kamal</p>
                <ChevronRight size={24} className="text-gray-500" />
              </div>
              <p className="text-gray-500 text-sm">Finance Specialist</p>
            </div>

          </div>

        </SidebarContent>

      </SidebarFooter>

    </Sidebar>

  )
}

export default SidebarComponent;