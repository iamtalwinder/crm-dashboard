'use client'

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"
import clsx from "clsx"

export type TabConfig = {
  title: string
  value: string
  content: React.ReactNode
}

export function GenericTabs({
  tabs,
  defaultValue,
}: {
  tabs: TabConfig[]
  defaultValue?: string
}) {
  return (
    <Tabs defaultValue={defaultValue || tabs[0].value} className="w-full gap-0">
      <TabsList className="flex gap-[6px] bg-transparent p-[0px]">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className={clsx(
              "rounded-tl-[12px] rounded-tr-[12px] border border-border text-sm transition-all border-b-0 tab-button",
              "data-[state=inactive]:h-[36px] data-[state=inactive]:py-2 data-[state=inactive]:px-4 text-muted-foreground",
              "data-[state=active]:h-[40px] data-[state=active]:py-[10px] data-[state=active]:px-4 data-[state=active]:bg-foreground data-[state=active]:text-blue dark:data-[state=active]:text-blue",
              "focus:outline-none focus:ring-0 focus-visible:ring-0 shadow-none"
            )}
          >
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  )
}
