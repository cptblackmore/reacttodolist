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
  const [isEntered, setIsEntered] = useState(false);
  
  useEffect(() => {
    setCurrentValue(values[currentIndex]);
    setHighlightedIndex(currentIndex);
  }, [currentIndex, isOpen]);
  
  const handleClick = () => {
    console.log('test')
    if (isOpen) {
      setIsEntered(false)
      setTimeout(() => setIsOpen(false), 200)
    } else {
      setIsOpen(true);
      setTimeout(() => setIsEntered(true))
    }
  }
  const handleKeyDown = (event, optionIndex) => {
    if (event.key === 'Enter') {
      if (optionIndex !== undefined) {
        setCurrentIndex(optionIndex);
      }
      if (isOpen) {
        setIsEntered(false)
        setTimeout(() => setIsOpen(false), 200)
      } else {
        setIsOpen(true);
        setTimeout(() => setIsEntered(true))
      }
    }
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      const newIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex;
      setCurrentIndex(newIndex);
    }
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      const newIndex = currentIndex < values.length - 1 ? currentIndex + 1 : currentIndex;
      setCurrentIndex(newIndex);
    }
  };
  useCloseByClickOutside(selectRef, setIsOpen, setIsEntered);
  useCloseByClickEscape(setIsOpen, setIsEntered);
  
  return renderSelectUI({
    theme,
    combinedClassName,
    isOpen,
    handleClick,
    handleKeyDown,
    selectRef,
    highlightedIndex,
    setCurrentIndex,
    setHighlightedIndex,
    isEntered
  });
}

Select.propTypes = {
  currentValue: PropTypes.object.isRequired,
  setCurrentValue: PropTypes.func.isRequired,
  values: PropTypes.array.isRequired,
  renderSelectUI: PropTypes.func.isRequired
};

export default Select;