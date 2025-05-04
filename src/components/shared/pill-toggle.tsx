'use client'

import { useState } from "react"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import clsx from "clsx"

export type PillToggleProps = {
  options: string[];
  toggleGroupClass?: string;
}

export function PillToggle({options, toggleGroupClass}: PillToggleProps) {
  const [value, setValue] = useState(options[0])

  return (
    <ToggleGroup
      type="single"
      value={value}
      onValueChange={(val) => {
        if (val) setValue(val)
      }}
      className="bg-background rounded-xl border"
    >
      {options.map((label) => (
        <ToggleGroupItem
          key={label}
          value={label}
          aria-label="Pill toggle"
          className={clsx("!rounded-xl px-[16px] py-[8px] gap-[12px] text-md text-text-primary data-[state=on]:border data-[state=on]:bg-toggle-background data-[state=on]:text-text-primary", toggleGroupClass)}
        >
          {label}
        </ToggleGroupItem>
      ))}


    </ToggleGroup>
  )
}
