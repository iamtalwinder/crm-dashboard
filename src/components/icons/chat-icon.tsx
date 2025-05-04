import React from "react";
import { useResolvedTheme } from "@/lib/hooks";

export default function ChatIcon() {
  const { isDarkTheme } = useResolvedTheme();

  return isDarkTheme ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAATpJREFUOE+tlIFNwzAQRf/fADZoN4AN6AZlAugEwAZ0AtoJyAbQCegGdAM6Qjc48q04urh2kgZOimzJ9sv5330T/xwc4pnZDQB9JwBHkoe+M1mgmV0BeKohzwA093EEsAewJql5J86AZnYH4CMDSs8K9kLy0y90gGa2bGBDSvj1BUllHKIFmtkMwBcAjZeEtJ2T1NgBVgAeLiG5vdLzNQX+TMguMk8kr1tg0xrfmWquCxm/ZYp2q5YKGhaKsSe5yAHNTD9Xb/pYkawi8BHA+0T94rElyd0QUIWKof7s64DOlXMZ7mpN1JchCjrHZVly7otSurJcEPqr0SzVLQIrkqsxwDGyyoJyS/D1kIZjgPfez38BSgrBWh/7DPVEySnpU5XLUKBtvXcT/es3pY+DRO+DHiY9sGOEK+35BfzDchV+m8zdAAAAAElFTkSuQmCC"
        x="0"
        y="0"
        width="20"
        height="20"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAZlJREFUOE+tlF9OwkAQxr9dwBeV1BtAsImP+GYUErhBOYFyAvUGcgL1BHID4QSSUIhv8mwh9AhNq4mxdMeU0tKWChXct83O/Hbmmz8M/3zYJt6+fF7mQBkiYwju6J/acLTOJxEoFWqS2Jtdg3ADQIoCSCegZ9tO60t/1ePwFeDBcaXGGZ5XQXFX0knwW2vS74RfIkCpVFUEJxeW+ghC/WOs9nyHACidnBWEk3sBqJCa5hka3M4WDb1nuJcAmJcv2gC7/CPMMye0zLF6FwNWp1tE5/9vmJp6FADd1siAv61Wk1pJETPw+3jROMSpoQ1H85QPS1WFxYrhtoalqfUkYF6uuJ+Xw28kRNOaDNseUD6/YuBPW+m3cCJiijXud9cCCdRetgOvrdM4mnJShIy65vtA8YHJOvuvpJvaoBgU5beUiaEDokV/MVeziG4BDtS2tEFzIzCdpqR/207dn+udi8IFaxihed4FaAhCIzzHQcrzdZWbTTdvGG92QXjks+yDP79haSLLwbFzZXAntv+W5gIYbbVg0xUj2eoHv1yvFboHXJUAAAAASUVORK5CYII="
        x="0"
        y="0"
        width="20"
        height="20"
      />
    </svg>
  );
}
