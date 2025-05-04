import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type RoundedSelectProps = {
  options: { label: React.ReactNode; value: string }[];
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
};

export function RoundedSelect({
  options,
  value,
  placeholder = "Select...",
  onChange,
  className,
}: RoundedSelectProps) {
  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger
        className={cn(
          "h-9 px-4 py-2 rounded-[12px] bg-foreground border text-sm font-medium",
          className
        )}
      >
        {selectedOption ? (
          <div className="flex items-center gap-1">{selectedOption.label}</div>
        ) : (
          <SelectValue placeholder={placeholder} />
        )}
      </SelectTrigger>
      <SelectContent side="bottom">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
