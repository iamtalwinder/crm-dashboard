import { GenericTabs, TabConfig } from "@/components/shared"
import { Dashboard } from "./dashboard"
import { EmptyScreen } from "./empty-screen"
import { BusinessProfile } from "./business-profile"

const tabs: TabConfig[] = [
  {
    title: "Dashboard",
    value: "dashboard",
    content: <Dashboard />,
  },
  {
    title: "Orders",
    value: "orders",
    content: <EmptyScreen />,
  },
  {
    title: "Address",
    value: "address",
    content: <EmptyScreen />,
  },
  {
    title: "Notes",
    value: "notes",
    content: <EmptyScreen />,
  },
  {
    title: "Tasks",
    value: "tasks",
    content: <EmptyScreen />,
  },
  {
    title: "Contacts",
    value: "contacts",
    content: <EmptyScreen />,
  },
  {
    title: "Credit History",
    value: "Credit History",
    content: <EmptyScreen />,
  },
]

export function AccountDetail() {
  return (
    <main className="p-6">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-3">
          <BusinessProfile />
        </div>

        <div className="col-span-12 lg:col-span-9">
          <GenericTabs tabs={tabs} />
        </div>
      </div>
    </main>
  )
}
