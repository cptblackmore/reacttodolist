import { useContext } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";

function LogoIcon() {
  const theme = useContext(ThemeContext);

  return (
    <svg className='logo' xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.232 23 20.463" preserveAspectRatio="xMidYMid meet">
      <circle r="2.05"></circle>
      <g fill="none">
        <ellipse rx="11" ry="4.2"></ellipse>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
      </g>

    <style jsx>{`
      .logo {
        fill: ${theme.accent.main};
        stroke: ${theme.accent.main};
      }
    `}</style>
    </svg>
  );
}

export default LogoIcon;
