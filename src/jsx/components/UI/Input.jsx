import PropTypes from 'prop-types';
import { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import ClearIcon from './svg/ClearIcon';

function Input({value, setValue, icon, autoFocus, ...props}) {
  const theme = useContext(ThemeContext);
  const inputRef = useRef(null);

  useEffect(() => {
    if (autoFocus) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 50)
    }
  }, [])

  return <div className='input-wrapper'>
    <input className='input' 
           value={value} 
           ref={inputRef}
           onChange={e => {setValue(e.target.value)}}
           {...props} 
    />
    {icon && !value
      ?
    <div className='icon'>
      {icon}
    </div>
      :
    null
    }
    {value 
      && 
    <div className='delete-icon' 
         onClick={() => {setValue(''); inputRef.current.focus()}}
    >
      <ClearIcon/>
    </div>
    }

    <style jsx>{`
      .input-wrapper {
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
        padding: 0 35px 0 10px;
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

      .delete-icon {
        position: absolute;
        padding: 2px;
        right: 5px;
        top: 5px;
        bottom: 5px;
        cursor: pointer;
      }
    `}</style>
  </div>
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  className: PropTypes.string,
  icon: PropTypes.node
}

export default Input;