import { DateModePicker, PillToggle } from "@/components/shared";
import { CardSection } from "@/components/shared/card-sections";
import { REVENUE_OPTIONS } from "../../constants";

export function RevenueChart() {
  return <CardSection
    leftActions={
      <PillToggle options={REVENUE_OPTIONS} />
    }
    rightActions={
      <>
        <DateModePicker mode="month" />
      </>
    }
  >
    <div>revenue</div>
  </CardSection>
}