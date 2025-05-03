import { CardSection, PillToggle } from "@/components/shared";
import { RECENT_ACTIVITIES_OPTIONS } from "../../constants";

export function RecentActivities() {
  return <CardSection
    leftTitle="Recent Activities"
    rightActions={
      <PillToggle options={RECENT_ACTIVITIES_OPTIONS} />
    }
  >
    <div>Recent activities</div>
  </CardSection>
}