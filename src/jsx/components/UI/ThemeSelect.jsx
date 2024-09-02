import PropTypes from 'prop-types';
import Select from '../Select.jsx';
import ThemeIcon from './svg/ThemeIcon.jsx';
import ThemeOption from './ThemeOption.jsx';

function ThemeSelect({currentValue, setCurrentValue, values}) {
  return <Select currentValue={currentValue}
                 setCurrentValue={setCurrentValue}
                 values={values}
                 renderSelectUI={({
                   theme,
                   combinedClassName,
                   isOpen,
                   setIsOpen,
                   handleKeyDown,
                   selectRef,
                   highlightedIndex,
                   setCurrentIndex,
                   setHighlightedIndex
                 }) => {
                  return <div className={combinedClassName}
                              tabIndex='1'
                              onClick={() => {setIsOpen(!isOpen)}}
                              onKeyDown={handleKeyDown}
                              ref={selectRef}
                  >
                  <div className='icon'><ThemeIcon/></div>
                    {isOpen &&
                      <div className='dropdown'
                      >
                        {values.map((t, index) => {
                          return <div className={`option ${index === highlightedIndex ? 'highlighted' : ''}`}
                                      key={index}
                          >
                            <ThemeOption theme={t} 
                                        onClick={() => {setCurrentIndex(index)}}
                                        onKeyDown={e => {handleKeyDown(e, index)}}
                                        onFocus={() => setCurrentIndex(index)}
                                        onMouseEnter={() => setHighlightedIndex(index)}
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
                }}
  />
}

ThemeSelect.propTypes = {
  currentValue: PropTypes.object.isRequired,
  setCurrentValue: PropTypes.func.isRequired,
  values: PropTypes.array.isRequired
};

export default ThemeSelect;