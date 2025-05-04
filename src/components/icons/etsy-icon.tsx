import React from "react";
import { useResolvedTheme } from "@/lib/hooks";

export function EtsyIcon() {
  const { isDarkTheme } = useResolvedTheme();

  return isDarkTheme ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="44"
      height="26"
      viewBox="0 0 44 26"
    >
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAaCAYAAADMp76xAAAAAXNSR0IArs4c6QAABBtJREFUWEfNmM9vG0UUx7+z3h9Zu80GGktRIXZRU1G1dbkgBMKBtieU5B9ITQNIUNogkHqiPnBCIuaEBDQuQgKEsDlxi424oEpxxAUJJEuoEiBUt0JRk0LtxHY3uzuD3rIbXCuKd0tSdy7enV/vs2++82aeGbqKEEIHEAMwAEAGEAEgdffbpXcOwAFgA7gD4DZjjJ43C/OfhBAEtQ/AIIAWgA1vME0idgmwe1riIQ5ykgIgCmANwC3GGHHABfZgHwVAlY37CNjLD8S3x1vpGwTtA8cBqB5sr0n60W4AMBljK0wIQa4fBbD6AHl2K6mQU/8k4GFPM6TbB7mQNCwCJu22vU0WGnjj/VMJ9e3va6EHhh9AktUJ+ACFDy8ibDlNe0bPc8ucchsVbcHvxGwzDbB6tOikw9sPPYIixxABHwSw0ku/rRmtKBz7eKzgHPNNtQtvGfzbfDH2lTVJdc2X92SVg08V1Hd2xeMUIOIEfAjAcq/vbZ7R8uD2uA9MsHrmw3rrXDwTvbxS2Hj3VMK6eqWsHD4x0Q28g7IZuWfg1kvRnDz29DzBmRfG0vbNP3Lg/Dgi8iLjTiJa5Kn1s/GMdKcxKav6ot1qzKqJo6fNG1dz1C4iWkV64bWLqHyT5o3lLDlMmnhjkpywjfNCAtvWFLToPLOtlHCsceXIiWd9b7bOxjNibTUf+1rQSemW9UxkSR2Mv6fml0vm6/HT/LnpEtXzhY+uY8C4GPv89rwrpReVkvL4+PkAUgoJ3CmJGT0fOfTM3HbAvu6h6IVObbv1nBukfVdKv/6QjX3ZPt9LlgDuHZgMESz9kiH7enW828NUT5511m5lBWNMOfy8q29XQsu/l6WpN0fx3ac5Zf/YvJyrVncUeKsoQQYo5En7Hik4zXqyG7j5ytAsLbsbTcqXSlD0UuyL9TlfBpDkGrid8KPMjgG3LhxIi5u1y+AwEBucYxGF4jaE2U7CbGaVIyePOc2/DX7t5yXSJoRtkASsX66UpeTRaaRO1nj54yVt9IlpOfeT68nmq0OzaNZz8uDwOe2TlWIAWOoSTBLuhlHUuqTod+1gbrUNydowfIPUzzbbSfmhkUXtg98qtPRsbTXlftze4SrVdcZwUbpUiRYdtz1gcYEDHRwBJ9y2Gx0s2shjC6RXepY1/VoI724eHD2P5p2AdWVwRssL8CQTEEzVK9HPGq6eA5bNo/l/XX4CGnO70eaTfiyn+JMT1R4HxFbT0uVnwL9e0p14PYzxPvSlPNMmYEo69we5APUB0jdJ+qV7e81PkeiFsuTtzvE+8mIv3dcZY6vdSSil1CSN+5Ul93IC8dHdhDLp/5JQN07+m+Y/3JHmW31O82mTUZpPq/7XXWl+52d6SSllqZr330A//kghZ5kUCRljlL5tln8AE44MHTz7i+wAAAAASUVORK5CYII="
        x="0"
        y="0"
        width="44"
        height="26"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="44"
      height="26"
      viewBox="0 0 44 26"
    >
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAaCAYAAADMp76xAAAAAXNSR0IArs4c6QAABOZJREFUWEfNmF1PFFcYx8/bzOzs2yBiEcSFItJgwN3U2nZdaE2TponY26YqTU2vqp/AvamxF4VPgL1qeiFc9KJXYtKkaTSwbrRG2GCUUtpQim+B6g67zM7LeWnOlrVbFHdRxM7NZs5zznl++5//nOecgWD11RTXQ34tQDnwCQqIxlwsFIIe6/cCGqBHuYNVBgmgBAE7Nw2yAFyk5angvzenUbDtp63YYWEviC0sHBf7/AzldY7wkngBfI9NyVkY8mABMdvC3BYK4ZqfqTCXn3nvLwDOcDlgBfg02tKaarJRjuugdmmzACuJwBmFNiZB7unE/j0xL6GLwMG2nm0MUTUA0VKlSV5GnDNquEB18jOjCxCAfYoR0XdiNbT4f1F2tShSaQbwNtMWd2Co8WAd1zDWVdt6GepVm9OyURBr2IN628EmQqyCJhS32sHl/c61ZCJ9s9G5Zxm7njEO9FRK/TqsaXm7BQBflmgeW2uC6Vj6rAL5YRn3ODhf6kcQ6AYAmK3jCfn7Qi/qKBgAUAONtgO7MGALCJOnLl2/xi4PEyD2vjqR6CyRfdEwa3xaf3t410SiV7bdiF5JTpjhob7Zjg1XvORjGG59Z7eqsHuV5JmKpc9qgPeUgPsbbhnJux3mRGf6WOxGfOi79kxkvz9/IZWtPbQaeKNs43p4+zMD34ymB66bNYMSLtVxrbtBcwcQFHuZgKMQgkjr+IGu651Xj4UI7bUFHg0genKqEDr6mi8/IOOugGPD9xtOfVi30L0Ve0kp2Lf3G3u/vNtiriXe+oEhP7zM0aAGRReBoif1sDZRUlPC1Sre2ZbxRLiUcCaaSj3k6lf7J/ePTHRdPfr94isjMvbZ9tt/mhydimbig/L+t9jlkXR2y4lKVlo/cJkl5It4NVvT/zTgku+XBRm6afqGPlpZTWQ7AsDYNXGgV1opplvJ9kz8RCVbPhfwufZbkb7pjjmZ0HVVsCeY61mtsASQyoaJl4QCwJ+zwUMSWlpoh8+58M29HTv76u8OzNiBwUNTeyc3FPhJq4RMIJVecJQhHfPm1cCZ6JWT0cxbg3I1OV5/Z8QScKQzE+8v2YAJOIchj5RWmQ0DvtRxrTuiOV8DCIwlTvoph1k5uYZEcxDR5NjD2s56X8HYrRdSJienMACGXN7iNQ8u/GLrRzKmPvdx/YPUjK0feX/q9aKSmWj6pIH4QJYqn8cm3xyuBCvjVVtCPlaPQdMV8D9vsAqFoWBhlBLKfgSxZtNVRhO33hiTjz6ssi6ZbMnFk7KtfA0/vv32WOt4ohiv5ioCV1s4qpmwUp8b0XRyzgmcl36VRYZy+Ee16j4qHNWU5kog1cZl8VEgbwYCCkfAsT0rfq5m/KPS/Lybn2qSldvgg5rFrh+ydZNPKxBPmtPJeyoNYF9xe8kUpvh9PL+e5Jvdt+C4AaQGKARNcd3w6Y0YLFfcAG02ZClf0b9QqTN3kLniEUmqrPgLPoTJmnX8ZcEW81og5OiKm5u+uPjoEOpr/bEpqADKGc1X2mpuFrxUFhRA2NJCyP4kMQ/OrBxC/wE4jUKNl2pRgIap51jIgx5W/AyRAt+sPyABOdUR8yysEU31FObnSDVzR959IGElZdl3iRXd9u1TQrmQQS1HE0QogiGsbdKHFMejHGLOIIUe8WtOznKWwXy6UP5E/wYne3sN0/eABgAAAABJRU5ErkJggg=="
        x="0"
        y="0"
        width="44"
        height="26"
      />
    </svg>
  );
}
