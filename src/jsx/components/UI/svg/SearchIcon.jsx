import { useContext } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";

function SearchIcon() {
  const theme = useContext(ThemeContext);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="#000"
      version="1.1"
      viewBox="0 0 24 24"
      xmlSpace="preserve"
    >
      <path fill={theme.neutral} d="M20.031 20.79c.46.46 1.17-.25.71-.7l-3.75-3.76a7.904 7.904 0 002.04-5.31c0-4.39-3.57-7.96-7.96-7.96s-7.96 3.57-7.96 7.96c0 4.39 3.57 7.96 7.96 7.96 1.98 0 3.81-.73 5.21-1.94l3.75 3.75zM4.11 11.02c0-3.84 3.13-6.96 6.96-6.96 3.84 0 6.96 3.12 6.96 6.96s-3.12 6.96-6.96 6.96c-3.83 0-6.96-3.12-6.96-6.96z"></path>
    </svg>
  );
}

export default SearchIcon;
