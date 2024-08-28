import PropTypes from 'prop-types';
import { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import useCloseByClickOutside from './hooks/useCloseByClickOutside';
import Option from './UI/Option';

function Select({filter, setFilter, values}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const dropdownRef = useRef(null);
  useCloseByClickOutside(dropdownRef, setIsOpen);
  const [currentValue, setCurrentValue] = useState(filter.category);
  const combinedClassName = `${'select'} ${isOpen ? 'isOpen' : ''}`
  const theme = useContext(ThemeContext);

  useEffect(() => {
    setFilter({...filter, category: currentValue});
    if (isOpen) {
      setCurrentIndex(values.findIndex(item => item.value === currentValue));
    }
  }, [currentValue, isOpen]);
  
  const handleKeyDown = (e, optionIndex) => {
    if (e.key === 'Enter') {
      if (optionIndex !== undefined) {
        setCurrentValue(values[optionIndex].value);
        setCurrentIndex(optionIndex);
      }
      setIsOpen(!isOpen);
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const newIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex;
      setCurrentValue(values[newIndex].value);
      setCurrentIndex(newIndex);
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const newIndex = currentIndex < values.length - 1 ? currentIndex + 1 : currentIndex;
      setCurrentValue(values[newIndex].value);
      setCurrentIndex(newIndex);
    }
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };
  
  return (
    <div
      ref={dropdownRef}
      onClick={() => { setIsOpen(!isOpen) }}
      className={combinedClassName}
      tabIndex='0'
      onKeyDown={handleKeyDown}
    >
      <div className='text'>
        {values.find(item => item.value === currentValue).text}
      </div>
      {isOpen &&
        <div className='dropdown'>
          {values.map((item, index) => (
            <div className={`option ${index === currentIndex ? 'highlighted' : ''}`}
                 key={item.value}
            >
              <Option
                onClick={() => { 
                  setCurrentIndex(index);
                  setCurrentValue(item.value); 
                  setIsOpen(false); 
                }}
                onKeyDown={e => handleKeyDown(e, index)}
                onMouseEnter={() => setCurrentIndex(index)}
                onFocus={() => setCurrentIndex(index)}
              >
                {item.text}
              </Option>
            </div>
          ))}
        </div>}

    <style jsx>{`
        .select {
          position: relative;
          display: flex;
          align-items: center;
          background-color: ${theme.accent.main};
          border: 1px solid ${theme.accent.main};
          color: ${theme.base.background};
          border-radius: 0.4em;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          text-align: left;
          padding: 0 10px;
          cursor: pointer;
          
          &:focus {
            outline: 2px solid ${theme.accent.translucent};
          }
          &:focus-visible {
            outline: 2px solid ${theme.base.foreground};
          }
          
          &::before, &::after {
            content: '';
            position: absolute;
            z-index: 99;
            height: 2px;
            width: 10px;
            background-color: ${theme.base.background};
            border-radius: 1px;
            transition: transform 0.2s ease;
          }
          &::before {
            right: 16px;
            transform: rotate(45deg);
          }
          &::after {
            right: 10px;
            transform: rotate(315deg);
          }
          
          &.isOpen {
            &::before {
              transform: rotate(-45deg);
            }
            &::after {
              transform: rotate(405deg);
            }
          }
        }
        
        .dropdown {
          background-color: ${theme.base.foreground};
          border-radius: 0.4em;
          border: 2px solid ${theme.accent.main};
          position: absolute;
          z-index: 99;
          left: 0;
          top: 2em;
          right: 0;
        }

        .option {
          position: relative;
          &+.option ::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0.5em;
            right: 0.5em;
            height: 1px;
            background-color: ${theme.accent.translucent};
          }
        }

        .text {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding: 0 20px 0 0;
          text-transform: uppercase;
          font-weight: 600;
        }

        .highlighted {
          background-color: ${theme.accent.translucent};

          &:hover>:global(div) {
            background-color: transparent;
          }
        }
    `}</style>
    </div>
  );
}

Select.propTypes = {
  filter: PropTypes.object.isRequired,
  setFilter: PropTypes.func.isRequired,
  values: PropTypes.array.isRequired,
  className: PropTypes.string
};

export default Select;