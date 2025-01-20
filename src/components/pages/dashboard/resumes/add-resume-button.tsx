import { Plus } from "lucide-react"
import { ResumeCardButton } from "./resume-card-button"

export const AddResumeButton = () => {
  return (
    <ResumeCardButton
    title="Novo currículo"
    description="Comece do zero"
    icon={<Plus size={50} />}
    />
  )
}