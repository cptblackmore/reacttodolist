import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

function Option({children, ...props}) {
  const theme = useContext(ThemeContext);
  
  return <div className='option'
              tabIndex='0'
              {...props}
  >
    {children}

  <style jsx>{`
    .option {
      padding: 0 10px;
      cursor: pointer;
      position: relative;

      &::selection {
        background-color: transparent;
      }
      &:hover {
        background-color: ${theme.accent.translucent};
        color: ${theme.base.background};
        border-radius: 0.4em;
      }
      &:focus {    
        background-color: ${theme.accent.translucent};
        color: ${theme.base.background};
        border-radius: 0.4em;
      }
    }
  `}</style>
  </div>
}

Option.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default Option;