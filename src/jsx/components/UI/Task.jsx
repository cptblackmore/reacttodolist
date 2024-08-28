import PropTypes from 'prop-types'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import Checkbox from '../UI/Checkbox'
import IconButton from '../UI/IconButton'
import DeleteIcon from './svg/DeleteIcon'
import EditIcon from './svg/EditIcon'

function Task({task, toggleCheckbox, removeTask, showEditTaskForm}) {
  const theme = useContext(ThemeContext);

  return <div className='task'>
    <div className='content'>
      <Checkbox checked={task.completed} 
                toggle={() => {toggleCheckbox(task.id)}}
                iconColor={theme.base.background}
      />
      <span className='text'>{task.body}</span>
    </div>
    <div className='buttons'>
      <div className='button'>
        <IconButton hoverColor={theme.accent.main}
                    onClick={() => {showEditTaskForm({...task})}}
        >
          <EditIcon/>
        </IconButton>
      </div>
      <div className='button'>
        <IconButton onClick={() => {removeTask(task.id)}}
                    hoverColor='rgb(255, 0, 0, 1)'
                    hoverScale='1'
        >
          <DeleteIcon/>
        </IconButton>
      </div>
    </div>

  <style jsx>{`
    .task {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0.5em 0;
    }

    .content {
      display: flex;
      align-items: center;
    }

    .text {
      text-align: left;
      font-size: 1.2em;
      padding: 0 0.5em;
    }

    .buttons {
      display: flex;
    }

    .button {
      width: 2.7em;
      height: 2.7em;
    }`}</style>
  </div>
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  showEditTaskForm: PropTypes.func.isRequired,
  toggleCheckbox: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired
}

export default Task;