import { ReactNode } from "react";

interface StatusCardProps {
  icon: ReactNode;
  label: string;
  value: number;
}

const StatusCard: React.FC<StatusCardProps> = ({
  icon,
  label,
  value,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-6 px-4 text-center space-y-1">
      {icon}
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-xl font-semibold text-foreground">{value}</span>
    </div>
  );
};

export default StatusCard;
