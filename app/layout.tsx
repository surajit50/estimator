import { Inter } from "next/font/google"
import { SidebarProvider } from "@/components/ui/sidebar"

import { Toaster } from "@/components/ui/toaster"
import { AppSidebar } from "@/components/sidebar"
import { AuthProvider } from "@/components/auth-provider"
import "@/styles/globals.css"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          
            <SidebarProvider>
              <div className="flex h-screen overflow-hidden">
                <AppSidebar />
                <main className="flex-1 overflow-y-auto bg-background">{children}</main>
              </div>
              <Toaster />
            </SidebarProvider>
         
        </AuthProvider>
      </body>
    </html>
  )
}



import './globals.css'