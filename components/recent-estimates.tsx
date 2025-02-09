import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const recentEstimates = [
  {
    id: "EST001",
    project: "City Center Mall",
    status: "Approved",
    amount: "$1.2M",
    date: "2023-06-15",
  },
  {
    id: "EST002",
    project: "Highway Expansion",
    status: "Pending",
    amount: "$3.5M",
    date: "2023-06-14",
  },
  {
    id: "EST003",
    project: "Solar Farm",
    status: "Rejected",
    amount: "$2.8M",
    date: "2023-06-13",
  },
]

export function RecentEstimates() {
  return (
    <div className="space-y-8">
      {recentEstimates.map((estimate) => (
        <div key={estimate.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/placeholder-project.svg" alt="Project" />
            <AvatarFallback>{estimate.project[0]}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{estimate.project}</p>
            <p className="text-sm text-muted-foreground">{estimate.date}</p>
          </div>
          <div className="ml-auto font-medium">{estimate.amount}</div>
          <Badge
            variant={
              estimate.status === "Approved" ? "success" : estimate.status === "Pending" ? "warning" : "destructive"
            }
            className="ml-2"
          >
            {estimate.status}
          </Badge>
        </div>
      ))}
    </div>
  )
}

