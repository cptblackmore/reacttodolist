import { useEffect, useState } from 'react';
import { themes } from './config/themesConfigNew';
import { ThemeContext } from './context/ThemeContext';
import TaskList from './jsx/components/TaskList';
import ThemeSelect from './jsx/components/ThemeSelect';
import Logo from './jsx/components/UI/Logo';
import './styles/App.scss';

function App() {
  const [currentTheme, setCurrentTheme] = useState(JSON.parse(localStorage.getItem('theme')) || themes[1]);
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(currentTheme));
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={currentTheme}>
      <div className='App'>
          <Logo/>
          <TaskList storageKey='tasks1'/>
          <div className='themes'>
            <ThemeSelect setCurrentTheme={setCurrentTheme}/>
          </div>
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

        .themes {
          position: absolute;
          right: 0;
          top: 0;
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
