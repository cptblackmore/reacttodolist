import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import useCloseByClickOutside from '../../hooks/useCloseByClickOutside';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Modal from '../Modal/Modal';
import classes from './TaskForm.module.scss';

function TaskForm({title, body='', setIsOpen, submit}) {
  const [text, setText] = useState(body);
  const taskFormRef = useRef(null);
  useCloseByClickOutside(taskFormRef, setIsOpen);

  return <Modal>
    <div className={classes.taskForm} ref={taskFormRef}>
      <div className={classes.content}>
        <h2>{title}</h2>
        <Input value={text}   
               placeholder='Введите текст' 
               onChange={e => {setText(e.target.value)}}
               onKeyDown={e => e.key === 'Enter' && submit(text)}
               autoFocus
        />
      </div>
      <div className={classes.buttons}>
        <Button onClick={() => {setIsOpen(false)}} variant='outlined'>ОТМЕНИТЬ</Button>
        <Button onClick={() => {submit(text)}}>ПРИНЯТЬ</Button>
      </div>
    </div>
  </Modal>
}

TaskForm.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  setIsOpen: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
}

export default TaskForm;