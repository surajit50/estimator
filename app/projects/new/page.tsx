
import { ProjectForm } from "@/components/forms/project-form"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"

export default function NewProjectPage() {
  return (
    <DashboardShell>
      <DashboardHeader 
        heading="Create New Project" 
        text="Add a new construction project to your dashboard"
      />
      <div className="grid gap-8">
        <ProjectForm />
      </div>
    </DashboardShell>
  )
}
