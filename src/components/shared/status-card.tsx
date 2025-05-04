import { LucideIcon } from "lucide-react";

interface StatusCardProps {
  icon: LucideIcon;
  label: string;
  value: number;
}

const StatusCard: React.FC<StatusCardProps> = ({
  icon: Icon,
  label,
  value,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-6 px-4 text-center space-y-1">
      <Icon className="w-6 h-6 text-indigo-500" />
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-xl font-semibold text-foreground">{value}</span>
    </div>
  );
};

export default StatusCard;
