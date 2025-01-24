import { UserRound } from "lucide-react"
import { SectionTitle } from "../section-title"
import { InputField } from "@/components/shared/input-field"

export const BasicInfoSection = () => {
  return (
    <div>
      <SectionTitle icon={UserRound} title="Informações Básicas" />

      <div className="grid grid-cols-2 gap-4 mt-4 w-full">
        <div className="col-span-full w-full flex gap-3 items-end">
          <InputField label="Título" title="title" />
        </div>
      </div>
    </div>
  )
}