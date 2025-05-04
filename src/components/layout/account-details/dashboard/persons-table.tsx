import { DataTable, DateModePicker } from "@/components/shared";
import { CardSection } from "@/components/shared/card-sections";
import { PERSONS } from "@/data/user";

export function PersonsTable() {
  return <CardSection
    leftTitle="Persons"
    rightActions={
      <>
        <DateModePicker mode="month" />
      </>
    }
  >
    <div className="max-h-[420px]">
      <DataTable
        data={PERSONS}
        columns={[
          {
            key: "name",
            label: "Name",
            width: "w-[25%]",
            render: (val) => <span className="truncate">{val}</span>,
          },
          {
            key: "email",
            label: "Email",
            width: "w-[30%]",
            render: (val) => <span className="truncate">{val}</span>,
          },
          {
            key: "contact",
            label: "Contact Number",
            width: "w-[25%]",
            render: (val) => <span>{val}</span>,
          },
          {
            key: "role",
            label: "Role",
            width: "w-[20%]",
            render: (val) => <span className="capitalize">{val}</span>,
          },
        ]}

      />
    </div>
  </CardSection>
}