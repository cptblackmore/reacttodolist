import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

function Button({children, variant='filled', ...props}) {
  const className = `button ${variant === 'filled' ? 'filled' : ''} ${variant === 'outlined' ? 'outlined' : ''}`
  const theme = useContext(ThemeContext);
  
  return <button {...props} className={className}>
    {children}

  <style jsx>{`
    .button {
      border: 2px solid ${theme.accent.main};
      border-radius: 0.4em;
      padding: 10px 22px;
      font-weight: 600;
      font-size: 1em;
      cursor: pointer;

      &:focus {
        outline-color: transparent;
      }
      &:focus-visible {
        outline: 2px solid ${theme.base.foreground};
      }
      
      &.filled {
        background-color: ${theme.accent.main};
        color: ${theme.base.background};
      }
      &.outlined {
        background-color: transparent;
        color: ${theme.base.foreground};
      }
      &:hover {
        &.filled {
          background-color: ${theme.accent.muted};
          border: 1px solid ${theme.accent.muted};
          transition: all 0.2s ease;
        }
        &.outlined {
          background-color: ${theme.accent.main};
          color: ${theme.base.background};
          transition: background-color 0.2s ease;
        }
      }
      &:active {
        transform: scale(98%) translateY(1px);
      }
    }
  `}</style>
  </button>
}

Button.propTypes = {
    children: PropTypes.node,
    variant: PropTypes.string
}

export default Button;