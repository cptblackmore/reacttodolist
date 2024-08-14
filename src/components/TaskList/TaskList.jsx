import { useState } from 'react';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import IconButton from '../UI/IconButton/IconButton';
import AddIcon from '../UI/svg/AddIcon';
import Task from '../UI/Task/Task';
import classes from './TaskList.module.scss';


function TaskList() {
  // const initialTasks = JSON.parse(localStorage.getItem('tasks'));
  // const [tasks, setTasks] = useState(initialTasks || []);

  // useEffect(() => {
  //   localStorage.setItem('tasks', JSON.stringify(tasks))
  // }, [tasks]);

  const [tasks, setTasks] = useState([])
  const [modal, setModal] = useState(false);

  function removeTask(index) {
    setTasks([...tasks].filter((t) => tasks.indexOf(t) !== index));
  }
  function addTask(body) {
    if (body) {
      setTasks([...tasks, {completed: false, body}]);
      setModal(false);
    }
  }

  return <div className={classes.taskList}>
    {modal ? <AddTaskForm setModal={setModal} addTask={addTask}/> : ''}
    {tasks.map((task, index) => {
      return <Task key={index} 
                   task={task} 
                   index={index} 
                   setTasks={setTasks} 
                   removeTask={removeTask}
      />
    })}
    <IconButton onClick={() => {setModal(true)}}
                className={classes.addButton}
                hoverScale='1.2'
    >
      <AddIcon color1={'rgb(97, 218, 251, 1)'} 
               color2={'rgb(30, 30, 30, 1)'}/>
    </IconButton>
  </div>
}

export default TaskList;