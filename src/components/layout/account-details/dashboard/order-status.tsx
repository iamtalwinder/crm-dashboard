import { CardSection } from "@/components/shared";
import StatusGrid from "./status-grid";

export function OrderStatusChart() {
  return (
    <CardSection leftTitle="Order Status" rightActions={<div>Add actions</div>}>
      <StatusGrid />
    </CardSection>
  );
}
