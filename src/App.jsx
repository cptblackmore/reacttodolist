import { useEffect, useState } from 'react';
import { themes } from './config/themesConfig';
import { ThemeContext } from './context/ThemeContext';
import TaskList from './jsx/components/TaskList';
import Tooltip from './jsx/components/Tooltip';
import Logo from './jsx/components/UI/Logo';
import ThemeSelect from './jsx/components/UI/ThemeSelect';
import './styles/App.scss';

function App() {
  const [currentTheme, setCurrentTheme] = useState(JSON.parse(localStorage.getItem('theme')) || themes[1]);
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(currentTheme));
  }, [currentTheme]);

  return (
      <ThemeContext.Provider value={currentTheme}>
        <div className='App'>
            <div className='header'>
              <div className='logo'>
                <Logo/>
              </div>
              <div className='themes'>
                <Tooltip text='Выбрать тему'>
                  <ThemeSelect currentValue={currentTheme} setCurrentValue={setCurrentTheme} values={themes} />
                </Tooltip>
              </div>
            </div>
            <TaskList storageKey='tasks1'/>
        </div>

        <style jsx global>{`
          ::selection {
            background-color: ${currentTheme.accent};
            color: ${currentTheme.bg};
          }
          
          :focus {
            outline: 1px solid ${currentTheme.fg};
          }
          
          .App {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
          }

          .header {
            display: grid;
            grid-template-columns: 1fr 6fr 1fr;
            width: 100%;
            margin-bottom: 1em;
          }

          .logo {
            grid-column: 2;
            justify-self: center;
            align-self: center;
          }

          .themes {
            grid-column: 3;
            justify-self: right;
            align-self: center;
            width: 2em;
            height: 2em;
          }
          
          body {
            background-color: ${currentTheme.bg};
            color: ${currentTheme.fg};
          }
          `}</style>
      </ThemeContext.Provider>
  )
}

export default App;
