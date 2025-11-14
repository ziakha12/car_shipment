"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface SidebarProps {
  open: boolean
  onToggle: () => void
}
 
const navItems = [
  { label: "Shipments", href: "/user/dashboard/", icon: "📦" },
  { label: "Cars", href: "/user/dashboard/", icon: "🚗" },
  { label: "Consignees", href: "/user/dashboard/consignee", icon: "👥" },
  { label: "Users", href: "/user/dashboard/", icon: "👤" },
  { label: "Routes", href: "/user/dashboard/", icon: "🗺️" },
]

export function Sidebar({ open, onToggle }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("Shipments")

  return (
    <>
      {/* Mobile overlay */}
      {open && <div className="fixed inset-0 bg-black/50 md:hidden z-40" onClick={onToggle} />}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed md:relative top-0 left-0 h-full bg-sidebar text-sidebar-foreground transition-all duration-300 z-50 flex flex-col",
          open ? "w-64" : "w-0 md:w-20",
        )}
      >
        {/* Logo */}
        <div className="p-4 border-b border-sidebar-border flex items-center justify-between">
          {open && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-xl">📦</div>
              <span className="font-bold text-lg">CarShip</span>
            </div>
          )}
          {open && (
            <button onClick={onToggle} className="md:hidden text-sidebar-foreground">
              ✕
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <Link
            href={item.href}
              key={item.label}
              onClick={()=> setActiveItem(item.label)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                activeItem === item.label
                  ? "bg-primary text-white"
                  : "hover:bg-sidebar-accent/20 text-sidebar-foreground",
              )}
            >
              <span className="text-lg flex-shrink-0">{item.icon}</span>
              {open && <span className="text-sm">{item.label}</span>}
            </Link>
          ))}
        </nav>

        {/* Bottom Items */}
        <div className="p-4 border-t border-sidebar-border space-y-2">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-accent/20 text-sidebar-foreground transition-colors">
            <span className="text-lg flex-shrink-0">⚙️</span>
            {open && <span className="text-sm">Settings</span>}
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-destructive/20 text-destructive transition-colors">
            <span className="text-lg flex-shrink-0">🚪</span>
            {open && <span className="text-sm">Logout</span>}
          </button>
        </div>
      </aside>
    </>
  )
}
