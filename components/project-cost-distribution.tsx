"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { project: "Project A", materials: 4000, labor: 2400, equipment: 2400 },
  { project: "Project B", materials: 3000, labor: 1398, equipment: 2210 },
  { project: "Project C", materials: 2000, labor: 9800, equipment: 2290 },
  { project: "Project D", materials: 2780, labor: 3908, equipment: 2000 },
  { project: "Project E", materials: 1890, labor: 4800, equipment: 2181 },
]

export function ProjectCostDistribution() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="project" stroke="#888888" />
        <YAxis stroke="#888888" />
        <Bar dataKey="materials" stackId="a" fill="#8884d8" />
        <Bar dataKey="labor" stackId="a" fill="#82ca9d" />
        <Bar dataKey="equipment" stackId="a" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  )
}

