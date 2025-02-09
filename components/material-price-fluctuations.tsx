"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", steel: 100, concrete: 80, wood: 60 },
  { month: "Feb", steel: 110, concrete: 85, wood: 65 },
  { month: "Mar", steel: 105, concrete: 90, wood: 70 },
  { month: "Apr", steel: 120, concrete: 95, wood: 75 },
  { month: "May", steel: 130, concrete: 100, wood: 80 },
  { month: "Jun", steel: 125, concrete: 105, wood: 85 },
]

export function MaterialPriceFluctuations() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="month" stroke="#888888" />
        <YAxis stroke="#888888" />
        <Tooltip />
        <Line type="monotone" dataKey="steel" stroke="#8884d8" strokeWidth={2} />
        <Line type="monotone" dataKey="concrete" stroke="#82ca9d" strokeWidth={2} />
        <Line type="monotone" dataKey="wood" stroke="#ffc658" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}

