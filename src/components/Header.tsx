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
  return (
    <div>
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
        <MenubarTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>RM</AvatarFallback>
          </Avatar>
        </MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Mr. Raj Malhotra</MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>
        <ChevronDown />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Profile</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Settings</MenubarItem>
          <MenubarSeparator />
          <MenubarItem><b>Log Out</b></MenubarItem>
        </MenubarContent>
      </MenubarMenu>

    </Menubar>
    </div>
  );
};

export default Header;
