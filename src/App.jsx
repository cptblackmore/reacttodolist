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
            <header className='header'>
              <div className='logo'>
                <Logo/>
              </div>
              <div className='themes'>
                <Tooltip text='Выбрать тему'>
                  <ThemeSelect currentValue={currentTheme} 
                               setCurrentValue={setCurrentTheme} 
                               values={themes} 
                  />
                </Tooltip>
              </div>
            </header>
            <TaskList storageKey='tasks1'/>
            <div className='copyright'>This project was created by <a href='https://github.com/cptblackmore' className='nickname'>cptblackmore</a>. Visit my&nbsp;<a href='https://github.com/cptblackmore/reacttodolist'>repository</a>&nbsp;for details.</div>
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

          .copyright {
            position: fixed;
            padding: 0.2em;
            background-color: rgb(100, 100, 100, 0.2);
            left: 0;
            right: 0;
            bottom: 0;
            color: rgb(150, 150, 150, 0.7);

            &>a {
              color: rgb(190, 190, 190, 0.7);
              transition: color 0.1s ease;
              
              &.nickname {
                text-decoration: none;
              }

              &:hover {
                color: rgb(250, 250, 250, 0.7);
              }
            }
          }

          body {
            background-color: ${currentTheme.bg};
            color: ${currentTheme.fg};
            margin: 0;
          }
          `}</style>
      </ThemeContext.Provider>
  )
}

export default App;
