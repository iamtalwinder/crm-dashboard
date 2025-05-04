import { DateModePicker } from "@/components/shared";
import { CardSection } from "@/components/shared/card-sections";

export function PersonsTable() {
  return <CardSection
    leftTitle="Persons"
    rightActions={
      <>
        <DateModePicker mode="month" />
      </>
    }
  >
    <div>persons</div>
  </CardSection>
}