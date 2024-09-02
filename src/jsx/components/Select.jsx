import PropTypes from 'prop-types';
import { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import useCloseByClickEscape from './hooks/useCloseByClickEscape';
import useCloseByClickOutside from './hooks/useCloseByClickOutside';

function Select({currentValue, setCurrentValue, values, renderSelectUI}) {
  const theme = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(values.findIndex(item => item.value === currentValue.value));
  const [highlightedIndex, setHighlightedIndex] = useState(currentIndex);
  const selectRef = useRef(null);
  const combinedClassName = `${'select'} ${isOpen ? 'isOpen' : ''}`;
  
  useEffect(() => {
    setCurrentValue(values[currentIndex]);
    setHighlightedIndex(currentIndex);
  }, [currentIndex, isOpen]);
  
  const handleKeyDown = (e, optionIndex) => {
    if (e.key === 'Enter') {
      if (optionIndex !== undefined) {
        setCurrentIndex(optionIndex);
      }
      setIsOpen(!isOpen);
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const newIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex;
      setCurrentIndex(newIndex);
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const newIndex = currentIndex < values.length - 1 ? currentIndex + 1 : currentIndex;
      setCurrentIndex(newIndex);
    }
  };
  useCloseByClickOutside(selectRef, setIsOpen);
  useCloseByClickEscape(setIsOpen);
  
  return renderSelectUI({
    theme,
    combinedClassName,
    isOpen,
    setIsOpen,
    handleKeyDown,
    selectRef,
    highlightedIndex,
    setCurrentIndex,
    setHighlightedIndex
  });
}

Select.propTypes = {
  currentValue: PropTypes.object.isRequired,
  setCurrentValue: PropTypes.func.isRequired,
  values: PropTypes.array.isRequired
};

export default Select;