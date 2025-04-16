import { Languages } from "lucide-react"
import { SectionTitle } from "../../infos-sidebar/section-title"
import { useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ResumeSchemaProps } from "../..";

type LanguageValue = ResumeSchemaProps['structure']['languages'];
type LanguageOptions = {
  value: LanguageValue;
  label: string;
};

const languageOptions: LanguageOptions[] = [
  {
    label: 'Português',
    value: 'portuguese',
  },
  {
    label: 'Inglês',
    value: 'english',
  },
  {
    label: 'Francês',
    value: 'french',
  },
  {
    label: 'Alemão',
    value: 'german',
  },
  {
    label: 'Italiano',
    value: 'italian',
  },
  {
    label: 'Espanhol',
    value: 'spanish',
  },
];

export const LanguageSection = () => {
  const { setValue, watch } = useFormContext<ResumeSchemaProps>();
  const language = watch("structure.languages");

  return (
    <div>
      <SectionTitle title="Idiomas" icon={Languages} />

      <div>
        <Select value={language} onValueChange={(value: LanguageValue) => setValue("structure.languages", value)}>
          <SelectTrigger className="mt-4">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            {languageOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
