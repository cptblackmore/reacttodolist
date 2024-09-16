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
      display: flex;
      height: 100%;
      min-width: 1px;
      align-items: center;
      border: 2px solid ${theme.accent};
      border-radius: 0.4em;
      padding: 10px 16px;
      font-weight: 600;
      font-size: 1em;
      cursor: pointer;
      transition: all 0.2s ease;
      outline: 2px solid transparent;

      &.filled {
        background-color: ${theme.accent};
        color: ${theme.bg};
      }
      &.outlined {
        background-color: transparent;
        color: ${theme.fg};
      }
      &:focus {
        outline: 2px solid transparent;
      }
      &:focus-visible {
        outline: 2px solid ${theme.fg};

        &.filled {
          background-color: ${theme.accentMuted};
          border: 2px solid ${theme.accentMuted};
          transition: all 0.2s ease;
        }
        &.outlined {
          background-color: ${theme.accent};
          color: ${theme.bg};
          transition: background-color 0.2s ease;
        }
      }
      &:hover {
        &.filled {
          background-color: ${theme.accentMuted};
          border: 2px solid ${theme.accentMuted};
        }
        &.outlined {
          background-color: ${theme.accent};
          color: ${theme.bg};
        }
      }
      &:active {
        filter: brightness(0.7) contrast(1.1);
      }
    &:disabled {
      background-color: ${theme.neutral};
      border: 2px solid ${theme.neutral};
      
      &:hover {
        background-color: ${theme.neutral};
        border: 2px solid ${theme.neutral};
      }
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