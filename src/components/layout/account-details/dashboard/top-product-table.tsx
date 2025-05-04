import { CardSection, DataTable, DateModePicker } from "@/components/shared";
import { PRODUCT_STATS } from "@/data/products";
import Image from 'next/image';

export function TopProductsTable() {
  return <CardSection
    leftTitle="Top Sold Products"
    rightActions={
      <>
        <DateModePicker mode="month" />
      </>
    }
  >
    <DataTable
      data={PRODUCT_STATS}
      columns={[
        {
          key: "product",
          label: "Products",
          width: "w-[30%]",
          render: (_, row) => (
            <div className="flex items-center gap-2">
              <Image src={row.image} alt={row.product} width={24} height={24} className="w-6 h-6 rounded-sm" />
              <span className="truncate">{row.product}</span>
            </div>
          ),
        },
        {
          key: "sells",
          label: "Sells",
          width: "w-[10%]",
          render: (val) => <span>{val}</span>,
        },
        {
          key: "date",
          label: "Date",
          width: "w-[20%]",
          render: (val) => <span>{val}</span>,
        },
        {
          key: "price",
          label: "Price",
          width: "w-[15%]",
          render: (val) => `$ ${val}`,
        },
        {
          key: "revenue",
          label: "Total Revenue",
          width: "w-[20%]",
          render: (val) => `$ ${val.toLocaleString(undefined, { minimumFractionDigits: 2 })}`,
        },
      ]}

    />
  </CardSection>
}