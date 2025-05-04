import React from "react";
import { useResolvedTheme } from "@/lib/hooks";

const OrdersIcon = () => {
  const { isDarkTheme } = useResolvedTheme();

  return isDarkTheme ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="54"
      height="54"
      viewBox="0 0 54 54"
    >
      <image
        xlinkHref="data:image/png;base64,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"
        x="0"
        y="0"
        width="54"
        height="54"
      />
    </svg>
  ) : (
    <svg
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="53" height="53" rx="11.5" fill="#F6F8F9" />
      <rect
        x="0.5"
        y="0.5"
        width="53"
        height="53"
        rx="11.5"
        stroke="url(#paint0_linear_38_22398)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 15.7813C19.5 15.2812 20.1781 15.0002 20.8853 15H33.1147C33.8219 15.0002 34.5 15.2812 35 15.7813L38.2187 19C38.7188 19.5 38.9998 20.1781 39 20.8853V36.3333C39 37.3942 38.5786 38.4116 37.8284 39.1618C37.0783 39.9119 36.0609 40.3333 35 40.3333H19C17.9391 40.3333 16.9217 39.9119 16.1716 39.1618C15.4214 38.4116 15 37.3942 15 36.3333V20.8853C15.0002 20.1781 15.2812 19.5 15.7813 19L19 15.7813ZM33.1147 17.6667H20.8853L18.2187 20.3333H35.7813L33.1147 17.6667ZM24.3333 27C24.3333 26.6464 24.1929 26.3072 23.9428 26.0572C23.6928 25.8071 23.3536 25.6667 23 25.6667C22.6464 25.6667 22.3072 25.8071 22.0572 26.0572C21.8071 26.3072 21.6667 26.6464 21.6667 27C21.6667 28.4145 22.2286 29.771 23.2288 30.7712C24.229 31.7714 25.5855 32.3333 27 32.3333C28.4145 32.3333 29.771 31.7714 30.7712 30.7712C31.7714 29.771 32.3333 28.4145 32.3333 27C32.3333 26.6464 32.1929 26.3072 31.9428 26.0572C31.6928 25.8071 31.3536 25.6667 31 25.6667C30.6464 25.6667 30.3072 25.8071 30.0572 26.0572C29.8071 26.3072 29.6667 26.6464 29.6667 27C29.6667 27.7072 29.3857 28.3855 28.8856 28.8856C28.3855 29.3857 27.7072 29.6667 27 29.6667C26.2928 29.6667 25.6145 29.3857 25.1144 28.8856C24.6143 28.3855 24.3333 27.7072 24.3333 27Z"
        fill="url(#paint1_linear_38_22398)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_38_22398"
          x1="27"
          y1="0"
          x2="27"
          y2="54"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C521FF" />
          <stop offset="0.495" stopColor="#FF2164" />
          <stop offset="1" stopColor="#FF9B21" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_38_22398"
          x1="27"
          y1="15"
          x2="27"
          y2="40.3333"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C521FF" />
          <stop offset="0.5" stopColor="#FF2164" />
          <stop offset="1" stopColor="#FF9B21" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default OrdersIcon;
