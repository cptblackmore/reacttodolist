import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import TaskForm from '../TaskForm/TaskForm';
import IconButton from '../UI/IconButton/IconButton';
import AddIcon from '../UI/svg/AddIcon';
import Task from '../UI/Task/Task';
import classes from './TaskList.module.scss';

function TaskList({storageKey}) {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem(storageKey)) || []);
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(tasks));
  }, [tasks, storageKey])
  // const [tasks, setTasks] = useState([])
  const [isAddTaskForm, setIsAddTaskForm] = useState(false);
  const [isEditTaskForm, setIsEditTaskForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

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

  return <div className={classes.taskList}>
    {isAddTaskForm ? <TaskForm title='Добавление задачи' setModal={setIsAddTaskForm} submit={addTask}/> : ''}
    {isEditTaskForm ? <TaskForm title='Изменение задачи' body={taskToEdit.body} setModal={setIsEditTaskForm} submit={editTask}/> : ''}
    {tasks.map(task => {
      return <Task key={task.id} 
                   task={task} 
                   toggleCheckbox={toggleCheckbox}
                   removeTask={removeTask}
                   showEditTaskForm={showEditTaskForm}
      />
    })}
    <IconButton onClick={() => {setIsAddTaskForm(true)}}
                className={classes.addButton}
                hoverScale='1.2'
    >
      <AddIcon color1={'rgb(97, 218, 251, 1)'} 
               color2={'rgb(30, 30, 30, 1)'}/>
    </IconButton>
  </div>
}

TaskList.propTypes = {
  storageKey: PropTypes.string.isRequired
}

export default TaskList;