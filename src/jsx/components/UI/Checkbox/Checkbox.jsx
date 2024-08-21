import PropTypes from 'prop-types';
import CheckboxIcon from '../svg/CheckboxIcon';
import classes from './Checkbox.module.scss';

function Checkbox({checked, toggle, iconColor}) {
  
  return <div onClick={() => {toggle()}}
    className={`${classes.customCheckbox} ${checked ? classes.checked : ''}`}
    tabIndex='0'
    role='checkbox'
    aria-checked={checked}
    onKeyDown={e => e.key === 'Enter' && toggle()}
  >
    {checked
      &&
      <CheckboxIcon iconClass={classes.icon} iconColor={iconColor}/>
    }
  </div>
}

Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    iconColor: PropTypes.string.isRequired
}

export default Checkbox;