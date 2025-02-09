"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut, useSession } from "next-auth/react"
import { BarChart, Building, FileText, Home, LogOut, Settings, Users, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: Building, label: "Projects", href: "/projects" },
  { icon: FileText, label: "Estimates", href: "/estimates" },
  { icon: Users, label: "Clients", href: "/clients" },
  { icon: BarChart, label: "Reports", href: "/reports" },
  { icon: Settings, label: "Settings", href: "/settings" },
]

export function AppSidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(true)
  const { data: session } = useSession()

  return (
    <Sidebar open={open} onOpenChange={setOpen}>
      <SidebarHeader className="flex items-center justify-between p-4">
        <h2 className="text-lg font-semibold">ConstructEase</h2>
        <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
          {open ? <ChevronLeft /> : <ChevronRight />}
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                      pathname === item.href && "bg-accent text-primary",
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter className="p-4 space-y-2">
        {session?.user && (
          <div className="flex items-center gap-2 mb-2">
            <Avatar>
              <AvatarImage src={session.user.image || undefined} />
              <AvatarFallback>{session.user.name?.[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{session.user.name}</p>
              <p className="text-xs text-muted-foreground">{session.user.email}</p>
            </div>
          </div>
        )}
        <div className="flex items-center justify-between">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={() => signOut()}>
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

