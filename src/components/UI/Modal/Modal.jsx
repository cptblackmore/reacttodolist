import { useContext } from 'react';
import { ModalContext } from '../../../context/ModalContext';
import classes from './Modal.module.scss'

function Modal({children}) {
    const { modal, setModal } = useContext(ModalContext);
    const rootClasses = [classes.modal];
    if (modal.visible) {
        rootClasses.push(classes.active);
    }

    return <div onClick={(e) => {if (e.target === e.currentTarget) setModal(false)}} className={rootClasses.join(' ')}>
        <div className={classes.modalContent}>
            {children}
        </div>
    </div>
}

export default Modal;