import { PillToggle } from "@/components/shared";
import { CardSection } from "@/components/shared/card-sections";
import { REVENUE_OPTIONS } from "../../constants";

export function RevenueChart() {
  return <CardSection
    leftActions={
      <PillToggle options={REVENUE_OPTIONS} />
    }
    rightActions={
      <div>Add actions</div>
    }
  >
    <div>revenue</div>
  </CardSection>
}