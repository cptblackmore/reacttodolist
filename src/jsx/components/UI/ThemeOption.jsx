import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

function ThemeOption({ theme, ...props }) {
  const currentTheme = useContext(ThemeContext);

  return (
    <div className="theme" tabIndex="1" role="option" {...props}>
      <style jsx>{`
        .theme {
          width: 2em;
          aspect-ratio: 1 / 1;
          position: relative;

          &::after {
            content: "";
            position: absolute;
            inset: 25%;
            background-color: ${theme.bg};
            border-radius: 20%;
            outline: 5px solid ${theme.accent};
          }
          &:hover {
            background-color: ${currentTheme.accentTranslucent};
          }
          &:focus {
            outline: none;
          }
        }
      `}</style>
    </div>
  );
}

ThemeOption.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default ThemeOption;
