"use client"

import React from "react"
import { ChevronDown } from 'lucide-react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { MenuItem } from "@/types/menu"

interface NestedMenuItemProps {
  item: MenuItem
  level: number
}

export function NestedMenuItem({ item, level }: NestedMenuItemProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const hasSubItems = item.items && item.items.length > 0

  if (!hasSubItems) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton
          className={cn("w-full justify-start", level > 0 && `pl-${6 + level * 4}`)}
          asChild
        >
          <a href={item.href}>
            {item.icon && <item.icon className="mr-2 h-4 w-4" />}
            {item.title}
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    )
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <SidebarMenuItem>
          <SidebarMenuButton className={cn("w-full justify-between", level > 0 && `pl-${6 + level * 4}`)}>
            <span className="flex items-center">
              {item.icon && <item.icon className="mr-2 h-5 w-5" />}
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
          <NestedMenuItem key={index} item={subItem} level={level + 1} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}

