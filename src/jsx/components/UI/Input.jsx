import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

function Input({icon, ...props}) {
  const theme = useContext(ThemeContext);

  return <div className='inputWrapper'>
    <input {...props} className='input' 
    />
    {icon 
     ?
    <div className='icon'>
      {icon}
    </div>
     :
    null
    }

    <style jsx>{`
      .inputWrapper {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
      }

      .input {
        background-color: transparent;
        border: 1px solid ${theme.fg};
        border-radius: 0.4em;
        color: ${theme.fg};
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 0 10px;
        font-size: 1.2em;
        caret-color: ${theme.fg};

        &::placeholder {
          color: ${theme.neutral};
          transition: color 0.2s ease;
        }

        &:focus {
          outline: 2px solid ${theme.fg};

          &::placeholder {
            color: transparent;
            transition: color 0.2s ease;
          }
        }
      }

      .icon {
        position: absolute;
        right: 3px;
        top: 3px;
        bottom: 3px;
      }
    `}</style>
  </div>
}

Input.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node
}

export default Input;