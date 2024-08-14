import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import Modal from '../UI/Modal/Modal';
import classes from './AddTaskForm.module.scss';

function AddTaskForm({setModal, addTask}) {
  const [text, setText] = useState('');

  return <Modal onClick={e => e.target === e.currentTarget && setModal(false)}>
    <div className={classes.taskForm}>
      <div className={classes.content}>
        <h2></h2>
        <Input value={text} 
               placeholder='Введите текст' 
               onChange={(e) => {setText(e.target.value)}}
               autoFocus
        />
      </div>
      <div className={classes.buttons}>
        <Button onClick={() => {setModal(false)}} variant='outlined'>ОТМЕНИТЬ</Button>
        <Button onClick={() => {addTask(text)}}>ПРИНЯТЬ</Button>
      </div>
    </div>
  </Modal>
}

AddTaskForm.propTypes = {
  setModal: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired
}

export default AddTaskForm;