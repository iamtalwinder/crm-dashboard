import { CardSection, DateModePicker } from "@/components/shared";

export function TopProductsTable() {
  return <CardSection
      leftTitle="Top Sold Products"
      rightActions={
        <>
          <DateModePicker mode="month" />
        </>
      }
    >
      <div>Top Sold Products</div>
    </CardSection>
}