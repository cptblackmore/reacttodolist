import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import Button from '../UI/Button';
import useCloseByClickEscape from '../hooks/useCloseByClickEscape';
import useCloseByClickOutside from '../hooks/useCloseByClickOutside';
import Input from './Input';
import Modal from './Modal';

function TaskForm({title, body='', setIsOpen, submit}) {
  const [text, setText] = useState(body);
  const taskFormRef = useRef(null);
  useCloseByClickOutside(taskFormRef, setIsOpen);
  useCloseByClickEscape(setIsOpen);

  return <Modal>
    <div className='taskForm' ref={taskFormRef}>
      <div className='content'>
        <h2 className='title'>{title}</h2>
        <div className='input'>
          <Input value={text}   
                placeholder='Введите текст' 
                onChange={e => {setText(e.target.value)}}
                onKeyDown={e => e.key === 'Enter' && submit(text)}
                autoFocus
          />
        </div>
      </div>
      <div className='buttons'>
        <Button onClick={() => {setIsOpen(false)}} variant='outlined'>ОТМЕНИТЬ</Button>
        <Button onClick={() => {submit(text)}}>ПРИНЯТЬ</Button>
      </div>
    </div>

  <style jsx>{`
    .taskForm {
      display: flex;
      flex-direction: column;
      gap: 5em;
      width: 100%;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 1em;
      width: 100%;
    }

    .title {
      margin: 0 0 0.5em 0;
    }

    .input {
      height: 2em;
    }

    .buttons {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  `}</style>
  </Modal>
}

TaskForm.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  setIsOpen: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
}

export default TaskForm;