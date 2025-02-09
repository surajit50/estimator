import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ReportsSummary() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Estimates Generated</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">254</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Approved Estimates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">189</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Pending Estimates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">65</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">High-Cost Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12</div>
        </CardContent>
      </Card>
    </div>
  )
}

