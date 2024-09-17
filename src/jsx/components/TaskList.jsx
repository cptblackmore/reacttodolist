import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import useUndo from 'use-undo';
import { ThemeContext } from '../../context/ThemeContext';
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
  
  const theme = useContext(ThemeContext);
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
  function handleKeyDown(event) {
    if (event.ctrlKey && !event.shiftKey && event.keyCode === 90) {
      undoTasks();
    }
    if (event.ctrlKey && event.shiftKey && event.keyCode === 90) {
      redoTasks();
    }
  } 

  return <DragDropContext onDragEnd={handleDragEnd}>
    <Droppable droppableId={storageKey}>
      {(provided, snapshot) => (
        <section className='taskList' aria-live='polite' ref={provided.innerRef} {...provided.droppableProps}>
          {isAddTaskForm ? <TaskForm title='Добавление задачи' setIsOpen={setIsAddTaskForm} submit={addTask}/> : null}
          {isEditTaskForm ? <TaskForm title='Редактирование задачи' body={taskToEdit.body} setIsOpen={setIsEditTaskForm} submit={editTask}/> : null}
          <header className='filter'>
            <TaskFilter filterQuery={filterQuery} 
                        setFilterQuery={setFilterQuery} 
                        filterCategory={filterCategory} 
                        setFilterCategory={setFilterCategory} 
                        categories={categories} 
            />
          </header>
          <main className='tasks' onKeyDown={handleKeyDown}>
            {filteredTasks.length !== 0 
              ?
              filteredTasks.map((task, index) => {
                return <div className='task' key={task.id}>
                  <Task index={index}
                        task={task}
                        toggleCheckbox={toggleCheckbox}
                        removeTask={removeTask}
                        showEditTaskForm={showEditTaskForm}
                        isDragging={snapshot.isDraggingOver}
                  />
                </div>
              })
              :
              <div role='alert' className={`emptyState ${isEmptyStateEntered ? 'entered' : ''}`}>
                <EmptyState/>
                Задачи не найдены...
              </div>
            }
          </main>
          {provided.placeholder}
          <div className='buttons' role='group' aria-label='Действия со списком'>
            <div className='undoButton'>
              <Button onClick={undoTasks} 
                      disabled={!canUndo}
                      aria-label={`Отменить изменения: ${tasks.past.length} шагов`}
              >
                <div className='counter'>
                  <Counter count={tasks.past.length} />
                </div>
                ОТМЕНИТЬ
              </Button>
            </div>
            <div className='addButton'>
              <Tooltip text='Добавить задачу'>
                <IconButton onClick={() => {setIsAddTaskForm(true)}}
                            hoverScale='1.1'
                            aria-label='Добавить задачу'
                >
                  <AddIcon/>
                </IconButton>
              </Tooltip>
            </div>
            <div className='redoButton'>
              <Button onClick={redoTasks} 
                      disabled={!canRedo}
                      aria-label={`Повторить изменения: ${tasks.future.length} шагов`}
              >
                <div className='counter'>
                  <Counter count={tasks.future.length} />
                </div>
                ПОВТОРИТЬ
              </Button>
            </div>
          </div>

          <style jsx>{`
            .taskList {
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            .tasks {
              width: 100%;
            }

            .task {
              position: relative;
              width: 100%;

              &+.task::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 1px;
                background: linear-gradient(
                  to right, 
                  transparent,
                  ${theme.accentTranslucent} 3%,
                  ${theme.accentTranslucent} 98%,
                  transparent
                );
              }
            }

            .filter {
              width: 100%;
              margin-bottom: 0.5em;
            }

            .buttons {
              display: grid;
              grid-template-columns: 2fr 1fr 2fr;
              align-items: center;
              margin-top: 0.5em;
              gap: 1em;
            }

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
            
            .undoButton {
              grid-column: 1;
              justify-self: end;
              display: flex;
              height: 2.5em;
            }

            .redoButton {
              grid-column: 3;
              justify-self: start;
              display: flex;
              height: 2.5em;
            }

            .addButton {
              grid-column: 2;
              justify-self: center;
              width: 4em;
              height: 4em;
            }

            .emptyState {
              margin: 0.5em auto;
              max-width: 170px;
              opacity: 0;
              transition: opacity 1s ease;

              &.entered {
                opacity: 1;
              }
            }

            @media (max-width: 500px) {
              .buttons {
                gap: 0.2em;
                font-size: 14px;
              }
              .counter {
                display: none;
              }
            }
          `}</style>
        </section>
      )}
    </Droppable>
  </DragDropContext>
}

TaskList.propTypes = {
  storageKey: PropTypes.string.isRequired
}

export default TaskList;