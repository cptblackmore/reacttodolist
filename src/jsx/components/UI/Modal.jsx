import PropTypes from 'prop-types';
import { useContext } from 'react';
import FocusLock from 'react-focus-lock';
import { ThemeContext } from '../../../context/ThemeContext';

function Modal({width='500px', isEntered, renderContent}) {
  const theme = useContext(ThemeContext);

  return <div className={`modal ${isEntered ? 'entered' : ''}`}>
    <FocusLock className='modal-focus-lock' returnFocus>
      <div className={`modalContent ${isEntered ? 'entered' : ''}`} style={{maxWidth: width}}>
        {renderContent()}
      </div>
    </FocusLock>

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
      opacity: 0;
      transition: all 0.3s ease;

      &.entered {
        opacity: 1;
      }
    }

    :global(.modal-focus-lock) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    .modalContent {
      background-color: ${theme.bg};
      border: 1px solid ${theme.fg};
      padding: 10px;
      border-radius: 0.8em;
      width: 100%;
      transform: scale(0.8);
      transition: all 0.1s ease;

      &.entered {
        transform: scale(1);
      }
    }
  `}</style>
  </div>
}

Modal.propTypes = {
  width: PropTypes.string,
  isEntered: PropTypes.bool.isRequired,
  renderContent: PropTypes.func.isRequired
}

export default Modal;