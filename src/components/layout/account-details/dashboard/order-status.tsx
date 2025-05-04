import { CardSection, DateModePicker, RoundedSelect } from "@/components/shared"
import { ORDER_STATUS } from "@/data/orders"
import clsx from "clsx"
import { PieChart, Pie, Cell } from "recharts"
import ClassifyIcon from "@/components/icons/classify-icon"
import CelebrateIcon from "@/components/icons/celebrate-icon"
import TimerIcon from "@/components/icons/timer-icon"
import TruckIcon from "@/components/icons/truck-icon"
import CertificateIcon from "@/components/icons/certificate-icon"
import HistoryIcon from "@/components/icons/history-icon"

const statusConfig = [
  { key: "all", label: "All", icon: <ClassifyIcon /> },
  { key: "new", label: "New", icon: <CelebrateIcon /> },
  { key: "pending", label: "Pending", icon: <TimerIcon /> },
  { key: "dispatched", label: "Dispatched", icon: <TruckIcon /> },
  { key: "delivered", label: "Delivered", icon: <CertificateIcon /> },
  { key: "cancelled", label: "Cancelled", icon: <HistoryIcon /> },
]

const COLORS = ["#EF4444", "#FACC15", "#22C55E", "#8B5CF6", "#6366F1"]

export function OrderStatusChart() {
  const total = 250;

  const chartData = statusConfig.filter(s => s.key !== 'all').map((s) => ({
    name: s.label,
    value: ORDER_STATUS[s.key as keyof typeof ORDER_STATUS],
  }))

  return (
    <CardSection leftTitle="Order Status" height="max-h-[416px] min-h-[416px]" rightActions={
      <>
        <RoundedSelect
          options={[
            { label: "All Categories", value: "all" },
          ]}
          placeholder="All Categories"
          onChange={(val) => console.log(val)}
        />

        <DateModePicker mode="year" />
      </>
    }>
      <div className="flex justify-between items-start">
        <div className="grid grid-cols-2 flex-1 pr-[20px]">
          {statusConfig.map((status, index) => (
            <div key={status.key} className={clsx("flex items-center gap-3 border-b py-[32px] px-[20px]", { "border-r": index % 2 === 0 })}>
              <div className="text-lg">{status.icon}</div>
              <div>
                <div className="text-sm text-text-primary">{status.label}</div>
                <div className="text-base text-lg font-semibold">
                  {ORDER_STATUS[status.key as keyof typeof ORDER_STATUS]}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative w-[242px] h-[242px] flex items-center justify-center m-auto">
          <PieChart width={242} height={242}>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={110}
              dataKey="value"
              labelLine={false}
              label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                const RADIAN = Math.PI / 180
                const radius = innerRadius + (outerRadius - innerRadius) / 2
                const x = cx + radius * Math.cos(-midAngle * RADIAN)
                const y = cy + radius * Math.sin(-midAngle * RADIAN)

                return (
                  <text
                    x={x}
                    y={y}
                    fill="#fff"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={12}
                    fontWeight="500"
                  >
                    {(percent * 100).toFixed(0)}%
                  </text>
                )
              }}
            >
              {chartData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>

          <div className="absolute text-text-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground text-[22px] font-bold">
            {total}
          </div>
        </div>

      </div>
    </CardSection>
  );
}
