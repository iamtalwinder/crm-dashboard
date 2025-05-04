'use client'

import { useState } from "react"
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"

type DateMode = "month" | "year"

type DateModePickerProps = {
  mode?: DateMode
  value?: Date
  onChange?: (date: Date) => void
  startYear?: number
  endYear?: number
}

export function DateModePicker({
  mode = "month",
  value,
  onChange,
  startYear = 2010,
  endYear = new Date().getFullYear() + 5,
}: DateModePickerProps) {
  const now = new Date()
  const [selected, setSelected] = useState(value || now)
  const [year, setYear] = useState(selected.getFullYear())

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ]

  const handleMonthSelect = (monthIndex: number) => {
    const newDate = new Date(year, monthIndex)
    setSelected(newDate)
    onChange?.(newDate)
  }

  const handleYearSelect = (y: number) => {
    const newDate = new Date(y, 0)
    setSelected(newDate)
    setYear(y)
    onChange?.(newDate)
  }

  const formatted =
    mode === "year" ? format(selected, "yyyy") : format(selected, "MMM yyyy")

  const yearGrid = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i)

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="rounded-[12px] px-4 py-2 h-9 text-sm font-medium text-text-primary font-semibold flex items-center gap-2 bg-foreground"
        >
          {formatted}
          <CalendarIcon className="w-4 h-4 opacity-70" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[220px] p-4">
        {mode === "month" ? (
          <>
            <div className="flex items-center justify-between mb-2">
              <Button variant="ghost" size="icon" onClick={() => setYear(y => y - 1)}>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <span className="text-sm font-medium">{year}</span>
              <Button variant="ghost" size="icon" onClick={() => setYear(y => y + 1)}>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {months.map((month, i) => (
                <Button
                  key={month}
                  variant={
                    selected.getFullYear() === year && selected.getMonth() === i
                      ? "default"
                      : "outline"
                  }
                  onClick={() => handleMonthSelect(i)}
                  className="text-sm"
                >
                  {month}
                </Button>
              ))}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-3 gap-2 max-h-[180px] overflow-y-auto">
            {yearGrid.map(y => (
              <Button
                key={y}
                variant={selected.getFullYear() === y ? "default" : "outline"}
                onClick={() => handleYearSelect(y)}
                className="text-sm"
              >
                {y}
              </Button>
            ))}
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}
