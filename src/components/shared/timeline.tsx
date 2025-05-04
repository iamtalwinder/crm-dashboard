'use client'

import { RECENT_ACTIVITIES } from "@/data/recent-activities"
import { BellIcon } from "../icons"

function getActivityIcon(type: string) {
  switch (type) {
    case 'message':
      return <BellIcon />;
    case 'order':
      return <BellIcon />;
    case 'reply':
      return <BellIcon />;

  }
}

export function Timeline() {
  return (
    <div className="space-y-6">
      {RECENT_ACTIVITIES.map((group) => (
        <div key={group.date}>
          <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-3">
            {group.date}
          </h4>

          <ul className="space-y-4">
            {group.items.map((item, index) => (
              <li key={index}>
                <div className="flex gap-3 items-start">
                  <div className="mt-1">{getActivityIcon(item.type)}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    <span className="text-foreground font-medium">{item.actor}</span>{" "}
                    {item.action}{" "}
                    {item.target && <span className="text-blue-500 font-medium">{item.target}</span>}
                    {item.message && <span className="text-blue-400"> {item.message}</span>}
                    <span className="ml-2 text-xs text-muted-foreground">• {item.time}</span>
                  </div>
                </div>

                {item.replies && item.replies?.length > 0 && (
                  <ul className="ml-8 mt-2 border-l border-muted pl-4 space-y-3">
                    {item.replies?.map((reply, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <div className="mt-1">{getActivityIcon("reply")}</div>
                        <div className="text-sm text-muted-foreground leading-relaxed">
                          <span className="text-foreground font-medium">{reply.actor}</span>{" "}
                          {reply.action}{" "}
                          {reply.target && <span className="text-blue-500 font-medium">{reply.target}</span>}
                          {reply.message && <span className="text-blue-400"> {reply.message}</span>}
                          <span className="ml-2 text-xs text-muted-foreground">• {reply.time}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
