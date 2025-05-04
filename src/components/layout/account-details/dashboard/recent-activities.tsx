import { CardSection, PillToggle, Timeline } from "@/components/shared";
import { RECENT_ACTIVITIES_OPTIONS } from "../../constants";

export type Reply = {
  actor: string
  action: string
  target?: string
  message?: string
  time: string
}

export type ActivityItem = {
  type: "message" | "order" | "reply"
  actor: string
  action: string
  target?: string
  message?: string
  time: string
  replies?: Reply[]
}

export type TimelineGroup = {
  date: string
  items: ActivityItem[]
}

export function RecentActivities() {
  return <CardSection
    leftTitle="Recent Activities"
    height="max-h-[416px] min-h-[416px]"
    rightActions={
      <PillToggle options={RECENT_ACTIVITIES_OPTIONS} />
    }
    contentContainerClassName="overflow-auto"
  >
    <div className="p-4">
      <Timeline />
    </div>
  </CardSection>
}