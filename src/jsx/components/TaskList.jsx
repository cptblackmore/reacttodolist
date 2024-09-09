import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import useFilter from './hooks/useFilter';
import Task from './Task';
import TaskForm from './TaskForm';
import IconButton from './UI/IconButton';
import AddIcon from './UI/svg/AddIcon';
import EmptyState from './UI/svg/EmptyStateIcon';
import TaskFilter from './UI/TaskFilter';

function TaskList({storageKey}) {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem(storageKey)) || []);
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(tasks));
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
  const filteredTasks = useFilter(filterQuery, filterCategory, tasks);
  const [isEmptyStateEntered, setIsEmptyStateEntered] = useState(false);
  useEffect(() => {
    if (filteredTasks.length === 0) {
      setIsEmptyStateEntered(true);
    } else {
      setIsEmptyStateEntered(false);
    }
  }, [filteredTasks]);

  function toggleCheckbox(id) {
    setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task));
  }
  function removeTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }
  function addTask(body, setIsEntered) {
    if (body) {
      setIsEntered(false);
      setTimeout(() => {
        setTasks([...tasks, {id: nanoid(), completed: false, body}]);
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
        setTasks(tasks.map(task => task.id !== taskToEdit.id ? task : {...task, body}))
        setIsEditTaskForm(false);
      }, 300)
    } 
  }
  function handleDragEnd(result) {
    if (!result.destination || result.source.index === result.destination.index) return;
    const sourceIndex = tasks.findIndex(task => task.id === filteredTasks[result.source.index].id);
    const destinationIndex = tasks.findIndex(task => task.id === filteredTasks[result.destination.index].id);
    const copiedTasks = [...tasks];
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
          <div className='addButton'>
            <IconButton onClick={() => {setIsAddTaskForm(true)}}
                        hoverScale='1.1'
            >
              <AddIcon/>
            </IconButton>
          </div>

          <style jsx>{`
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

            .addButton {
              margin-top: 0.5em;
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