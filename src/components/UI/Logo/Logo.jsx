import LogoIcon from '../svg/LogoIcon';
import classes from './Logo.module.scss';

function Logo() {
  return <div className={classes.logo}>
    <div className={classes.icon}>
      <LogoIcon/>
    </div>
  <h1>ToDo List</h1>
</div>
}

export default Logo;