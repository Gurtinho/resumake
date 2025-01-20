'use client'

import { Newspaper, SquareUser } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export const NavItems = () => {
  const pathName = usePathname()

  const navItems = [
    {
      name: "Currículos",
      path: "/dashboard/resumes",
      icon: Newspaper
    },
    {
      name: "Configurações de Conta",
      path: "/dashboard/account",
      icon: SquareUser
    }
  ]

  return (
    <div className="w-full flex flex-col gap-2 px-2 py-4">
      {navItems.map((item) => {
        const isActive = pathName.startsWith(item.path)
        return (
          <Link
            key={item.path}
            href={item.path}
          >
            <Button variant={"ghost"} className={cn(
              "w-full gap-2 justify-start",
              isActive && "bg-accent",
            )}>
              <item.icon size={16} />
              {item.name}
            </Button>
          </Link>
        )
      })}
    </div>
  )
}