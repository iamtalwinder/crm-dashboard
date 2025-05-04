'use client'

import { RECENT_ACTIVITIES } from "@/data/recent-activities"
import clsx from "clsx"
import { ReplyIcon, TimelineIcon } from "../icons"

function getActivityIcon(type: string, target?: string) {
  if (target === 'Amazon' && type === 'order') {
    return <TimelineIcon fill="#8E57E1" />
  }

  if (target === 'Ebay' && type === 'order') {
    return <TimelineIcon fill="#D56574" />
  }

  if (target === 'Walmart' && type === 'order') {
    return <TimelineIcon fill="#37A7DA" />
  }

  if (type === 'message') {
    return <TimelineIcon fill="#E48D21" />;
  }

  if (type === 'reply') {
    return <ReplyIcon />
  }
}

export function Timeline() {
  return (
    <div className="space-y-6">
      {RECENT_ACTIVITIES.map((group) => (
        <div key={group.date}>
          <h4 className="text-xs font-semibold text-text-primary uppercase mb-3">
            {group.date}
          </h4>

          <ul className="space-y-4">
            {group.items.map((item, index) => (
              <li key={index}>
                <div className="flex gap-3 items-start">
                  <div className="mt-1">{getActivityIcon(item.type, item.target)}</div>
                  <div className="text-sm text-text-primary leading-relaxed self-center">
                    <span className="text-blue font-medium">{item.actor}</span>{" "}
                    {item.action}{" "}
                    {item.target && <span className="text-blue font-medium">{item.target}</span>}
                    {item.message && <span className="text-text-primary"> {item.message}</span>}
                    <span className="ml-2 text-xs text-muted-foreground">• {item.time}</span>
                  </div>
                </div>

                {item.replies && item.replies?.length > 0 && (
                  <ul className="ml-[10px] mt-2 border-muted space-y-3">
                    {item.replies?.map((reply, i) => (
                      <li key={i} className={clsx("flex gap-3 items-start pl-10", {"border-l": index !== group.items.length - 1})}>
                        <div className="mt-1">{getActivityIcon("reply")}</div>
                        <div className="text-sm text-text-primary leading-relaxed self-center">
                          <span className="text-blue font-medium">{reply.actor}</span>{" "}
                          {reply.action}{" "}
                          {reply.target && <span className="text-blue font-medium">{reply.target}</span>}
                          {reply.message && <span className="text-blue font-medium"> {reply.message}</span>}
                          <span className="ml-2 text-xs text-muted-foreground">&bull; {reply.time}</span>
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
