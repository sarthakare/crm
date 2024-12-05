"use client";
import { LayoutDashboard, Handshake, User, ScrollText, Building2, SlidersVertical, ClipboardList, ChevronDown, LucideIcon, Contact,} from "lucide-react"

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
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"
import React from "react"
import { cn } from "@/lib/utils"

// Menu items.
interface MenuItem {
  title: string
  icon: LucideIcon
  items?: { title: string; href: string }[]
}

const menuItems: MenuItem[] = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    items: [
      { title: 'Analytics', href: '/dashboard/analytics' },
      { title: 'Reports', href: '/dashboard/reports' },
    ],
  },
  {
    title: 'Company Master',
    icon: Contact ,
    items: [
      { title: 'Company Master 1', href: '/users' },
      { title: 'Company Master 2', href: '/users/add' },
    ],
  },
  {
    title: 'Deal Management',
    icon: Handshake,
    items: [
      { title: 'General', href: '/settings/general' },
      { title: 'Security', href: '/settings/security' },
    ],
  },
  {
    title: 'Visitor Management',
    icon: User,
    items: [
      { title: 'General', href: '/settings/general' },
      { title: 'Security', href: '/settings/security' },
    ],
  },
  {
    title: 'Arrangement Management',
    icon: ScrollText,
    items: [
      { title: 'General', href: '/settings/general' },
      { title: 'Security', href: '/settings/security' },
    ],
  },
  {
    title: 'Property Management',
    icon: Building2,
    items: [
      { title: 'General', href: '/settings/general' },
      { title: 'Security', href: '/settings/security' },
    ],
  },
  {
    title: 'Reporting System',
    icon: ClipboardList,
    items: [
      { title: 'General', href: '/settings/general' },
      { title: 'Security', href: '/settings/security' },
    ],
  },
  {
    title: 'Preferenses',
    icon: SlidersVertical,
    items: [
      { title: 'General', href: '/settings/general' },
      { title: 'Security', href: '/settings/security' },
    ],
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel><b>CRM</b></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
            {menuItems.map((item, index) => (
              <CollapsibleMenuItem key={index} item={item} />
            ))}
          </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

function CollapsibleMenuItem({ item }: { item: MenuItem }) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <SidebarMenuItem>
          <SidebarMenuButton className="w-full justify-between">
            <span className="flex items-center">
              <item.icon className="mr-2 h-4 w-4" />
              {item.title}
            </span>
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-200",
                isOpen ? "rotate-180" : ""
              )}
            />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-1">
        {item.items?.map((subItem, index) => (
          <SidebarMenuItem key={index}>
            <SidebarMenuButton
              className="w-full justify-start pl-9"
              asChild
            >
              <a href={subItem.href}>{subItem.title}</a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}