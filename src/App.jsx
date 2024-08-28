import { useState } from 'react';
import { themes } from './config/themesConfig';
import { ThemeContext } from './context/ThemeContext';
import TaskList from './jsx/components/TaskList';
import Logo from './jsx/components/UI/Logo';
import './styles/App.scss';

function App() {
  const [theme, setTheme] = useState({base: themes.light, accent: themes.accentRed});

  return (
    <ThemeContext.Provider value={theme}>
      <div className='App'>
          <Logo/>
          <TaskList storageKey='tasks1'/>
      </div>


      <style jsx global>{`
        ::selection {
          background-color: ${theme.accent.main};
          color: ${theme.base.background};
        }
        
        :focus {
          outline: 1px solid ${theme.base.foreground};
        }
        
        .App {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        body {
          background-color: ${theme.base.background};
          color: ${theme.base.foreground};
        }
        `}</style>
    </ThemeContext.Provider>
  )
}

export default App;
