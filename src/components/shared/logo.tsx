import { cn } from "@/lib/utils"

export const Logo = ({ className }: { className?: string }) => {
  return (
    <h1 className={cn(
      "text-2xl font-bold",
      className,
    )}>ResuMake✏️</h1>
  )
}