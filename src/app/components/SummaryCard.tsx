import { LucideIcon } from 'lucide-react';

interface SummaryCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

const SummaryCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  iconColor = 'text-green-600',
  bgColor = 'bg-white',
}: SummaryCardProps) => {
  return (
    <div className={`${bgColor} rounded-lg shadow-sm border border-gray-200 p-6`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <div className={`${iconColor} bg-opacity-10 p-3 rounded-lg`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
