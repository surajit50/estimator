import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TotalSpendingChart } from "@/components/total-spending-chart"
import { ProjectCostDistribution } from "@/components/project-cost-distribution"
import { MaterialPriceFluctuations } from "@/components/material-price-fluctuations"
import { ReportsSummary } from "@/components/reports-summary"
import { DateRangePicker } from "@/components/date-range-picker"

export default function ReportsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Reports & Analytics</h1>
        <DateRangePicker />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Spending Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <TotalSpendingChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Project Cost Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ProjectCostDistribution />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Material Price Fluctuations</CardTitle>
          </CardHeader>
          <CardContent>
            <MaterialPriceFluctuations />
          </CardContent>
        </Card>
      </div>
      <ReportsSummary />
    </div>
  )
}

