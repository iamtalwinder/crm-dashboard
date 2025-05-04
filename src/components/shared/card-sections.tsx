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
  contentContainerClassName?: string;
};

export function CardSection({
  leftTitle,
  leftActions,
  rightActions,
  children,
  height = "min-h-[400px]",
  className,
  contentContainerClassName
}: CardSectionProps) {
  return (
    <Card className={cn("rounded-xl p-0 gap-0", height, className)}>
      <div className="flex items-center justify-between rounded-t-xl border-b bg-background p-4">
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
      <div className={contentContainerClassName}>{children}</div>
    </Card>
  );
}
