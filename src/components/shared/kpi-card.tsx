import { cn } from "@/lib/utils";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

type KpiCardProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend: "up" | "down";
  percentage: string;
  time: string;
};

export function KpiCard({
  title,
  value,
  icon,
  trend,
  percentage,
  time,
}: KpiCardProps) {
  const isDown = trend === "down";

  return (
    <div className="flex flex-col gap-4 p-4 border rounded-[16px] bg-card text-card-foreground">
      <div className="flex items-center gap-4">
        <div className="text-2xl">{icon}</div>
        <div>
          <div className="text-[12px] leading-[18px] font-medium text-[#0E253CD9]">
            {title}
          </div>
          <div className="text-2xl font-semibold text-[#0E253CD9]">{value}</div>
        </div>
      </div>

      <div className="-mx-4 h-px bg-[#0E253C1A]" />

      <div className="flex items-center justify-between text-xs">
        <span
          className={cn(
            "flex items-center gap-1 font-medium",
            isDown ? "text-red-500" : "text-green-500"
          )}
        >
          {isDown ? (
            <ArrowDownIcon className="h-4 w-4" />
          ) : (
            <ArrowUpIcon className="h-4 w-4" />
          )}
          {percentage}
        </span>
        <span className="font-medium text-[12px] leading-[18px] tracking-[0%] text-[#0E253CD9] font-inter">
          {time}
        </span>
      </div>
    </div>
  );
}
