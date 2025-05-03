'use client'

import { KPICards } from "./kpi-cards"
import { OrderStatusChart } from "./order-status"
import { RecentActivities } from "./recent-activities"
import { RecentOrders } from "./recent-orders"
import { RecentTransactions } from "./recent-transactions"
import { RevenueChart } from "./revenue-chart"
import { TopProductsTable } from "./top-produt-table"

export function Dashboard() {
  return (

    <div className="w-full height-full bg-foreground border dark:border-input min-h-screen grid grid-cols-12 gap-6 p-4">
      <div className="col-span-12">
        <KPICards />
      </div>

      <div className="col-span-12 lg:col-span-6">
        <OrderStatusChart />
      </div>

      <div className="col-span-12 lg:col-span-6">
        <RecentActivities />
      </div>

      <div className="col-span-12 lg:col-span-6">
        <RecentOrders />
      </div>
      <div className="col-span-12 lg:col-span-6">
        <RecentTransactions />
      </div>

      <div className="col-span-12">
        <TopProductsTable />
      </div>

      <div className="col-span-12">
        <RevenueChart />
      </div>
    </div>
  )
}
