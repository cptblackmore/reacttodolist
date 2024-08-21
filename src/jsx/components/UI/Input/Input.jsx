import PropTypes from 'prop-types';
import classes from './Input.module.scss';

function Input({className, icon, ...props}) {
  const combinedClassName = `${classes.input}
                             ${className || null}`

  return <div className={classes.inputWrapper}>
    <input {...props} className={combinedClassName} 
    />
    <div className={classes.icon}>
      {icon || null}
    </div>
  </div>
}

Input.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node
}

export default Input;