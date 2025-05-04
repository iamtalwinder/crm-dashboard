'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { BUSINESS_PROFILE_MOCK } from '@/data/business'
import { PlusIcon, RefreshCwIcon } from 'lucide-react'
import { RoundedSelect } from '@/components/shared'
import { SaveIcon } from '@/components/icons'

const ownerOptions = [
  { label: "suchithkumar@onechanneladmin.com", value: "suchithkumar@onechanneladmin.com" },
]

const companyOptions = [
  { label: "Partner", value: "Partner" },
  { label: "Client", value: "Client" },
]
const industryOptions = [
  { label: "Accounting", value: "Accounting" },
  { label: "Retail", value: "Retail" },
]

export function BusinessDetailsForm() {
  return (
    <div className="p-4 bg-foreground rounded-xl border flex flex-col gap-4 text-text-primary">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Business Details</h2>
        <button className="text-sm text-green-600 font-semibold flex items-center gap-1">
          <SaveIcon />
          Save & Close
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Account Name</label>
        <Input value={BUSINESS_PROFILE_MOCK.name} />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Email</label>
        <Input value={BUSINESS_PROFILE_MOCK.email} />
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">Phone Number</span>
        <button
          className="text-primary text-xl"
        >
          +
        </button>
      </div>

      {BUSINESS_PROFILE_MOCK.phoneNumbers.map((phone, index) => (
        <div className="flex items-center gap-2" key={index}>
          <RoundedSelect
            options={[{ label: "US", value: "US" }, { label: "IN", value: "IN" }]}
            value={phone.country}
            className="w-[80px]"
          />
          <Input
            value={phone.number}
            className="flex-1"
          />
          <Button
            variant="destructive"
            size="sm"
            className='bg-foreground dark:bg-foreground text-destructive border border-destructive hover:bg-foreground'
          >
            Remove
          </Button>
        </div>
      ))}

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Contact Owner</label>
        <RoundedSelect
          value={BUSINESS_PROFILE_MOCK.contactOwner}
          options={ownerOptions}
          className='w-full'
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Company Type</label>
        <RoundedSelect
          value={BUSINESS_PROFILE_MOCK.companyType}
          options={companyOptions}
          className='w-full'
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Industry</label>
        <RoundedSelect
          value={BUSINESS_PROFILE_MOCK.industry}
          options={industryOptions}
          className='w-full'
        />
      </div>


      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Website</label>
        <Input value={BUSINESS_PROFILE_MOCK.website.toUpperCase()} />
      </div>


      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">No. of Employee</label>
        <Input
          type="number"
          value={Number(BUSINESS_PROFILE_MOCK.employeeCount)}
          className="rounded-[12px] h-9 px-4 text-sm font-medium"
        />
      </div>


      <div className="text-sm mt-2 flex flex-col gap-3">
        <div>
          <span className="block font-medium">CREDIT LIMIT</span>
          <div className="flex justify-between items-center">
            <span className="text-base font-semibold">${BUSINESS_PROFILE_MOCK.creditLimit}</span>
            <button className="text-primary text-xl"><PlusIcon size={16} /></button>
          </div>
        </div>
        <div>
          <span className="block font-medium">AVAILABLE CREDIT</span>
          <div className="flex justify-between items-center">
            <span className="text-base font-semibold">${BUSINESS_PROFILE_MOCK.availableCredit}</span>
            <button className="text-primary"><RefreshCwIcon size={16} /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
