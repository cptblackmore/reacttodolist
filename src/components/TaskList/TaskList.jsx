import { useEffect, useState } from 'react';
import IconButton from '../UI/IconButton/IconButton';
import AddIcon from '../UI/svg/AddIcon';
import Task from '../UI/Task/Task';
import classes from './TaskList.module.scss';


function TaskList() {
  const initialTasks = JSON.parse(localStorage.getItem('tasks'));
  const [tasks, setTasks] = useState(initialTasks || []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]);

  function removeTask(index) {
    setTasks([...tasks].filter((t) => tasks.indexOf(t) !== index));
  }

  return <div className={classes.taskList}>
    {tasks.map((task, index) => {
      return <Task key={index} 
                   task={task} 
                   index={index} 
                   setTasks={setTasks} 
                   removeTask={removeTask}
      />
    })}
    <IconButton onClick={() => {}}
                className={classes.addButton}
                hoverScale='1.2'
    >
      <AddIcon color1={'rgb(97, 218, 251, 1)'} 
               color2={'rgb(30, 30, 30, 1)'}/>
    </IconButton>
  </div>
}

export default TaskList;