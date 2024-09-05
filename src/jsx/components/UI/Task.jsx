import { Draggable } from '@hello-pangea/dnd'
import PropTypes from 'prop-types'
import { useContext, useState } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import Checkbox from '../UI/Checkbox'
import IconButton from '../UI/IconButton'
import DeleteIcon from './svg/DeleteIcon'
import EditIcon from './svg/EditIcon'

function Task({task, index, toggleCheckbox, removeTask, showEditTaskForm}) {
  const theme = useContext(ThemeContext);
  const [isDraggableFocused, setIsDraggableFocused] = useState(false);

  return <Draggable draggableId={task.id} key={task.id} index={index}>
    {(provided, snapshot) => (
      <div className='task'
           ref={provided.innerRef} 
           {...provided.draggableProps} 
      >
        <div className={`content ${isDraggableFocused ? 'is-draggable-focused' : ''} ${snapshot.isDragging ? 'is-dragging' : ''}`}>
          <div className='checkbox'>
            <Checkbox checked={task.completed} 
                      toggle={() => {toggleCheckbox(task.id)}}
                      iconColor={theme.bg}
            />
          </div>
          <div className='draggable-area'
               onFocus={() => {setIsDraggableFocused(true)}}
               onBlur={() => {setIsDraggableFocused(false)}}
               {...provided.dragHandleProps} 
               tabIndex='0'
          >
            <span className='text'>{task.body}</span>
          </div>
        </div>
        <div className={`buttons ${snapshot.isDragging ? 'hidden' : ''}`}>
          <div className='button'>
            <IconButton hoverColor={theme.accent}
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
            width: 100%;
            min-height: 2em;
            border-radius: 5px;

            &.is-draggable-focused {
              outline: 2px solid ${theme.fg};
            }
            &.is-dragging {
              outline: 2px dashed ${theme.accent};
            }
          }

          .checkbox {
            padding: 0 0.5em;
          }
          
          .draggable-area {
            display: flex;
            align-items: center;
            width: 100%;
            cursor: grab;
            text-align: start;
            min-height: 2em;

            &:focus-visible {
              outline: none;
            }
          }

          .text {
            font-size: 1.2em;
          }

          .buttons {
            display: flex;
            padding-left: 0.5em;
            opacity: 1;
            transition: opacity 0.2s ease;

            &.hidden {
              opacity: 0;
            }
          }

          .button {
            width: 2.5em;
            height: 2.5em;
          }`}</style>
      </div>
    )}
  </Draggable>
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  showEditTaskForm: PropTypes.func.isRequired,
  toggleCheckbox: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired
}

export default Task;