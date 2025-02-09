"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Roads",
    total: 4000,
  },
  {
    name: "Buildings",
    total: 3000,
  },
  {
    name: "Solar",
    total: 2000,
  },
  {
    name: "Drainage",
    total: 2780,
  },
  {
    name: "Bridges",
    total: 1890,
  },
  {
    name: "Culverts",
    total: 2390,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

