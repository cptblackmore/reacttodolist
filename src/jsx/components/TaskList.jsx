import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import useUndo from 'use-undo';
import useFilter from './hooks/useFilter';
import Task from './Task';
import TaskForm from './TaskForm';
import Tooltip from './Tooltip';
import Button from './UI/Button';
import Counter from './UI/Counter';
import IconButton from './UI/IconButton';
import AddIcon from './UI/svg/AddIcon';
import EmptyState from './UI/svg/EmptyStateIcon';
import TaskFilter from './UI/TaskFilter';

function TaskList({storageKey}) {
  const initialTasks = JSON.parse(localStorage.getItem(storageKey)) || [];
  const [tasks, { set: setTasks, undo: undoTasks, redo: redoTasks, canUndo, canRedo }] = useUndo([...initialTasks]);
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(tasks.present));
  }, [tasks, storageKey])
  
  const [isAddTaskForm, setIsAddTaskForm] = useState(false);
  const [isEditTaskForm, setIsEditTaskForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const categories = [
    {value: 'all', text: 'Все'},
    {value: 'complete', text: 'Выполнено'},
    {value: 'incomplete', text: 'Не выполнено'}
  ]
  const [filterQuery, setFilterQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState(categories[0]);
  const filteredTasks = useFilter(filterQuery, filterCategory, tasks.present);
  const [isEmptyStateEntered, setIsEmptyStateEntered] = useState(false);
  useEffect(() => {
    if (filteredTasks.length === 0) {
      setIsEmptyStateEntered(true);
    } else {
      setIsEmptyStateEntered(false);
    }
  }, [filteredTasks]);

  function toggleCheckbox(id) {
    setTasks(tasks.present.map(task => task.id === id ? {...task, completed: !task.completed} : task));
  }
  function removeTask(id) {
    setTasks(tasks.present.filter(task => task.id !== id));
  }
  function addTask(body, setIsEntered) {
    if (body) {
      setIsEntered(false);
      setTimeout(() => {
        setTasks([...tasks.present, {id: nanoid(), completed: false, body}]);
        setIsAddTaskForm(false);
      }, 300)
    }
  }
  function showEditTaskForm(task) {
    setTaskToEdit(task);
    setIsEditTaskForm(true);
  }
  function editTask(body, setIsEntered) {
    if (body) {
      setIsEntered(false);
      setTimeout(() => {
        setTasks(tasks.present.map(task => task.id !== taskToEdit.id ? task : {...task, body}))
        setIsEditTaskForm(false);
      }, 300)
    } 
  }
  function handleDragEnd(result) {
    if (!result.destination || result.source.index === result.destination.index) return;
    const sourceIndex = tasks.present.findIndex(task => task.id === filteredTasks[result.source.index].id);
    const destinationIndex = tasks.present.findIndex(task => task.id === filteredTasks[result.destination.index].id);
    const copiedTasks = [...tasks.present];
    const [removedTask] = copiedTasks.splice(sourceIndex, 1);
    copiedTasks.splice(destinationIndex, 0, removedTask);
    setTasks(copiedTasks);
  }

  return <DragDropContext onDragEnd={handleDragEnd}>
    <Droppable droppableId={storageKey}>
      {(provided) => (
        <div className='taskList' ref={provided.innerRef} {...provided.droppableProps}>
          {isAddTaskForm ? <TaskForm title='Добавление задачи' setIsOpen={setIsAddTaskForm} submit={addTask}/> : null}
          {isEditTaskForm ? <TaskForm title='Редактирование задачи' body={taskToEdit.body} setIsOpen={setIsEditTaskForm} submit={editTask}/> : null}
          <div className='filter'>
            <TaskFilter filterQuery={filterQuery} 
                        setFilterQuery={setFilterQuery} 
                        filterCategory={filterCategory} 
                        setFilterCategory={setFilterCategory} 
                        categories={categories} 
            />
          </div>
          {filteredTasks.length !== 0
            ?
            filteredTasks.map((task, index) => {
              return <Task key={task.id} 
                           index={index}
                           task={task} 
                           toggleCheckbox={toggleCheckbox}
                           removeTask={removeTask}
                           showEditTaskForm={showEditTaskForm}
              />
            })
            :
            <div className={`emptyState ${isEmptyStateEntered ? 'entered' : ''}`}>
              <EmptyState/>
              Задачи не найдены...
            </div>
          }
          {provided.placeholder}
          <div className='buttons'>
            <div className='undoButton'>
              <Button onClick={undoTasks} 
                      disabled={!canUndo}
              >
                <Counter count={tasks.past.length} />
                ОТМЕНИТЬ
              </Button>
            </div>
            <div className='addButton'>
              <Tooltip text='Добавление задачи'>
                <IconButton onClick={() => {setIsAddTaskForm(true)}}
                            hoverScale='1.1'
                >
                  <AddIcon/>
                </IconButton>
              </Tooltip>
            </div>
            <div className='undoButton'>
              <Button onClick={redoTasks} 
                      disabled={!canRedo}
              >
                <Counter count={tasks.future.length} />
                ПОВТОРИТЬ
              </Button>
            </div>
          </div>

          <style jsx>{`
            .count {
              display: flex;
              align-items: center;
              justify-content: center;
              outline: 1px solid black;
              width: 1.8em;
              height: 1.8em;
              border-radius: 100px;
              font-size: 1em;
              margin-right: 10px;
            }

            .taskList {
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            .filter {
              width: 100%;
              margin-bottom: 0.5em;
            }

            .buttons {
              display: flex;
              align-items: center;
              margin-top: 0.5em;
              gap: 1em;
            }

            .undoButton {
              display: flex;
              align-items: center;
              height: 2.5em;
            }

            .addButton {
              width: 4em;
              height: 4em;
            }

            .emptyState {
              margin-top: 20px;
              max-width: 170px;
              opacity: 0;
              transition: opacity 1s ease;

              &.entered {
                opacity: 1;
              }
            }
          `}</style>
        </div>
      )}
    </Droppable>
  </DragDropContext>
}

TaskList.propTypes = {
  storageKey: PropTypes.string.isRequired
}

export default TaskList;