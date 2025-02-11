
"use client"

import Link from "next/link"
import { Project } from "@prisma/client"

interface ProjectListProps {
  projects: Project[]
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="divide-y divide-neutral-200 rounded-md border border-neutral-200">
      {projects?.length ? (
        projects.map((project) => (
          <div
            key={project.id}
            className="flex items-center justify-between p-4"
          >
            <div className="grid gap-1">
              <Link
                href={`/projects/${project.id}`}
                className="font-semibold hover:underline"
              >
                {project.title}
              </Link>
              <div>
                <p className="text-sm text-neutral-500">{project.type}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="p-4 text-center">
          <p className="text-sm text-neutral-500">No projects created yet.</p>
        </div>
      )}
    </div>
  )
}
