"use client";

import CalenderIcon from "@/components/icons/calender";
import ChatIcon from "@/components/icons/chat-icon";
import EmailIcon from "@/components/icons/email-icon";
import PhoneIcon from "@/components/icons/phone-icon";

const actions = [
  { label: "Email", icon: EmailIcon },
  { label: "Call", icon: PhoneIcon },
  { label: "Message", icon: ChatIcon },
  { label: "Calendar", icon: CalenderIcon },
];

export function ActionGrid() {
  return (
    <div className="grid grid-cols-4 text-center bg-white dark:bg-background rounded-xl border divide-x py-4">
      {actions.map(({ label, icon: Icon }) => (
        <div
          key={label}
          className="flex flex-col items-center justify-center gap-1 hover:bg-muted transition"
        >
          <div className={`flex items-center justify-center rounded-full`}>
            <Icon />
          </div>
          <span className="text-sm text-text-primary">{label}</span>
        </div>
      ))}
    </div>
  );
}
