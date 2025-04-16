import { Draggable } from "@hello-pangea/dnd";
import { GripVertical } from 'lucide-react';
import { ResumeSchemaProps } from "../..";
import { useFormContext } from "react-hook-form";

type LayoutDraglistProps = {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fields: LayoutSection[];
};

const labels: Record<Sections, Record<ResumeSchemaProps['structure']['languages'], string>> = {
  certifications: {
    portuguese: "Certificações",
    english: "Certifications",
    french: "Certifications",
    german: "Zertifizierungen",
    italian: "Certificazioni",
    spanish: "Certificaciones",
  },
  educations: {
    portuguese: "Educação",
    english: "Education",
    french: "Éducation",
    german: "Bildung",
    italian: "Istruzione",
    spanish: "Educación",
  },
  experiences: {
    portuguese: "Experiências",
    english: "Experiences",
    french: "Expériences",
    german: "Erfahrungen",
    italian: "Esperienze",
    spanish: "Experiencias",
  },
  languages: {
    portuguese: "Idiomas",
    english: "Languages",
    french: "Langues",
    german: "Sprachen",
    italian: "Lingue",
    spanish: "Idiomas",
  },
  projects: {
    portuguese: "Projetos",
    english: "Projects",
    french: "Projets",
    german: "Projekte",
    italian: "Progetti",
    spanish: "Proyectos",
  },
  skills: {
    portuguese: "Habilidades",
    english: "Skills",
    french: "Compétences",
    german: "Fähigkeiten",
    italian: "Abilità",
    spanish: "Habilidades",
  },
  socialMedias: {
    portuguese: "Redes Sociais",
    english: "Social Medias",
    french: "Réseaux Sociaux",
    german: "Soziale Medien",
    italian: "Social Media",
    spanish: "Redes Sociales",
  },
  summary: {
    portuguese: "Resumo",
    english: "Summary",
    french: "Résumé",
    german: "Zusammenfassung",
    italian: "Sommario",
    spanish: "Resumen",
  },
};

export const LayoutDragList = ({ title, fields }: LayoutDraglistProps) => {
  const { watch } = useFormContext<ResumeSchemaProps>();
  const language = watch('structure.languages') as ResumeSchemaProps['structure']['languages'];

  return (
    <div className="w-full p-2 bg-muted rounded">
      <p className="font-title text-sm font-bold mb-2">{title}</p>

      <div className="flex flex-col gap-2">
        {
          fields.map((field, index) => {
            const field_key = field.key as Sections;
            return (
              <Draggable
                key={field.id}
                index={index}
                draggableId={field.key}
              >
                {(provided) => (
                  <div
                    key={field.id}
                    ref={provided.innerRef}
                    {...provided.draggableProps} // Permite arrastar o elemento
                    {...provided.dragHandleProps} // Permite arrastar o elemento por inteiro
                    className="flex items-center gap-1 bg-foreground p-1 rounded"
                  >
                    <GripVertical className="w-4 h-4 min-w-4 text-background"/>
                    <p className="text-accent text-xs font-semibold">
                      {labels[field_key][language]}
                    </p>
                  </div>
                )}
              </Draggable>
            )
          })
        }
      </div>
    </div>
  )
}