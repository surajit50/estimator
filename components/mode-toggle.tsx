"use client"

import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} variant="ghost" size="icon">
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  )
}

