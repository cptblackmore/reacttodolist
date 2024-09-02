import PropTypes from 'prop-types';
import Select from '../Select';
import Option from './Option';

function CategorySelect({currentValue, setCurrentValue, values}) {
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
                              tabIndex='0'
                              onClick={() => {setIsOpen(!isOpen)}}
                              onKeyDown={handleKeyDown}
                              ref={selectRef}
                  >
                    <div className='text'>
                      {values.find(item => item.value === currentValue.value).text}
                    </div>
                    {isOpen &&
                      <div className='dropdown'>
                        {values.map((item, index) => (
                          <div className={`option ${index === highlightedIndex ? 'highlighted' : ''}`}
                              key={item.value}
                          >
                            <Option onClick={() => {setCurrentIndex(index)}}
                                    onKeyDown={e => handleKeyDown(e, index)}
                                    onFocus={() => setCurrentIndex(index)}
                                    onMouseEnter={() => setHighlightedIndex(index)}
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
                        background-color: ${theme.accent};
                        border: 2px solid ${theme.accent};
                        color: ${theme.bg};
                        border-radius: 0.4em;
                        width: 100%;
                        height: 100%;
                        box-sizing: border-box;
                        text-align: left;
                        padding: 0 10px;
                        cursor: pointer;
                        
                        &:focus {
                          outline: 2px solid ${theme.accentTranslucent};
                        }
                        &:focus-visible {
                          outline: 2px solid ${theme.fg};
                          background-color: ${theme.accentMuted};
                          border: 2px solid ${theme.accentMuted};
                          transition: background-color 0.2s ease, border 0.2s ease;
                        }
                        &:hover {
                          background-color: ${theme.accentMuted};
                          border: 2px solid ${theme.accentMuted};
                          transition: background-color 0.2s ease, border 0.2s ease;
                        }
                        
                        &::before, &::after {
                          content: '';
                          position: absolute;
                          z-index: 98;
                          height: 2px;
                          width: 10px;
                          background-color: ${theme.bg};
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
                        background-color: ${theme.fg};
                        border-radius: 0.4em;
                        border: 2px solid ${theme.accent};
                        position: absolute;
                        z-index: 99;
                        left: 0;
                        top: 115%;
                        right: 0;
                      }

                      .option {
                        position: relative;
                        &+.option ::after {
                          content: '';
                          position: absolute;
                          top: 0;
                          left: 0;
                          right: 0;
                          height: 1px;
                          background-color: ${theme.accentTranslucent};
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

CategorySelect.propTypes = {
  currentValue: PropTypes.object.isRequired,
  setCurrentValue: PropTypes.func.isRequired,
  values: PropTypes.array.isRequired
};

export default CategorySelect;