import PropTypes from "prop-types";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import debounce from "../utils/debounce";

function Tooltip({ children, text }) {
  const theme = useContext(ThemeContext);
  const [visible, setVisible] = useState(false);
  const [isEntered, setIsEntered] = useState(false);
  const [positionTop, setPositionTop] = useState(0);
  const [positionLeft, setPositionLeft] = useState(-window.innerWidth);
  const [arrowPositionTop, setArrowPositionTop] = useState(0);
  const [arrowPositionLeft, setArrowPositionLeft] = useState(0);
  const [arrowPositionRotate, setArrowPositionRotate] = useState(45);
  const tooltipRef = useRef(null);
  const wrapperRef = useRef(null);

  function handleMouseEnter() {
    setVisible(true);
    setTimeout(() => {
      setIsEntered(true);
    });
  }

  function handleMouseLeave() {
    setIsEntered(false);
    setTimeout(() => {
      setVisible(false);
    }, 200);
  }

  function calculatePosition() {
    const tooltip = tooltipRef.current;
    const wrapper = wrapperRef.current;
    const wrapperRect = wrapper.getBoundingClientRect();
    const wrapperWidth = wrapperRect.width;
    const wrapperHeight = wrapperRect.height;
    const tooltipRect = tooltip.getBoundingClientRect();
    const tooltipWidth = tooltipRect.width;
    const tooltipHeight = tooltipRect.height;

    const tooltipOffset = 10;
    const edgeOffset = 10;
    const spaceAbove = wrapperRect.top;
    const spaceBelow = window.innerHeight - wrapperRect.bottom;
    const spaceLeft = wrapperRect.left;
    const spaceRight = window.innerWidth - wrapperRect.right;

    if (spaceBelow >= tooltipHeight + 20) {
      setPositionTop(wrapperHeight + tooltipOffset);
      setArrowPositionTop(wrapperHeight + 6);
      setArrowPositionRotate(45);
    } else if (spaceAbove >= tooltipHeight) {
      setPositionTop(-tooltipHeight - tooltipOffset);
      setArrowPositionTop(-tooltipOffset - 6);
      setArrowPositionRotate(-135);
    }

    if (
      spaceRight + wrapperWidth / 2 - edgeOffset >= tooltipWidth / 2 &&
      spaceLeft + wrapperWidth / 2 - edgeOffset >= tooltipWidth
    ) {
      setPositionLeft(-tooltipWidth / 2 + wrapperWidth / 2);
      setArrowPositionLeft(wrapperWidth / 2 - 5);
    } else if (spaceRight < tooltipWidth) {
      setPositionLeft(-tooltipWidth + wrapperWidth);
      setArrowPositionLeft(wrapperWidth / 2 - 5);
    } else if (spaceLeft < tooltipWidth) {
      setPositionLeft(0);
      setArrowPositionLeft(wrapperWidth / 2 - 5);
    }
  }

  useEffect(() => {
    if (visible) {
      calculatePosition();

      const handleResize = debounce(calculatePosition, 10);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [visible]);

  return (
    <div
      className={`tooltip-wrapper ${isEntered ? "entered" : ""}`}
      ref={wrapperRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {visible && (
        <div className="tooltip" ref={tooltipRef}>
          {text}
        </div>
      )}
      {visible && <div className="tooltip-arrow"></div>}

      <style jsx>{`
        .tooltip-wrapper {
          position: relative;
          height: 100%;
          width: 100%;

          &.entered .tooltip,
          &.entered .tooltip-arrow {
            opacity: 1;
          }
        }

        .tooltip {
          position: absolute;
          top: ${positionTop}px;
          left: ${positionLeft}px;
          white-space: nowrap;
          background-color: ${theme.fg};
          color: ${theme.bg};
          padding: 0.2em 0.8em;
          border-radius: 0.2em;
          z-index: 100;
          transition: opacity 0.2s ease;
          opacity: 0;
        }
        .tooltip-arrow {
          position: absolute;
          top: ${arrowPositionTop}px;
          left: ${arrowPositionLeft}px;
          height: 10px;
          width: 10px;
          clip-path: polygon(0 0, 0% 100%, 100% 0);
          background-color: ${theme.fg};
          transform: rotate(${arrowPositionRotate}deg);
          z-index: 99;
          transition: opacity 0.2s ease;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default Tooltip;
