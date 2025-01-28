/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils"
import { Label } from "./label"
import { FieldErrors } from "react-hook-form"

type FieldWrapperProps = {
  title: string
  label: string
  errors: FieldErrors<any>
  children: React.ReactNode
  className?: string
}

export const FieldWrapper = ({ title, label, children, className, errors }: FieldWrapperProps) => {
  return (
    <div className={cn(
      "flex flex-col gap-2",
      className,
    )}>
      <Label className="text-sm font-semibold mb-2">
        {label}
      </Label>
      {children}
      {errors[title] && (
				<span className="text-sm text-red-500">{errors[title]?.message?.toString()}</span>
			)}
    </div>
  )
}