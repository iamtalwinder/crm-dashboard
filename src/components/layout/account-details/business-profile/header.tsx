'use client'

import { Badge } from "@/components/ui/badge";
import { BUSINESS_PROFILE_MOCK } from "@/data/business";

export function Header() {
  return (
    <div className="flex justify-between items-center p-4 rounded-xl border bg-foreground">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="flex flex-col bg-blue text-white w-12 h-12 rounded-full flex items-center justify-center font-semibold text-sm">
            <span className="pt-[5px]">
              {BUSINESS_PROFILE_MOCK.avatar.initials}
            </span>

            <div className="bg-white/45 text-center rounded-b-full w-full h-full text-[10px] rounded text-white font-bold pt-[2px]">
              Edit
            </div>
          </div>
          <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />

        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-text-primary">{BUSINESS_PROFILE_MOCK.name}</span>
            {BUSINESS_PROFILE_MOCK.avatar.tag && (
              <Badge variant="secondary" className="bg-orange-100 text-orange-600 text-xs px-2 rounded-full">
                {BUSINESS_PROFILE_MOCK.avatar.tag}
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{BUSINESS_PROFILE_MOCK.email}</p>
        </div>
      </div>

      <button className="text-sm text-blue font-medium hover:underline self-baseline">
        Change Status
      </button>
    </div>
  );
}
