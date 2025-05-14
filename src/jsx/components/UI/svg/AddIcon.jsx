import { useContext } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";

function AddIcon() {
  const theme = useContext(ThemeContext);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="1 1 27 26"
      xmlSpace="preserve"
      height="100%"
      width="100%"
      fill={theme.accent}
    >
      <path d="M14.5 2C7.596 2 2 7.596 2 14.5S7.596 27 14.5 27 27 21.404 27 14.5 21.404 2 14.5 2zM21 15.5h-5.5V21a1 1 0 11-2 0v-5.5H8a1 1 0 110-2h5.5V8a1 1 0 112 0v5.5H21a1 1 0 110 2z"></path>
    </svg>
  );
}

export default AddIcon;
