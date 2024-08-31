import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

function Modal({width='500px', children, ...props}) {
  const theme = useContext(ThemeContext);

  return <div className='modal' {...props}>
    <div className='modalContent' style={{maxWidth: width}}>
      {children}
    </div>

  <style jsx>{`
    .modal {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 100;
      padding: 0 20px;
      background-color: rgb(0, 0, 0, 0.7);
    }

    .modalContent {
      background-color: ${theme.bg};
      border: 1px solid ${theme.fg};
      padding: 10px;
      border-radius: 0.8em;
      width: 100%;
    }
  `}</style>
  </div>
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string
}

export default Modal;