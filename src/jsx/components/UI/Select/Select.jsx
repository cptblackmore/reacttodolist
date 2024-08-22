import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import useCloseByClickOutside from '../../hooks/useCloseByClickOutside';
import Option from '../Option/Option';
import classes from './Select.module.scss';

function Select({filter, setFilter, className, values}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useCloseByClickOutside(dropdownRef, setIsOpen);
  const [currentValue, setCurrentValue] = useState(filter.category);
  const combinedClassName = `${classes.select}
                             ${className || null}
                             ${isOpen ? classes.isOpen : null}`

  useEffect(() => {setFilter({...filter, category: currentValue})}, [currentValue]);

  return <div ref={dropdownRef} 
              onClick={() => {setIsOpen(!isOpen)}} 
              className={combinedClassName}
              tabIndex='0'
    > 
      <div className={classes.text}>
        {values.find(item => item.value === currentValue).text}
      </div>
      {isOpen 
        &&
      <div className={classes.dropdown}>
        {values.map((item) => {
          return <Option key={item.value}
                  onClick={() => {setCurrentValue(item.value)}}
                  className={classes.option}
          >
            {item.text}
          </Option>
        })}
      </div>}
  </div>
}

Select.propTypes = {
  filter: PropTypes.object.isRequired,
  setFilter: PropTypes.func.isRequired,
  values: PropTypes.array.isRequired,
  className: PropTypes.string
}

export default Select;