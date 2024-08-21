import PropTypes from 'prop-types';
import classes from './Input.module.scss';

function Input({className, ...props}) {
  const combinedClassName = `${classes.input}
                       ${className || ''}`

  return <input {...props} className={combinedClassName} />
}

Input.propTypes = {
  className: PropTypes.string
}

export default Input;