import PropTypes from 'prop-types';
import classes from './Modal.module.scss';

function Modal({children, ...props}) {
  return <div className={classes.modal} {...props}>
    <div className={classes.modalContent}>
      {children}
    </div>
  </div>
}

Modal.propTypes = {
  children: PropTypes.node.isRequired
}

export default Modal;