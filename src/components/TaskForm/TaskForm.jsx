import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import Modal from '../UI/Modal/Modal';
import classes from './TaskForm.module.scss';

function AddTaskForm({title, body='', setModal, submit}) {
  const [text, setText] = useState(body);

  return <Modal onClick={e => e.target === e.currentTarget && setModal(false)}>
    <div className={classes.taskForm}>
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
        <Button onClick={() => {setModal(false)}} variant='outlined'>ОТМЕНИТЬ</Button>
        <Button onClick={() => {submit(text)}}>ПРИНЯТЬ</Button>
      </div>
    </div>
  </Modal>
}

AddTaskForm.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  setModal: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
}

export default AddTaskForm;