import { LayoutDashboard, Handshake, User, ScrollText, Building2, SlidersVertical, ClipboardList,} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboard ,
  },
  {
    title: "Deal Management",
    url: "#",
    icon: Handshake,
  },
  {
    title: "Visitor Management",
    url: "#",
    icon: User,
  },
  {
    title: "Arrangement Management",
    url: "#",
    icon: ScrollText,
  },
  {
    title: "Property Management",
    url: "#",
    icon: Building2,
  },
  {
    title: "Reporting System",
    url: "#",
    icon: ClipboardList ,
  },
  {
    title: "Preferenses",
    url: "#",
    icon: SlidersVertical ,
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className=" h-screen">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel><b>CRM</b></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
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
  )
}
