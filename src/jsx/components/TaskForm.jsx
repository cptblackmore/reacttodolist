import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import useCloseByClickEscape from './hooks/useCloseByClickEscape';
import useCloseByClickOutside from './hooks/useCloseByClickOutside';
import Button from './UI/Button';
import Input from './UI/Input';
import Modal from './UI/Modal';

function TaskForm({title, body='', setIsOpen, submit}) {
  const [text, setText] = useState(body);
  const [isEntered, setIsEntered] = useState(false);
  const taskFormRef = useRef(null);
  useCloseByClickOutside(taskFormRef, setIsOpen, setIsEntered);
  useCloseByClickEscape(setIsOpen, setIsEntered);

  function closeByClick() {
    setIsEntered(false);
    setTimeout(() => {setIsOpen(false)}, 300)
  }

  useEffect(() => {
    setIsEntered(true);
  }, [])

  return <Modal isEntered={isEntered} renderContent={() => {
      return <div className='taskForm' ref={taskFormRef}>
        <div className='content'>
          <h2 className='title' id='modal-title'>{title}</h2>
          <div className='input'>
            <Input value={text}
                   setValue={setText}
                   placeholder='Введите текст' 
                   onKeyDown={e => e.key === 'Enter' && submit(text, setIsEntered)}
                   autoFocus={true}
                   aria-labelledby='modal-title'
            />
          </div>
        </div>
        <div className='buttons'>
          <Button onClick={closeByClick} variant='outlined' aria-label='Отменить и закрыть окно'>ОТМЕНИТЬ</Button>
          <Button onClick={() => {submit(text, setIsEntered)}} aria-label='Принять и закрыть окно'>ПРИНЯТЬ</Button>
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
      </div>
  }}>
  </Modal>
}

TaskForm.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  setIsOpen: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
}

export default TaskForm;