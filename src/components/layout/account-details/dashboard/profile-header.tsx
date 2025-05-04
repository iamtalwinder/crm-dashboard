import { Badge } from "@/components/ui/badge";
import { BUSINESS_DETAILS } from "@/data/business";

export function ProfileHeader() {
  return (
    <div className="flex items-center justify-between border rounded-[16px] p-4 bg-white">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="h-12 w-12 rounded-full bg-purple-500 flex flex-col items-center justify-center text-white font-bold text-sm relative">
            {BUSINESS_DETAILS.initial}
            <span className="text-[10px] font-normal mt-0.5 text-white">
              Edit
            </span>
          </div>
          <span className="absolute top-1 -right-1 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></span>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h2 className="text-primary font-semibold text-sm">
              {BUSINESS_DETAILS.name}
            </h2>
            <Badge
              variant="outline"
              className="text-xs bg-orange-10 text-[#E48D21] rounded-[99px] font-normal"
            >
              BUSINESS
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            {BUSINESS_DETAILS.email}
          </p>
        </div>
      </div>

      <a href="#" className="text-[#513CCE] text-sm self-start mt-1">
        Change Status
      </a>
    </div>
  );
}
