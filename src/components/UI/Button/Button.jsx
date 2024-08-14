import PropTypes from 'prop-types';
import classes from './Button.module.scss';

function Button({children, variant='filled', ...props}) {
  const className = [classes.button];
  if (variant === 'filled') {
    className.push(classes.filled);
  } else if (variant === 'outlined') {
    className.push(classes.outlined);
  }
  
  return <button {...props} className={className.join(' ')}>
    {children}
  </button>
}

Button.propTypes = {
    children: PropTypes.node,
    variant: PropTypes.string
}

export default Button;