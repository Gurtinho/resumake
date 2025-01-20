import Link from "next/link"
import { ResumeCardButton } from "./resume-card-button"

export const ResumeCard = () => {
  return (
    <Link href="/dashboard/resumes/example" className="block w-full">
      <ResumeCardButton title="Exemplo" description="Exemplo de currículo" icon={<div className="text-4xl">👋</div>} />
    </Link>
  )
}