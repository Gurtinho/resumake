import { UserRound } from "lucide-react"
import { SectionTitle } from "../section-title"
import { InputField } from "@/components/shared/input-field"
import { SwitchField } from "@/components/ui/switch/field"

export const BasicInfoSection = () => {
  return (
    <div>
      <SectionTitle icon={UserRound} title="Informações Básicas" />

      <div className="grid grid-cols-2 gap-4 mt-4 w-full">
        <div className="col-span-full w-full flex gap-3 items-end">
          <InputField label="Foto" title="content.image.url" placeholder="https://..." containerClassName="flex-1" />
          <SwitchField name="content.image.visible" className="mb-2" />
        </div>

        <InputField label="Nome" title="content.infos.fullName" placeholder="Seu nome completo" />
        <InputField label="Cabeçalho" title="content.infos.headLine" />
        <InputField label="Email" title="content.infos.email" placeholder="seuemail@email.com" />
        <InputField label="Website" title="content.infos.website" placeholder="https://" />
        <InputField label="Telefone" title="content.infos.phone" placeholder="(11) 99999-9999" />
        <InputField label="Localização" title="content.infos.location" placeholder="São Paulo, Brasil" />
        {/* <InputField label="LinkedIn" title="content.infos.linkedin" placeholder="https://www.linkedin.com/in/seu-nome" /> */}
      </div>
    </div>
  )
}