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

const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    items: [
      { title: "Analytics", href: "/dashboard/analytics" },
      {
        title: "Reports",
        items: [
          { title: "Daily", href: "/dashboard/reports/daily" },
          { title: "Weekly", href: "/dashboard/reports/weekly" },
          {
            title: "Monthly",
            items: [
              { title: "Revenue", href: "/dashboard/reports/monthly/revenue" },
              { title: "Users", href: "/dashboard/reports/monthly/users" },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Company Master",
    icon: Contact,
    items: [
      { title: "Company Master 1", href: "/users" },
      { title: "Company Master 2", href: "/users/add" },
    ],
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
      { title: "General", href: "/settings/general" },
      { title: "Security", href: "/settings/security" },
    ],
  },
  {
    title: "Preferences",
    icon: SlidersVertical,
    items: [
      { title: "General", href: "/settings/general" },
      { title: "Security", href: "/settings/security" },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
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
