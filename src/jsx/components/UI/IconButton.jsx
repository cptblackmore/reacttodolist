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
      padding: 0.4em 0.4em;
      background-color: transparent;
      border: none;
      cursor: pointer;
      :global(svg) {
        transition: transform 0.3s ease;
      }

      :global(path) {
        transition: all 0.3s ease;
      }

      &:focus {
        outline-color: transparent;
      }
      &:focus-visible {
        outline: 2px solid ${theme.fg};
        border-radius: 5px;
      }
      
      &:active {
        filter: brightness(0.8) contrast(1.1);
      }
    }

    .colorable {
      &:hover :global(path) {
        stroke: ${hoverColor || theme.fg};
      }
      &:focus :global(path) {
        stroke: ${hoverColor || theme.fg};
      }
    }

    .scalable {
      &:hover {
        :global(svg) {
          transition: transform 0.5s ease;
          transform: scale(${hoverScale});

        }
      }
      &:focus-visible {
        transform: scale(${hoverScale});
      }
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