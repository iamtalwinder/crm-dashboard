'use client'

import { SearchInput, PillToggle, UserProfile } from "@/components/shared"
import { BellIcon, Logo } from "@/components/icons"
import { TIME_TOGGLE_OPTIONS } from "./constants"

export function Header() {

  return (
    <header>

      <div className="flex items-center justify-between w-full h-16 px-4 border-b bg-foreground">
        <div className="flex items-center gap-[100px]">
          <Logo />
        </div>

        <div className="flex w-[600px]">
          <SearchInput />
        </div>

        <div className="flex items-center gap-[16px]">
          <BellIcon />
          <UserProfile />
        </div>
      </div>

      <div className="flex items-center justify-between w-full h-16 px-4 border-b bg-foreground">

        <nav className="text-sm text-text-primary">
          <span className="text-text-primary">CRM / Account / </span>
          <span className="text-text-primary font-semibold">Account Details</span>
        </nav>

        <PillToggle options={TIME_TOGGLE_OPTIONS}/>
      </div>

    </header>
  )
}
