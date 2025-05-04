import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type CardSectionProps = {
  leftTitle?: string;
  leftActions?: ReactNode;
  rightActions?: ReactNode;
  children: ReactNode;
  height?: string;
  className?: string;
};

export function CardSection({
  leftTitle,
  leftActions,
  rightActions,
  children,
  height = "min-h-[400px]",
  className,
}: CardSectionProps) {
  return (
    <Card className={cn("p-4 rounded-xl", height, className)}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {leftActions && <div>{leftActions}</div>}
          {leftTitle && (
            <h3 className="text-lg font-semibold text-text-primary">
              {leftTitle}
            </h3>
          )}
        </div>
        {rightActions && (
          <div className="flex items-center gap-2">{rightActions}</div>
        )}
      </div>
      <div className="-mx-4 h-px bg-muted" />
      <div>{children}</div>
    </Card>
  );
}
