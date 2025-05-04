import {
  Users,
  Sparkles,
  Timer,
  Truck,
  CheckCircle,
  XCircle,
} from 'lucide-react';

import StatusCard from '@/components/shared/status-card';

const statusList = [
  { icon: Users, label: 'All', value: 50 },
  { icon: Sparkles, label: 'New', value: 50 },
  { icon: Timer, label: 'Pending', value: 50 },
  { icon: Truck, label: 'Dispatched', value: 50 },
  { icon: CheckCircle, label: 'Delivered', value: 123 },
  { icon: XCircle, label: 'Cancelled', value: 50 },
];

const StatusGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 divide-x divide-y rounded-md border border-muted overflow-hidden bg-white">
      {statusList.map((status, index) => (
        <StatusCard
          key={index}
          icon={status.icon}
          label={status.label}
          value={status.value}
        />
      ))}
    </div>
  );
};

export default StatusGrid;
