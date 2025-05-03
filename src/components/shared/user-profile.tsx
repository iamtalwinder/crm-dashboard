import { ADMIN_USER } from "@/data/admin"
import { ChevronDown } from "lucide-react"

export function UserProfile() {
  return (
    <div className="flex items-center space-x-3 p-2 rounded-md cursor-pointer transition">
      <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold">
        {ADMIN_USER.initial}
      </div>

      <div className="text-left">
        <div className="text-sm font-semibold leading-none text-text-primary">
        {ADMIN_USER.name}
        </div>
        <div className="text-xs text-text-primary">{ADMIN_USER.type}</div>
      </div>

      <ChevronDown className="w-4 h-4 text-text-primary" />
    </div>
  )
}
