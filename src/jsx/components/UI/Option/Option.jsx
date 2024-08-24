import PropTypes from 'prop-types';
import classes from './Option.module.scss';

function Option({className, children, ...props}) {
  const combinedClassName = `${className || null}
                             ${classes.option}`

  return <div className={combinedClassName}
              tabIndex='0'
              {...props}
  >
    {children}
  </div>
}

Option.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default Option;