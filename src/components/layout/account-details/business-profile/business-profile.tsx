'use client'

import { Header } from "./header";
import { ActionGrid } from "./action-grid";
import { BusinessDetailsForm } from "./business-details-form";

export function BusinessProfile() {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <ActionGrid />
      <BusinessDetailsForm />
    </div>
  );
}
