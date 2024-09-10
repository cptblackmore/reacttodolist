import { useContext } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";

function InputDeleteIcon() {
  const theme = useContext(ThemeContext);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 256 256"
    >
      <g fill={theme.accent} strokeMiterlimit="10" strokeWidth="1">
        <path
          d="M6 90a5.999 5.999 0 01-4.243-10.242l78-78a5.999 5.999 0 018.484 0 5.998 5.998 0 010 8.485l-78 78A5.976 5.976 0 016 90z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        ></path>
        <path
          d="M84 90a5.979 5.979 0 01-4.242-1.758l-78-78a6 6 0 018.485-8.485l78 78a5.997 5.997 0 010 8.484A5.98 5.98 0 0184 90z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        ></path>
      </g>
    </svg>
  );
}

export default InputDeleteIcon;
