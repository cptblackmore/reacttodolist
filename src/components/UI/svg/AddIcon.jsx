function AddIcon({color1, color2}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="-2 -2 54 54"
    >
      <g data-testid="Add button-1">
        <g data-testid="Ellipse 3-1">
          <defs>
            <filter
              id="a"
              width="2.08"
              height="2.08"
              x="-0.54"
              y="-0.54"
              colorInterpolationFilters="sRGB"
              filterUnits="objectBoundingBox"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              ></feColorMatrix>
              <feOffset></feOffset>
              <feGaussianBlur stdDeviation="2"></feGaussianBlur>
              <feColorMatrix values="0 0 0 0 0.4235294117647059 0 0 0 0 0.38823529411764707 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
              <feBlend
                in2="BackgroundImageFix"
                result="filter_abcb691c-e8f6-80cb-8004-b4a764ebeb00"
              ></feBlend>
              <feBlend
                in="SourceGraphic"
                in2="filter_abcb691c-e8f6-80cb-8004-b4a764ebeb00"
                result="shape"
              ></feBlend>
            </filter>
          </defs>
          <circle
            cx="25"
            cy="25"
            r="25"
            fill={color1}
            className="fills"
            filter="url(#a)"
          ></circle>
        </g>
        <path
          fill={color2}
          fillRule="evenodd"
          d="M23.5 35.5A1.503 1.503 0 0025 37a1.503 1.503 0 001.5-1.5v-9h9A1.503 1.503 0 0037 25a1.503 1.503 0 00-1.5-1.5h-9v-9A1.503 1.503 0 0025 13a1.503 1.503 0 00-1.5 1.5v9h-9A1.503 1.503 0 0013 25a1.503 1.503 0 001.5 1.5h9v9z"
          className="fills"
          data-testid="Vector-27"
        ></path>
      </g>
    </svg>
  );
}

export default AddIcon;
