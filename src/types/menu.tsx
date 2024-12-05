import { type LucideIcon } from 'lucide-react'

export interface MenuItem {
  title: string
  icon?: LucideIcon
  href?: string
  items?: MenuItem[]
}

