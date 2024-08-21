import PropTypes from 'prop-types';
import classes from './Option.module.scss';

function Option({className, children, ...props}) {
  const combinedClassName = `${className || ''}
                             ${classes.option}`

  return <div className={combinedClassName} {...props}>
    {children}
  </div>
}

Option.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default Option;