import { cn } from "@/lib/utils"

interface IResumeCardButtonProps {
  title: string
  description: string
  icon?: React.ReactNode
}
/**
 * bg-muted/50 significa que o background será 50% do valor do background do elemento pai
 */
export const ResumeCardButton = ({ title, description, icon }: IResumeCardButtonProps) => {
  return ( 
    <button className={cn(
      "w-full h-[300px] bg-muted/50 rounded border border-muted-foreground/20",
      "flex items-center justify-center gap-4 relative outline-none overflow-hidden",
      "hover:brightness-105 dark:hover:brightness-125 transition-all"
    )}>
      {icon}

      <div className="absolute w-full left-0 bottom-0 p-3 text-left bg-gradient-to-t from-background/80">
        <p className="text-sm font-semibold font-title">{title}</p>
        <span className="block text-xs text-muted-foreground">{description}</span>
      </div>
    </button>
  )
}