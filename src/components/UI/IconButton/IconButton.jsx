import PropTypes from 'prop-types';
import classes from './IconButton.module.scss';

function IconButton({children, hoverColor, hoverScale, className, ...props}) {
  const combinedClassName = `${classes.button} 
                             ${hoverColor ? classes.colorable : ''} 
                             ${hoverScale ? classes.scalable: ''} 
                             ${className || ''}`
  
  return <button  {...props}
                  className={combinedClassName} 
                  style={{'--hover-color': hoverColor, '--hover-scale': hoverScale}}
  >
    {children}
  </button>
}

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  hoverColor: PropTypes.string,
  hoverScale: PropTypes.string,
  className: PropTypes.string,
}

export default IconButton;