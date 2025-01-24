import { cn } from "@/lib/utils"

interface ILogoProps {
  className?: string
}

export const Logo = ({ className }: ILogoProps) => {
  return (
    <h1 className={cn(
      "text-2xl font-bold",
      className, // substitui as props com propriedade
    )}>ResuMake✏️</h1>
  )
}