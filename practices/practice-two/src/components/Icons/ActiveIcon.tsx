export const ActiveIcon = () => (
  <svg
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Ellipse 246" filter="url(#filter0_dd_347_1969)">
      <circle cx="6" cy="6" r="4" fill="#5e5adb" />
    </g>
    <defs>
      <filter
        id="filter0_dd_347_1969"
        x="0"
        y="0"
        width="12"
        height="13"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="2"
          operator="dilate"
          in="SourceAlpha"
          result="effect1_dropShadow_347_1969"
        />
        <feOffset />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.968627 0 0 0 0 0.975163 0 0 0 0 0.988235 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_347_1969"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_347_1969"
          result="effect2_dropShadow_347_1969"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_347_1969"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
