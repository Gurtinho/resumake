import { Palette } from "lucide-react"
import { SectionTitle } from "../../infos-sidebar/section-title"

import colors from 'tailwindcss/colors'
import { useFormContext } from "react-hook-form";
import { ResumeSchemaProps } from "../..";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const colorsIgnore = [
  'current',
  'inherit',
  'currentColor',
  'transparent',
  'black',
  'white',
];

const colorsKeys = Object.keys(colors).filter((color) => !colorsIgnore.includes(color));
export const ThemeSection = () => {
  const {
    watch,
    setValue,
  } = useFormContext<ResumeSchemaProps>();

  const colorValue = watch('structure.colorTheme');

  return (
    <div>
      <SectionTitle title="Temas" icon={Palette} />

      <div className="grid grid-cols-7 gap-4 mt-4">
        {
          colorsKeys.map((color) => {
            const isSelected = colorValue === color;

            return (
              <Button
                key={color}
                variant="ghost"
                className={cn(
                  'w-7 h-7 p-1 rounded-full transition-all',
                  isSelected && 'ring-2 ring-foreground'
                )}
                onClick={() => setValue('structure.colorTheme', color)}
              >
                <div
                  className="w-full h-full rounded-full"
                  style={{
                    backgroundColor: colors[color as keyof typeof colors][500]
                  }}
                >
                </div>
              </Button>
            )
          })
        }
      </div>
    </div>
  )
}