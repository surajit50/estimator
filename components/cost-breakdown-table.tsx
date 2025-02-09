"use client"

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"

const costBreakdown = [
  { category: "Materials", cost: 50000 },
  { category: "Labor", cost: 30000 },
  { category: "Equipment", cost: 20000 },
  { category: "Miscellaneous", cost: 5000 },
]

export function CostBreakdownTable() {
  return (
    <Table>
      <TableCaption>Cost Breakdown</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Category</TableHead>
          <TableHead>Cost</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {costBreakdown.map((item) => (
          <TableRow key={item.category}>
            <TableCell>{item.category}</TableCell>
            <TableCell>
              <Input type="number" defaultValue={item.cost} className="w-32" />
            </TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell className="font-bold">Total</TableCell>
          <TableCell className="font-bold">
            ${costBreakdown.reduce((acc, item) => acc + item.cost, 0).toLocaleString()}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

