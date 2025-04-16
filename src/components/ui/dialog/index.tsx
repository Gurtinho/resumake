import {
  Dialog as DialogRoot,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog/primitive"

export type BaseDialogProps = {
  children?: React.ReactNode
  open?: boolean
  setOpen?: (open: boolean) => void
}

type IDialogProps = BaseDialogProps & {
  title: string
  description?: string
  content: React.ReactNode
}

export const Dialog = ({ children, content, description, title, open, setOpen }: IDialogProps) => {
  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      {children && (
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
      )}

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {
            description && (
              <DialogDescription>{description}</DialogDescription>
            )
          }
        </DialogHeader>
        {content}
      </DialogContent>
    </DialogRoot>
  )
}