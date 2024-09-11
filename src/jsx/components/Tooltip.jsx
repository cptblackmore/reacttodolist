import PropTypes from 'prop-types';
import { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

function Tooltip({children, text}) {
  const theme = useContext(ThemeContext);
  const [isEnoughSpaceBelow, setIsEnoughSpaceBelow] = useState(true);
  const tooltipRef = useRef(null);

  const checkSpace = () => {
    if (tooltipRef.current) {
      const rect = tooltipRef.current.getBoundingClientRect();
      const spaceAbove = rect.top;
      const spaceBelow = window.innerHeight - rect.bottom;

      if (spaceBelow < 150 && spaceAbove > spaceBelow) {
        setIsEnoughSpaceBelow(false);
      } else {
        setIsEnoughSpaceBelow(true);
      }
    }
  };

  useEffect(() => {
    checkSpace();

    window.addEventListener('resize', checkSpace);
    window.addEventListener('scroll', checkSpace);

    return () => {
      window.removeEventListener('resize', checkSpace);
      window.removeEventListener('scroll', checkSpace);
    };
  }, []);

  return <div className='tooltip-wrapper'>
    {children}
    <div ref={tooltipRef} className={`tooltip ${isEnoughSpaceBelow ? 'bottom' : 'top'}`}>{text}</div>

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
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
        z-index: 100;
        padding: 3px 10px;
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

        &::before {
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