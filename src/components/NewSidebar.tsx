"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  LayoutDashboard,
  Handshake,
  User,
  ScrollText,
  Building2,
  SlidersVertical,
  ClipboardList,
  Contact,
  MenuIcon,
} from "lucide-react";

// Define the type for menu items
interface MenuItemType {
  title: string;
  icon?: React.ReactNode;
  href?: string; // For items with links
  items?: MenuItemType[]; // For nested items
}

const NewSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  // Toggle sidebar collapse state
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  // Menu data structure
  const menuItems: MenuItemType[] = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard />,
      items: [
        { title: "Analytics", href: "/crm/dashboard/analytics", icon: <Contact /> },
        {
          title: "Reports",
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
      icon: <Contact />,
      href: "/crm/companymaster",
    },
    {
      title: "Deal Management",
      icon: <Handshake />,
      items: [
        { title: "General", href: "/deal/general" },
        { title: "Security", href: "/deal/security" },
      ],
    },
    {
      title: "Visitor Management",
      icon: <User />,
      items: [
        { title: "General", href: "/visitor/general" },
        { title: "Security", href: "/visitor/security" },
      ],
    },
    {
      title: "Arrangement Management",
      icon: <ScrollText />,
      items: [
        { title: "General", href: "/arrangement/general" },
        { title: "Security", href: "/arrangement/security" },
      ],
    },
    {
      title: "Property Management",
      icon: <Building2 />,
      items: [
        { title: "General", href: "/property/general" },
        { title: "Security", href: "/property/security" },
      ],
    },
    {
      title: "Reporting System",
      icon: <ClipboardList />,
      items: [
        { title: "General", href: "/reporting/general" },
        { title: "Security", href: "/reporting/security" },
      ],
    },
    {
      title: "Preferences",
      icon: <SlidersVertical />,
      href: "/settings/general",
    },
  ];

  // Recursive function to render menu items
  const renderMenu = (items: MenuItemType[]) => {
    return items.map((item, index) => {
      // Check if the item has sub-items
      if (item.items && item.items.length > 0) {
        // Render as SubMenu for items with sub-items
        return (
          <SubMenu
            key={index}
            label={item.title}
            icon={item.icon}
            className="border-2 border-b-black border-t-[#394963] border-r-[#2e3951] border-l-[#2e3951] text-sm bg-[#2e3951] cursor-pointer text-[#ffffff] hover:text-black hover:bg-slate-600"
          >
            {renderMenu(item.items)} {/* Recursively render sub-items */}
          </SubMenu>
        );
      }
  
      // Render as MenuItem for items without sub-items
      return (
        <MenuItem
          key={index}
          icon={item.icon}
          className="border-2 border-b-black border-t-[#394963] border-r-[#2e3951] border-l-[#2e3951]  text-sm cursor-pointer bg-[#2e3951] text-[#ffffff] hover:text-black hover:bg-slate-600"
          component={item.href ? <Link href={item.href} /> : undefined} // Use Link directly in component
        >
          {item.title}
        </MenuItem>
      );
    });
  };
  
  

  return (
    <main>
      <div className="flex flex-col h-screen w-[200px] bg-[#dfdfdf]">
        <Sidebar
          className="h-full z-[1]"
          collapsed={collapsed}
          collapsedWidth="80px"
          transitionDuration={300}
          backgroundColor={"#2e3951"}
        >
          {/* Sidebar Header */}
          <div className=" bg-[#0275d8]">
            <Menu>
              <MenuItem
                className="cursor-pointer border-none p-0 ml-0 bg-none"
                icon={<MenuIcon />}
                onClick={toggleSidebar}
              />
            </Menu>
          </div>

          {/* Main Sidebar Menu */}
          <Menu>{renderMenu(menuItems)}</Menu>
        </Sidebar>
      </div>
    </main>
  );
};

export default NewSidebar;
