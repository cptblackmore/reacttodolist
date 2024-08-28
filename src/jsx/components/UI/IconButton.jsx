import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

function IconButton({children, hoverColor, hoverScale=1, ...props}) {
  const combinedClassName = `${'button'} ${hoverColor ? 'colorable' : ''} ${hoverScale ? 'scalable' : ''}`
  const theme = useContext(ThemeContext);

  return <button  {...props}
                  className={combinedClassName} 
  >
    {children}

  <style jsx>{`
    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background-color: transparent;
      border: none;
      cursor: pointer;
      transition: transform 0.5s ease;

      &:focus {
        outline-color: transparent;
      }
      &:focus-visible {
        outline: 2px solid ${theme.base.foreground};
        border-radius: 5px;
      }
    }

    .colorable:hover :global(path) {
      stroke: ${hoverColor || theme.base.foreground};
      transition: all 0.5s ease;
    }

    .scalable:hover {
      transform: scale(${hoverScale});
      transition: transform 0.3s ease;
    }
  `}</style>
  </button>
}

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  hoverColor: PropTypes.string,
  hoverScale: PropTypes.string,
}

export default IconButton;