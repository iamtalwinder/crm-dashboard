import React from 'react';
import StatusCard from '@/components/shared/status-card';
import ClassifyIcon from '@/components/icons/classify-icon';
import CelebrateIcon from '@/components/icons/celebrate-icon';
import CertificateIcon from '@/components/icons/certificate-icon';
import HistoryIcon from '@/components/icons/history-icon';
import TimerIcon from '@/components/icons/timer-icon';
import TruckIcon from '@/components/icons/truck-icon';

const statusList = [
  { icon: <ClassifyIcon />, label: 'All', value: 50 },
  { icon: <CelebrateIcon />, label: 'New', value: 50 },
  { icon: <TimerIcon />, label: 'Pending', value: 50 },
  { icon: <TruckIcon />, label: 'Dispatched', value: 50 },
  { icon: <CertificateIcon />, label: 'Delivered', value: 123 },
  { icon: <HistoryIcon />, label: 'Cancelled', value: 50 },
];

const StatusGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 divide-x divide-y rounded-md border-muted overflow-hidden bg-white">
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
