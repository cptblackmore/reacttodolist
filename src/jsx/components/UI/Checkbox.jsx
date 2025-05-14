import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import CheckboxIcon from "../UI/svg/CheckboxIcon";

function Checkbox({ checked, toggle, iconColor }) {
  const theme = useContext(ThemeContext);

  return (
    <div
      onClick={() => {
        toggle();
      }}
      onKeyDown={(e) => e.key === "Enter" && toggle()}
      tabIndex="0"
      role="checkbox"
      aria-checked={checked}
      aria-label="Статус выполнения"
      className={`customCheckbox ${checked ? "checked" : ""}`}
    >
      {checked && (
        <div className="icon">
          <CheckboxIcon iconColor={iconColor} />
        </div>
      )}

      <style jsx>{`
        .customCheckbox {
          position: relative;
          width: 1em;
          height: 1em;
          flex-shrink: 0;
          border: 1px solid ${theme.neutral};
          border-radius: 0.25em;

          &:focus {
            outline: 2px solid ${theme.accentTranslucent};
          }
          &:focus-visible {
            outline: 2px solid ${theme.fg};
          }

          &:active {
            filter: brightness(0.7) contrast(1.1);
          }

          &.checked {
            background-color: ${theme.accent};
            border-color: ${theme.accent};
            background-size: contain;
            background-repeat: no-repeat;

            &:focus {
              outline: 2px solid ${theme.accentTranslucent};
            }
            &:focus-visible {
              outline: 2px solid ${theme.fg};
            }
          }
        }

        .icon {
          display: block;
          position: absolute;
          z-index: 1;
          left: 0;
          top: 0;
          width: 1em;
          height: 1em;
        }
      `}</style>
    </div>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  iconColor: PropTypes.string.isRequired,
};

export default Checkbox;
