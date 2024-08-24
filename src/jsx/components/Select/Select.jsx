import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import useCloseByClickOutside from '../hooks/useCloseByClickOutside';
import Option from '../UI/Option/Option';
import classes from './Select.module.scss';

function Select({filter, setFilter, className, values}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const dropdownRef = useRef(null);
  useCloseByClickOutside(dropdownRef, setIsOpen);
  const [currentValue, setCurrentValue] = useState(filter.category);
  const combinedClassName = `${classes.select}
                             ${className || ''}
                             ${isOpen ? classes.isOpen : ''}`

  useEffect(() => {
    setFilter({...filter, category: currentValue});
    if (isOpen) {
      setCurrentIndex(values.findIndex(item => item.value === currentValue));
    }
  }, [currentValue, isOpen]);
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
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
      <div className={classes.text}>
        {values.find(item => item.value === currentValue).text}
      </div>
      {isOpen &&
        <div className={classes.dropdown}>
          {values.map((item, index) => (
            <Option
              key={item.value}
              onClick={() => { 
                setCurrentValue(item.value); 
                setIsOpen(false); 
              }}
              onMouseEnter={() => setCurrentIndex(index)}
              className={`${classes.option} ${index === currentIndex ? classes.highlighted : null}`}
            >
              {item.text}
            </Option>
          ))}
        </div>}
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