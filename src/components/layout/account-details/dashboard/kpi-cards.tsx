import { KpiCard } from "@/components/shared"
import { ORDER_STATS } from "@/data/orders"
import {
  PackageIcon,
  UsersIcon,
  DollarSignIcon,
  ClockIcon,
  RotateCcwIcon,
} from "lucide-react"

export function KPICards() {
  const stats = [
    {
      key: "totalOrder",
      title: "Total Orders",
      icon: <PackageIcon className="text-pink-500" />,
    },
    {
      key: "totalTaken",
      title: "Total Taken",
      icon: <UsersIcon className="text-orange-500" />,
    },
    {
      key: "totalRevenue",
      title: "Total Revenue",
      icon: <DollarSignIcon className="text-purple-500" />,
    },
    {
      key: "pendingOrders",
      title: "Pending Orders",
      icon: <ClockIcon className="text-red-500" />,
    },
    {
      key: "pendingReturns",
      title: "Pending Returns",
      icon: <RotateCcwIcon className="text-orange-400" />,
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {stats.map((stat) => {
        const data = ORDER_STATS[stat.key as keyof typeof ORDER_STATS]

        return (
          <KpiCard
            key={stat.key}
            title={stat.title}
            value={data.value}
            icon={stat.icon}
            trend={data.trend as any}
            percentage={data.percentage}
            time={data.time}
          />
        )
      })}
    </div>
  )
}
