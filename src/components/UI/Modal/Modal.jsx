import PropTypes from 'prop-types';
import classes from './Modal.module.scss';

function Modal({children}) {
  const rootClasses = [classes.modal];
  // if () {
  //     rootClasses.push(classes.active);
  // }
  
  return <div className={rootClasses.join(' ')}>
  <div className={classes.modalContent}>
    {children}
  </div>
  </div>
}

Modal.propTypes = {
  children: PropTypes.node.isRequired
}

export default Modal;