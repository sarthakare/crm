"use client";

import React from "react";
import { ChevronDown, Circle, Square, Triangle } from "lucide-react"; // Additional icons for levels
import { usePathname } from "next/navigation"; // For active path detection in Next.js
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { MenuItem } from "@/types/menu";

interface NestedMenuItemProps {
  item: MenuItem;
  level: number;
}

// Map icons for levels starting from level 1
const levelIcons = [
  null,      // Level 0: use `item.icon`
  Circle,    // Level 1
  Square,    // Level 2
  Triangle,  // Level 3
  ChevronDown // Fallback for deeper levels
];

export function NestedMenuItem({ item, level }: NestedMenuItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const hasSubItems = item.items && item.items.length > 0;
  const pathname = usePathname(); // Get current path in Next.js

  // Check if the menu item is active
  const isActive = pathname === item.href;

  const getPaddingClass = (level: number) => `pl-${4 + level * 4}`;
  const Icon = level === 0 ? item.icon : levelIcons[level] || ChevronDown; // Use item.icon for level 0

  if (!hasSubItems) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton
          className={cn(
            "w-full justify-start",
            getPaddingClass(level),
            isActive && "bg-blue-500 text-white" // Active styles
          )}
          asChild
        >
          <a href={item.href}>
            {Icon && <Icon className="mr-2 h-4 w-4 flex-shrink-0" />}
            {item.title}
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <SidebarMenuItem>
          <SidebarMenuButton
            className={cn(
              "w-full justify-between",
              getPaddingClass(level),
              isActive && "bg-blue-500 text-white" // Active styles
            )}
          >
            <span className="flex items-center">
              {Icon && <Icon className="mr-2 h-4 w-4 flex-shrink-0" />}
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
      <CollapsibleContent>
        <div className={getPaddingClass(level)}>
          {item.items?.map((subItem, index) => (
            <NestedMenuItem key={index} item={subItem} level={level + 1} />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
