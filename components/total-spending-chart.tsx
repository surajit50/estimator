"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", spending: 4000 },
  { month: "Feb", spending: 3000 },
  { month: "Mar", spending: 5000 },
  { month: "Apr", spending: 4500 },
  { month: "May", spending: 6000 },
  { month: "Jun", spending: 5500 },
]

export function TotalSpendingChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="month" stroke="#888888" />
        <YAxis stroke="#888888" tickFormatter={(value) => `$${value}`} />
        <Tooltip />
        <Line type="monotone" dataKey="spending" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}

