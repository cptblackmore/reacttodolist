import { useContext, useRef, useState } from 'react';
import { themes } from '../../config/themesConfigNew.js';
import { ThemeContext } from '../../context/ThemeContext';
import useCloseByClickOutside from './hooks/useCloseByClickOutside.js';
import ThemeIcon from './UI/svg/ThemeIcon';
import ThemeOption from './UI/ThemeOption.jsx';

function ThemeSelect({setCurrentTheme}) {
  const theme = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);
  useCloseByClickOutside(selectRef, setIsOpen);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleKeyDown = (e, optionIndex) => {
    if (e.key === 'Enter') {
      if (optionIndex !== undefined) {
        setCurrentTheme(themes[optionIndex]);
        setCurrentIndex(optionIndex);
      }
      if (isOpen && currentIndex) {
        setCurrentTheme(themes[currentIndex]);
      }
      setIsOpen(!isOpen);
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const newIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex;
      setCurrentIndex(newIndex);
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const newIndex = currentIndex < themes.length - 1 ? currentIndex + 1 : currentIndex;
      setCurrentIndex(newIndex);
    }
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return <div className='select'
              onClick={() => {setIsOpen(!isOpen)}}
              tabIndex='1'
              onKeyDown={(e) => {handleKeyDown(e)}}
              ref={selectRef}
  >
  <div className='icon'><ThemeIcon/></div>
    {isOpen
      &&
    <div className='dropdown'
    >
      {themes.map((t, index) => {
        return <div className={`option ${index === currentIndex ? 'highlighted' : ''}`}
                    key={index}
        >
          <ThemeOption theme={t} 
                       onClick={() => {setCurrentTheme(themes[index])}}
                       onKeyDown={e => {handleKeyDown(e, index)}}
                       onMouseEnter={() => setCurrentIndex(index)}
                       onFocus={() => setCurrentIndex(index)}
          />
        </div>
      })}
    </div>
    }

    <style jsx>{`
        .select {
          position: relative;
          background-color: ${theme.bg};
          border: 2px solid ${theme.accent};
          color: ${theme.bg};
          border-radius: 0.4em;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          cursor: pointer;
          transition: background-color 0.2s ease;
          
          &:focus {
            outline: 2px solid ${theme.accentTranslucent};
            background-color: ${theme.accentTranslucent};
            transition: background-color 0.2s ease;
          }
          &:focus-visible {
            outline: 2px solid ${theme.fg};
            background-color: ${theme.accentTranslucent};
            transition: background-color 0.2s ease;
          }
          &:hover {
            background-color: ${theme.accentTranslucent};
            transition: background-color 0.2s ease;
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
        
        .icon {
            position: absolute;
            top: 2px;
            right: 2px;
            bottom: 2px;
            left: 2px;
        }

        .dropdown {
          position: absolute;
          display: flex;
          top: 0;
          right: 120%;
          bottom: 0;
          width: auto;
          background-color: ${theme.fg};
          outline: 2px solid ${theme.accent};
          border-radius: 0.4em;
          z-index: 99;
          overflow: hidden;
        }

        .option {
          position: relative;
          width: 2em;
          height: 100%;
          
          &+.option ::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 1px;
            background-color: ${theme.accentTranslucent};
          }
        }

        .highlighted {
          background-color: ${theme.accentTranslucent};

          &:hover>:global(div) {
            background-color: transparent;
          }
        }
    `}</style>
  </div>
}

export default ThemeSelect;