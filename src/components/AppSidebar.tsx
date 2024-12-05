"use client";

import React from "react";
import {
  LayoutDashboard,
  Handshake,
  User,
  ScrollText,
  Building2,
  SlidersVertical,
  ClipboardList,
  Contact,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { MenuItem } from "@/types/menu";
import { NestedMenuItem } from "./nested-menu-item";
import Image from "next/image";

const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    items: [
      { title: "Analytics", href: "/crm/dashboard/analytics" },
      { title: "Reports",
        items: [
          { title: "Daily", href: "/crm/dashboard/reports/daily" },
          { title: "Weekly", href: "/crm/dashboard/reports/weekly" },
          { title: "Monthly", href: "/crm/dashboard/reports/monthly" },
        ],
      },
    ],
  },
  {
    title: "Company Master",
    icon: Contact,
    href: "/crm/companymaster"
  },
  {
    title: "Deal Management",
    icon: Handshake,
    items: [
      { title: "General", href: "/settings/general" },
      { title: "Security", href: "/settings/security" },
    ],
  },
  {
    title: "Visitor Management",
    icon: User,
    items: [
      { title: "General", href: "/settings/general" },
      { title: "Security", href: "/settings/security" },
    ],
  },
  {
    title: "Arrangement Management",
    icon: ScrollText,
    items: [
      { title: "General", href: "/settings/general" },
      { title: "Security", href: "/settings/security" },
    ],
  },
  {
    title: "Property Management",
    icon: Building2,
    items: [
      { title: "General", href: "/settings/general" },
      { title: "Security", href: "/settings/security" },
    ],
  },
  {
    title: "Reporting System",
    icon: ClipboardList,
    items: [
      { title: "General",  href: "/settings/general" },
      { title: "Security", href: "/settings/security" },
    ],
  },
  {
    title: "Preferences",
    icon: SlidersVertical,
    href: "/settings/general",
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <Image
              src="/images/logo.png"
              alt="logo of the website"
              width={50}
              height={50}
            />
            <b>CRM</b>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item, index) => (
                <NestedMenuItem key={index} item={item} level={0} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
