import { CardSection } from "@/components/shared";

export function OrderStatusChart() {
  return <CardSection
    leftTitle="Order Status"
    rightActions={
      <div>Add actions</div>
    }
  >
    <div>Order status</div>
  </CardSection>
}