import { Label } from "./label"

type FieldWrapperProps = {
  label: string
}

export const FieldWrapper = ({ label }: FieldWrapperProps) => {
  return (
    <Label className="text-sm font-semibold mb-2">
      {label}
    </Label>
  )
}