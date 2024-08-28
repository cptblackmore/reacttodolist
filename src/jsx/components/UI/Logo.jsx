import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import LogoIcon from '../UI/svg/LogoIcon';

function Logo() {
  const theme = useContext(ThemeContext);
  return <div className='logo'>
    <div className='icon'>
      <LogoIcon/>

    </div>
  <h1>ToDo List</h1>

  <style jsx>{`
    .logo {
      display: flex;
      align-items: center;
      height: 2rem;
      margin-bottom: 1em;
      font-family: 'Optimistic Display', sans-serif;

      &>h1 {
        margin: 0;
        color: ${theme.foreground};
      }
    }

    .icon {
      display: flex;
      align-items: center;
      width: 2em;
      margin-right: 0.5em;
    }
  `}</style>
</div>
}

export default Logo;