import React from "react";
import { useResolvedTheme } from "@/lib/hooks";

export default function CalenderIcon() {
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAR9JREFUOE+9lIFNAzEQBGc7oATSAVSA6AAqIFQAqQDoACoAKgAqgA5IB6EEOjh+pXPkvBziSK9Yer1snce3e/aJiYcm5rEVGBE3wIekn/rQiDgGziS9tpJpAnPTCniQdD8Cen4HzMaHOW4NjIgj4A1wBh7+/+ZXMx3nr2T+BSwkOXYDOAeeq8Bee32wgY9j4L9SWvSWNbXkAnxqyNyWraW7eGuvW8BeqXXc4YGu2Gyopo2+Ai7Ths+h+i+WCHxntZ3pzgwNtKe3eX0M8ZrnS8A++0aUsRO4r49dwOus4Elm5Ipavi+0rbACr3VLPs1NhpznZr8ky18McD/NbuAkki/yLe8Lc/y8dJ+NbhMRfs+lOfSCl5LeS/DhGmxveuO4PzkQehVG2FOiAAAAAElFTkSuQmCC"
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAXpJREFUOE+9lE1OwkAUx/9vStlB5gglSuJSd8Zg1BvoCcATACcQbgAnUE+AnkDiR+JO1gZDj9DAxtB2nkyhTZESh0h4m9m8+b3/+yRs2WjLPKwFFsuV+tQPHr/ddzcdVB4cO6HKn00+n++zxGQC9ScV5kZgtMfD11b6Y3G/0gLhZuoHpd/BtF8ClM65DO2gRyBnDmD9egB5y0pYApAARcoZqm/5dtNz+5FfAiyUT2oEcRs7mteWHTA3x8O3zhLwr1SyAmSVJlEYA6HQBelUDYwhIVBP13oVaMBZcUk1b2dAT/i5krL9DkBVVnTFxJ4gPDH4zrLCtgpzH/NuR61OxmudQl3D1mxkGnp8NIQgPIAbAAYM1Z1PxMIMgJtV0gTIUNcEUQdwGHVe6IGmKsAuQHrm9AaZpzzb46O8bem0q4pxQUySBPeiGvp2U9nBaBPg/1Mu7J1eagWbkRZbT6IWX5+laxPtM4vFcTBDM9Ng8vXyEHvv7sCa6Vv1+gFT2sgVzue/sAAAAABJRU5ErkJggg=="
        x="0"
        y="0"
        width="20"
        height="20"
      />
    </svg>
  );
}
