import { cn } from "@/lib/utils"
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"

type KpiCardProps = {
  title: string
  value: string | number
  icon: React.ReactNode
  trend: "up" | "down"
  percentage: string
  time: string
}

export function KpiCard({ title, value, icon, trend, percentage, time }: KpiCardProps) {
  const isDown = trend === "down"

  return (
    <div className="flex flex-col gap-4 p-4 border rounded-xl bg-card text-card-foreground">
      <div className="flex items-center justify-between">
        <div className="text-2xl">{icon}</div>
        <div className="text-sm text-muted-foreground">{title}</div>
      </div>

      <div className="text-2xl font-semibold">{value}</div>

      <div className="flex items-center justify-between text-xs">
        <span
          className={cn(
            "flex items-center gap-1 font-medium",
            isDown ? "text-red-500" : "text-green-500"
          )}
        >
          {isDown ? <ArrowDownIcon className="h-4 w-4" /> : <ArrowUpIcon className="h-4 w-4" />}
          {percentage}
        </span>
        <span className="text-muted-foreground">{time}</span>
      </div>
    </div>
  )
}
