import PropTypes from 'prop-types';
import { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

function Tooltip({children, text}) {
  const theme = useContext(ThemeContext);
  const [isEnoughSpaceBelow, setIsEnoughSpaceBelow] = useState(true);
  const [isArrowVisible, setIsArrowVisible] = useState(true);
  const [tooltipTransform, setTooltipTransform] = useState('translateX(-50%)');
  const tooltipRef = useRef(null);

  const checkSpace = () => {
    if (tooltipRef.current) {
      const rect = tooltipRef.current.getBoundingClientRect();
      const spaceAbove = rect.top;
      const spaceBelow = window.innerHeight - rect.bottom;
      const viewportWidth = window.innerWidth;

      if (spaceBelow < 150 && spaceAbove > spaceBelow) {
        setIsEnoughSpaceBelow(false);
      } else {
        setIsEnoughSpaceBelow(true);
      }
      if (viewportWidth - 20 < rect.right) {
        setTooltipTransform(`translateX(-${(rect.width / 2) - (viewportWidth - 20 - rect.right)}px)`)
        setIsArrowVisible(false);
      } else if (rect.left < 20) {
        setTooltipTransform(`translateX(-${(rect.width / 2) + (-20 + rect.left)}px)`)
        setIsArrowVisible(false);
      } else {
        setTooltipTransform(`translateX(-${rect.width / 2}px)`)
        setIsArrowVisible(true);
      }
    }
  };

  useEffect(() => {
    checkSpace();

    window.addEventListener('resize', checkSpace);

    return () => {
      window.removeEventListener('resize', checkSpace);
    };
  }, []);

  return <div className='tooltip-wrapper'>
    {children}
    <div ref={tooltipRef} className={`tooltip ${isEnoughSpaceBelow ? 'bottom' : 'top'} ${isArrowVisible ? 'arrow' : ''}`}>{text}</div>

    <style jsx>{`
      .tooltip-wrapper {
        position: relative;
        width: 100%;
        height: 100%;

        &:hover .tooltip {
          opacity: 1;
        }
      }

      .tooltip {
        position: absolute;
        white-space: nowrap;
        left: 50%;
        transform: ${tooltipTransform};
        z-index: 100;
        padding: 3px 15px;
        background-color: ${theme.fg};
        color: ${theme.bg};
        font-weight: bold;
        border-radius: 0.2em;
        opacity: 0;
        transition: opacity 0.2s ease;
        pointer-events: none;

        &.top {
          top: -70%;

          &::before {
            top: 60%;
          }
        }

        &.bottom {
          top: 130%;

          &::before {
            top: -10%;
          }
        }

        &.arrow::before {
          content: '';
          position: absolute;
          left: 50%;
          z-index: -1;
          transform: translateX(-50%) rotate(45deg);
          width: 15px;
          height: 15px;
          background-color: ${theme.fg};
        }
      }
    `}</style>
  </div>
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired
}

export default Tooltip;