import { TimelineGroup } from "@/components/layout/account-details/dashboard/recent-activities";

export const RECENT_ACTIVITIES: TimelineGroup[] = [
  {
    date: "Today",
    items: [
      {
        type: "message",
        actor: "Christian Wood",
        action: "Sent Message to",
        target: "Nikita Houston",
        time: "1 min ago",
        replies: [
          {
            actor: "Nikita Houston",
            action: "Replay your message",
            message: `"Hello"`,
            time: "1 min ago",
          },
        ],
      },
      {
        type: "order",
        actor: "Christian Wood",
        action: "Accept Order from",
        target: "Ebay",
        time: "1 min ago",
        replies: [
          {
            actor: "Rohan Walker",
            action: "Replay your message",
            target: "Ebay",
            time: "1 min ago",
          },
          {
            actor: "Rohan Walker",
            action: "Replay your message",
            target: "Ebay",
            time: "1 min ago",
          },
        ],
      },
    ],
  },
  {
    date: "Yesterday",
    items: [
      {
        type: "order",
        actor: "Christian Wood",
        action: "Accept Order from",
        target: "Amazon",
        time: "12:30PM",
      },
    ],
  },
  {
    date: "25 May 2024",
    items: [
      {
        type: "order",
        actor: "Christian Wood",
        action: "Accept Order from",
        target: "Walmart",
        time: "11:20AM",
      },
    ],
  },
]
