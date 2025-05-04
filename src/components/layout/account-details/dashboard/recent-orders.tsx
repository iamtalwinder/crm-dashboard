import { CardSection, DataTable } from "@/components/shared";
import { RECENT_ORDERS } from "@/data/orders";
import Image from 'next/image';
import { getChannelIcon } from "../helpers";
import { Button } from "@/components/ui/button";
import { RightArrowIcon } from "@/components/icons";

export type Order = {
  orderId: string
  quantity: number
  product: string
  productImage: string
  channel: string
  customer: {
    name: string
    avatar: string
  }
  total: number
}

export function RecentOrders() {
  return <CardSection
    leftTitle="Recent Orders"
  >
    <DataTable
      data={RECENT_ORDERS}
      columns={[
        { key: "orderId", label: "Order ID", width: "w-[15%]",
          render: (_, row) => (
            <div>
              <span>{row.orderId}</span>
              <span className="pl-[20px]">x{row.quantity}</span>
            </div>
          )},
        {
          key: "product",
          label: "Products",
          width: "w-[22%]",
          render: (_, row) => (
            <div className="flex items-center gap-3">
              <Image src={row.productImage} alt={row.product} className="w-6 h-6 rounded-sm" width={30} height={36} />
              <span className="truncate">{row.product}</span>
            </div>
          ),
        },
        {
          key: "channel",
          label: "Channel",
          width: "w-[12%]",
          render: (val) => (
            <span className="rounded text-xs font-medium">{getChannelIcon(val as string)}</span>
          ),
        },
        {
          key: "customer",
          label: "Customer",
          width: "w-[15%]",
          render: (_, row) => (
            <div className="flex items-center gap-2">
              <Image src={row.customer.avatar as string} alt={row.customer.name} className="w-6 h-6 rounded-full" width={24} height={24} />
              <span className="truncate">{row.customer.name}</span>
            </div>
          ),
        },
        {
          key: "total",
          label: "Total",
          align: "right",
          width: 'w-[10%]',
          render: (val) => `$${val}`,
        },
      ]}
    />

    <Button className="w-full rounded-t-none bg-background rounder-b-xl border-t text-blue">
      <span>View 256 more orders</span>
      <RightArrowIcon />
    </Button>
  </CardSection>
}
