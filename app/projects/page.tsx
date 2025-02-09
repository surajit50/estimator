import { ProjectsTable } from "@/components/projects-table"
import { CreateProjectDialog } from "@/components/create-project-dialog"

export default function ProjectsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Projects</h1>
        <CreateProjectDialog />
      </div>
      <ProjectsTable />
    </div>
  )
}

