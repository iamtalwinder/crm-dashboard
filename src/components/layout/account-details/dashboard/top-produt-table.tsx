import { CardSection } from "@/components/shared";

export function TopProductsTable() {
  return <CardSection
      leftTitle="Top Sold Products"
      rightActions={
        <div>Add actions</div>
      }
    >
      <div>Top Sold Products</div>
    </CardSection>
}