"use client";
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
  ChartNoAxesCombined,
  Calendar,
  FolderLock,
  Folder,
} from "lucide-react";
import { useButtonContext } from "@/context/ButtonContext";
import Image from "next/image";

// Define the type for menu items
interface MenuItemType {
  title: string;
  icon?: React.ReactNode;
  href?: string; // For items with links
  items?: MenuItemType[]; // For nested items
}

const NewSidebar = () => {
  const { isClicked } = useButtonContext();

  // Menu data structure
  const menuItems: MenuItemType[] = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard />,
      items: [
        {
          title: "Analytics",
          href: "/crm/dashboard/analytics",
          icon: <ChartNoAxesCombined/>,
        },
        {
          title: "Reports",
          icon:<ClipboardList/>,
          items: [
            { title: "Daily", href: "/crm/dashboard/reports/daily",icon:<Calendar/> },
            { title: "Weekly", href: "/crm/dashboard/reports/weekly",icon:<Calendar/> },
            { title: "Monthly", href: "/crm/dashboard/reports/monthly",icon:<Calendar/> },
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
        { title: "General", href: "/deal/general", icon:<Folder/>  },
        { title: "Security", href: "/deal/security",icon:<FolderLock/>  },
      ],
    },
    {
      title: "Visitor Management",
      icon: <User />,
      items: [
        { title: "General", href: "/visitor/general", icon:<Folder/>  },
        { title: "Security", href: "/visitor/security",icon:<FolderLock/> },
      ],
    },
    {
      title: "Arrangement Management",
      icon: <ScrollText />,
      items: [
        { title: "General", href: "/arrangement/general", icon:<Folder/>  },
        { title: "Security", href: "/arrangement/security",icon:<FolderLock/> },
      ],
    },
    {
      title: "Property Management",
      icon: <Building2 />,
      items: [
        { title: "General", href: "/property/general", icon:<Folder/>  },
        { title: "Security", href: "/property/security",icon:<FolderLock/> },
      ],
    },
    {
      title: "Reporting System",
      icon: <ClipboardList />,
      items: [
        { title: "General", href: "/reporting/general", icon:<Folder/>  },
        { title: "Security", href: "/reporting/security",icon:<FolderLock/> },
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
      <div
        className="flex flex-col h-screen bg-[#dfdfdf] ${isClicked ? 'w-[80px]' : 'w-[250px]'">
        <Sidebar
          className="h-full z-[1]"
          width={"250px"}
          collapsed={isClicked}
          collapsedWidth="80px"
          transitionDuration={300}
          backgroundColor={"#2e3951"}
        >
          {/* Sidebar Header */}
          <div className=" bg-[#0275d8] flex justify-center items-center h-[8vh] text-white text-2xl">
            <Image
              src="/images/logo.png"
              alt="logo of the website"
              width={40}
              height={40}
            />
            &nbsp;
            { !isClicked && <b className="duration-300">CRM</b>}
          </div>

          {/* Main Sidebar Menu */}
          <Menu closeOnClick={true}>{renderMenu(menuItems)}</Menu>
        </Sidebar>
      </div>
    </main>
  );
};

export default NewSidebar;
