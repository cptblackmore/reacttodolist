import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import useFilter from './hooks/useFilter';
import IconButton from './UI/IconButton';
import AddIcon from './UI/svg/AddIcon';
import EmptyState from './UI/svg/EmptyStateIcon';
import Task from './UI/Task';
import TaskFilter from './UI/TaskFilter';
import TaskForm from './UI/TaskForm';

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

  function toggleCheckbox(id) {
    setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task));
  }
  function removeTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }
  function addTask(body) {
    if (body) {
      setTasks([...tasks, {id: nanoid(), completed: false, body}]);
      setIsAddTaskForm(false);
    }
  }
  function showEditTaskForm(task) {
    setTaskToEdit(task);
    setIsEditTaskForm(true);
  }
  function editTask(body) {
    if (body) {
      setTasks(tasks.map(task => task.id !== taskToEdit.id ? task : {...task, body}))
      setIsEditTaskForm(false);
    } 
  }

  return <div className='taskList'>
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
      filteredTasks.map(task => {
        return <Task key={task.id} 
                     task={task} 
                     toggleCheckbox={toggleCheckbox}
                     removeTask={removeTask}
                     showEditTaskForm={showEditTaskForm}
        />
      })
      :
      <div className='emptyState'>
        <EmptyState/>
        Задачи не найдены...
      </div>
    }
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
      }
    `}</style>
  </div>
}

TaskList.propTypes = {
  storageKey: PropTypes.string.isRequired
}

export default TaskList;