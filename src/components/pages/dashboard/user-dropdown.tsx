import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LogOut, SquareUser } from "lucide-react"

export const UserDropdown = () => {
  return (
    <DropdownMenu>
      {/* Botão de clique */}
      {/* asChild renderiza somente o componente interno */}
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} className="w-full gap-2 justify-start px-2">
          <Avatar className="w-7 h-7 block">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>Gustavo Litter</p>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="center" className="w-[var(--radix-dropdown-menu-trigger-width)]">
        <Link passHref href="/dashboard/account">
          <DropdownMenuItem className="gap-2 cursor-pointer">
            <SquareUser size={16} />
            Configurações de conta
          </DropdownMenuItem>
        </Link>

        <DropdownMenuItem className="gap-2 text-red-500 cursor-pointer">
          <LogOut size={16} />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}