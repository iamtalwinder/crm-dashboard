import React from "react";
import { useResolvedTheme } from "@/lib/hooks";

const EmailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
        xlinkHref="data:image/png;bas e64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAM1JREFUOE+11P0NgjAUBPC7DRzBTdRNZBIdwQ1kE3UD3QA3YIMnR6gppoUWS/8hIX2/3OsXUXiwsId1QTM7Adhmpn6TPLuaPqGZbUi2ZibsloE2AA4kG9Xq68BjB+1IVhmoj107+EGy9kH9rBPRX0yBqhCoFZhDQ5jqouAUGsNmwRCqf24DtDxq0x+TCd1Ev30MuxnCkhKO0OF4xbAsUJOfAFoA+4lDn9RyzqVZF1QrunL/DJ2A+/e1MbP++i0UXyQvql33+VqYblRWPOEHPf6UFbIxwBoAAAAASUVORK5CYII="
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
      {...props}
    >
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAQRJREFUOE+11E0OwUAUB/D/k0gskB5hFiSOIEjUTeokHMENuAkSxJK1SuoGTVk0xDyZRn1Uy1Ta2TSTzPvl/zofhIwHZewhX7Ba6wyYWKRJTUwHz14Mw5ogoSFMw3VmrtFoCnktTgFdlJ3z5drznbVTEk2hvgFYqbcsgLrH3bKvjz6xar09Zsnz4341eYCEwpjBEz30HQPIYin7H6BK+xv9xIK6JPA7Go/9BONRiXAD1D9Tbb6ehq8Jw4Wv7fs+oHYxDtNKGEXVPAlLBd7hDQMuAWbSoddqOc2NyRcs1zpmgTBNkyi6VjJ6J3sxe7w24fX7ByXG1rOXI1Wb7/P1T7poTeYJbzIh8BWEVy7MAAAAAElFTkSuQmCC"
        x="0"
        y="0"
        width="20"
        height="20"
      />
    </svg>
  );
};

export default EmailIcon;
