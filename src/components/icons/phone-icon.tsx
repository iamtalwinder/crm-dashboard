// components/icons/PhoneIcon.tsx

import React from "react";
import { useResolvedTheme } from "@/lib/hooks";

const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAYJJREFUOE+tlIFNAkEQRf/vQDvQCpQKlA6kAqUCsQKhAu1ArEA6ECrQDqQDsYKRd9k1e8tdQOMkhORu7838P//O+udyzYuII0lHttd/6dUCRsTtFvYoabP9TWw/l9DUbCLpQ9Kqq+kPMCLutw9Pq6mGtpf5WkScS3orzkxtz8pnGmBEnKSutUpkD2wzcVMJyvkHSfzf2UZVUxl4Jemlx7OF7VGCXUp6ksTUTMYzQE9z0wzEFzp21cb2caEEIGCmWiXo2Pb8kAmRyuFFtZxXSfg5SFbNbDf+5wmJymc1Hv6xlJ34JM8vSEFEYNeyJTnJoStScjEdC/lVHsvYAANaFp2HPd52Xq6DzdaQUNbc9jhfSBJZDL7iXUtBDcRLgksUynqX1EQnqcj3gY1sc7+prneZ7SEdeFl4yq9u1krCDhBCehu6oH12Am3C3QksoPlNOGQvANe9wARFHoG93kNsB3tf+4ggUjc94N2Pwz5gERkWxdLOtl+ZL6JTfok6t3wovO/cN66ymRWF5beaAAAAAElFTkSuQmCC"
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAhFJREFUOE+tlF9u2kAQxr9dmyhSC3Jv4Ch/2rfCW9US1dwATtBygpITFE6Q3ID0BHADSOtEfUteC0TxDbrFrYRs7061Jia2YxJSdR93d34z8823y/CfF8vzLNuxFlhYC++79y+5MsDKy/onKJwAEMR4x598/ZKG6mTKjDrE+U0YBGdFSVfAykH9MwjdNEARGr9n7jjZe7b/tmqAX67uMHTnE7eXjomB1qs3tpLmzf0WyeNhqSa8sUhDuTJsxnEMkA1OR/Mf57qreMXA8u5hk3EaFGlGDEN/4rb02fO9usMZ6xPU2DBkT0lTx9g8NHeSpDGwsveuA8aO1wxBzKfui6QTGZl9xuAA7IQUznQhpFTbv7443aRCwRVri+tvw3Sy8n59xIAqN6JaLBWhN5+5sf5LDfX0StHPbIXkBaFsFE1Say7V1nvtAi2XIY1xpuVYx2VWJwUVQRjVnurHlW2WgmOUrpKAsT91G08xeMbY5YP6gBGaWSid+tPzdrJn7R42Fac+gYZhKHv5DjLApZbyMvZXdl0FYdTa3gaULI3uzsmToNaf6cVVxofp2NvXoFu3clABkABYPpkgxdr+rRPufQ4a8gB0nZwiMXch8A5qDAraL4QGYbSj9VwLTF6GkkYXYB8enHTe2I/ZYmkp+lgIJjqaz3Kfw2PAlWVsx4rMqMoZXhPULyPcGqZ/otXT2xS4yb2//zn5FfsIXzQAAAAASUVORK5CYII="
        x="0"
        y="0"
        width="20"
        height="20"
      />
    </svg>
  );
};

export default PhoneIcon;
