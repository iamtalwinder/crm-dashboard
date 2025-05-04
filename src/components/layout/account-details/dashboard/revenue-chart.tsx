import { DateModePicker, PillToggle, RoundedSelect } from "@/components/shared";
import { CardSection } from "@/components/shared/card-sections";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from "recharts";
import { REVENUE_DATA_2025 } from "@/data/revenue";
import { REVENUE_OPTIONS } from "../../constants";

export function RevenueChart() {
  const totalRevenue = REVENUE_DATA_2025.reduce((sum, item) => sum + item.revenue, 0).toFixed(2);

  return <CardSection
    leftActions={
      <PillToggle options={REVENUE_OPTIONS} />
    }
    rightActions={
      <>
        <RoundedSelect
          options={[
            { label: "All Categories", value: "all" },
          ]}
          placeholder="All Categories"
          onChange={(val) => console.log(val)}
        />
        <DateModePicker mode="month" />
      </>
    }
  >
    <div className="bg-background px-2 py-4 max-h-[420px]">
      <div className="flex w-full justify-between mb-8">
        <div className="font-semibold text-lg">Revenue</div>
        <div className="text-muted-foreground text-sm pt-4">
          Total Revenue: <span className="font-bold text-text-primary">${totalRevenue}</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={275}>
        <BarChart data={REVENUE_DATA_2025} >
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(v) => `$${v.toFixed(0)}`} />
          <Tooltip formatter={(value) => `$${value}`} />
          <Bar dataKey="revenue" fill="#5b3cc4" radius={[4, 4, 0, 0]} barSize={20} background={false}>
            <LabelList dataKey="revenue" position="top" formatter={(val) => `$${val.toFixed(0)}`} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <p className="text-center text-xs text-muted-foreground mt-4">&bull; 2025</p>
    </div>
  </CardSection>
}