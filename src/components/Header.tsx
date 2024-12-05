"use client";
import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Bell, ChevronDown, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <Mail />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>No New Mail</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Bell />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>No New Notification</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger onClick={handleMenuToggle}>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>RM</AvatarFallback>
          </Avatar>
          &nbsp; Mr. Raj Malhotra &nbsp;
          <ChevronDown
            size={"15px"}
            className={`transition-transform duration-300 ${
              isMenuOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Profile</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Settings</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <b>Log Out</b>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Header;
