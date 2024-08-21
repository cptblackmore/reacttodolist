import PropTypes from 'prop-types';
import classes from './Modal.module.scss';

function Modal({width='500px', children, ...props}) {
  return <div className={classes.modal} {...props}>
    <div className={classes.modalContent} style={{maxWidth: width}}>
      {children}
    </div>
  </div>
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string
}

export default Modal;