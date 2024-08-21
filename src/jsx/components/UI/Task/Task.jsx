import PropTypes from 'prop-types'
import Checkbox from '../Checkbox/Checkbox'
import IconButton from '../IconButton/IconButton'
import DeleteIcon from '../svg/DeleteIcon'
import EditIcon from '../svg/EditIcon'
import classes from './Task.module.scss'

function Task({task, toggleCheckbox, removeTask, showEditTaskForm}) {
  return <div className={classes.task}>
    <div className={classes.content}>
      <Checkbox checked={task.completed} 
                toggle={() => {toggleCheckbox(task.id)}}
                iconColor={'rgb(30, 30, 30, 1)'}
      />
      <span className={classes.text}>{task.body}</span>
    </div>
    <div className={classes.buttons}>
      <IconButton hoverColor='rgb(97, 218, 251, 1)'
                  className={classes.button}
                  onClick={() => {showEditTaskForm({...task})}}
      >
        <EditIcon/>
      </IconButton>
      <IconButton onClick={() => {removeTask(task.id)}}
                  hoverColor='rgb(255, 0, 0, 1)'
                  hoverScale='1'
                  className={classes.button}
      >
        <DeleteIcon/>
      </IconButton>
    </div>
  </div>
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  showEditTaskForm: PropTypes.func.isRequired,
  toggleCheckbox: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired
}

export default Task;