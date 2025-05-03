'use client'

import { SearchInput, PillToggle, UserProfile } from "@/components/shared"
import { BellIcon, CodeIcon } from "@/components/icons"
import Image from "next/image"
import { useResolvedTheme } from "@/lib/hooks"
import { TIME_TOGGLE_OPTIONS } from "./constants"

export function Header() {
  const {isDarkTheme} = useResolvedTheme();

  return (
    <header>

      <div className="flex items-center justify-between w-full h-16 px-4 border-b bg-foreground">
        <div className="flex items-center gap-[100px]">
          <Image alt='company logo' src={isDarkTheme ? `/company-logo-dark.svg` : `/company-logo-light.svg`} width={125} height={32} />
          <CodeIcon />
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
