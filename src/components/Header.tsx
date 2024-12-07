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
import { Bell, ChevronDown, Mail, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { useButtonContext } from "@/context/ButtonContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { setIsClicked } = useButtonContext();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <Menubar className="flex justify-between items-center right-0">
        {/* Left-aligned button */}
        <div>
          <div>
            <Button
              variant={"outline"}
              className="bg-white text-black"
              onClick={() => setIsClicked((prev) => !prev)} // Toggle global state
            >
              <Menu />
            </Button>
          </div>
        </div>

        {/* Right-aligned menus */}
        <div className="flex items-center space-x-4">
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
        </div>
      </Menubar>
    </header>
  );
};

export default Header;
