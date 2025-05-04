import { RightArrowIcon } from "@/components/icons";
import { CardSection, DataTable } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { RECENT_TRANSACTIONS } from "@/data/transactions";
import Image from 'next/image';
import { getChannelIcon } from "../helpers";

export function RecentTransactions() {
  return <CardSection
    leftTitle="Recent Transactions"
  >
    <DataTable
      data={RECENT_TRANSACTIONS}
      columns={[
        {
          key: "id",
          label: "Transaction ID",
          width: "w-[20%]",
          render: (_, row) => <span className="truncate">{row.id}</span>,
        },
        {
          key: "product",
          label: "Products",
          width: "w-[30%]",
          render: (_, row) => (
            <div className="flex items-center gap-2">
              <Image src={row.productImage} alt={row.product} width={24} height={24} className="w-6 h-6 rounded-sm" />
              <span className="truncate">{row.product}</span>
            </div>
          ),
        },
        {
          key: "channel",
          label: "Channel",
          width: "w-[15%]",
          render: (val) => (
            <span className="text-xs font-medium rounded">
              {getChannelIcon(val as string)}
            </span>
          ),
        },
        {
          key: "customer",
          label: "Customer",
          width: "w-[20%]",
          render: (_, row) => (
            <div className="flex items-center gap-2">
              <Image src={row.customer.avatar} alt={row.customer.name} width={24} height={24} className="w-6 h-6 rounded-full" />
              <span className="truncate">{row.customer.name}</span>
            </div>
          ),
        },
        {
          key: "total",
          label: "Total",
          align: "right",
          width: "w-[15%]",
          render: (val) => `$ ${val}`,
        },
      ]}
      
    />

    <Button className="w-full rounded-t-none bg-background rounder-b-xl border-t text-blue">
      <span>View 256 more transactions</span>
      <RightArrowIcon />
    </Button>
  </CardSection>
}