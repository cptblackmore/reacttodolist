import EditIcon from '../svg/EditIcon'
import DeleteIcon from '../svg/DeleteIcon'
import cl from './Task.module.scss'
import Checkbox from '../Checkbox/Checkbox'
import IconButton from '../IconButton/IconButton'
import { useContext } from 'react'
import { ModalContext } from '../../../context/ModalContext'

function Task({task, index, setTasks, removeTask}) {
  const { setModal } = useContext(ModalContext);
  function toggleCheckbox() {
    setTasks((prevTasks) => {
      return prevTasks.map((task, i) => {
        return i === index ? { ...task, completed: !task.completed } : task;
      })
    })
  }
  
  return <div key={index}
              className={cl.task}
  >
    <div className={cl.content}>
      <Checkbox checked={task.completed} 
                toggle={toggleCheckbox}
                iconColor={'rgb(30, 30, 30, 1)'}
      />
      <span className={cl.text}>{task.body}</span>
    </div>
    <div className={cl.buttons}>
      <IconButton hoverColor='rgb(97, 218, 251, 1)'
                  className={cl.button}
                  onClick={() => {setModal({
                    visible: true,
                    type: 'edit',
                    content: task.body,
                    id: index
                  })}}
      >
        <EditIcon/>
      </IconButton>
      <IconButton onClick={() => {removeTask(index)}}
                  hoverColor='rgb(255, 0, 0, 1)'
                  hoverScale='1'
                  className={cl.button}
      >
        <DeleteIcon/>
      </IconButton>
    </div>
  </div>
}

export default Task;