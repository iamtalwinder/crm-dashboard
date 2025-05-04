import { KpiCard } from "@/components/shared";
import { ORDER_STATS } from "@/data/orders";
import OrdersIcon from "@/components/icons/orders-icon";
import TokenIcon from "@/components/icons/token-icon";
import { RevenueIcon } from "@/components/icons/revenue-icon";
import PendingOrdersIcon from "@/components/icons/pending-orders-icon";
import PendingReturnsIcon from "@/components/icons/pending-returns-icon";

export function KPICards() {
  const stats = [
    {
      key: "totalOrder",
      title: "Total Orders",
      icon: <OrdersIcon />,
    },
    {
      key: "totalTaken",
      title: "Total Taken",
      icon: <TokenIcon />,
    },
    {
      key: "totalRevenue",
      title: "Total Revenue",
      icon: <RevenueIcon />,
    },
    {
      key: "pendingOrders",
      title: "Pending Orders",
      icon: <PendingOrdersIcon />,
    },
    {
      key: "pendingReturns",
      title: "Pending Returns",
      icon: <PendingReturnsIcon />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {stats.map((stat) => {
        const data = ORDER_STATS[stat.key as keyof typeof ORDER_STATS];

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
        );
      })}
    </div>
  );
}
