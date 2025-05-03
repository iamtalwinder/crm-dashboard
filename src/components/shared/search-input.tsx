'use client'

import { SearchIcon } from "../icons/search-icon"

export function SearchInput() {
  return (
    <div className="relative w-full">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4">
        <SearchIcon  />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="w-full pl-10 pr-4 py-2 border rounded-md bg-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  )
}
