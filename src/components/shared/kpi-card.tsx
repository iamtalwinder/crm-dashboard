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
    <div className="flex flex-col border rounded-[16px] bg-card text-card-foreground">
      <div className="flex items-center gap-4 bg-background p-4 border-b rounded-t-[16px]">
        <div className="text-2xl">{icon}</div>
        <div>
          <div className="text-[12px] leading-[18px] font-medium text-text-primary">
            {title}
          </div>
          <div className="text-2xl font-semibold text-text-primary">{value}</div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs bg-foreground p-4 rounded-[16px]">
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
        <span className="font-medium text-[12px] leading-[18px] tracking-[0%] text-text-primary font-inter">
          {time}
        </span>
      </div>
    </div>
  );
}
