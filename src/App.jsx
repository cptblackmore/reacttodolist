import { useEffect, useState } from 'react'
import './styles/App.scss'
import Task from './components/UI/Task/Task';
import LogoIcon from './components/UI/svg/LogoIcon'
import IconButton from './components/UI/IconButton/IconButton';
import AddIcon from './components/UI/svg/AddIcon';
import Modal from './components/UI/Modal/Modal';
import TaskForm from './components/TaskForm/TaskForm';
import { ModalContext } from './context/ModalContext';

function App() {
  const initialTasks = JSON.parse(localStorage.getItem('tasks'))
  const [tasks, setTasks] = useState(initialTasks);
  const [modal, setModal] = useState({
    visible: false,
    type: 'add',
    content: '',
    id: 0
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  
  function removeTask(index) {
    setTasks([...tasks].filter((t) => tasks.indexOf(t) !== index));
  }
  function addNewTask() {
    const newTasks = [...tasks, {completed: false, body: modal.content}];
    setTasks(newTasks);
  }
  function editTask() {    
    const newTasks = [...tasks];
    newTasks[modal.id].body = modal.content;
    setTasks(newTasks);
  }

  return (
    <ModalContext.Provider value={{
      modal, 
      setModal,
    }}>
      <div className='App'>
        <Modal>
          <TaskForm addNewTask={addNewTask} editTask={editTask}/>
        </Modal>
        <div className='header'>
          <div className='logo'>
            <LogoIcon/>
          </div>
          <h1>ToDo List</h1>
        </div>
        {tasks.map((task, index) => {
          return <Task key={index} 
                       task={task} 
                       index={index} 
                       setTasks={setTasks} 
                       removeTask={removeTask}
          />
        })}
        <IconButton onClick={() => {setModal({
          visible: true,
          type: 'add',
          content: '',
          id: 0
        })}}
                    className='addButton'
                    hoverScale='1.2'
        >
          <AddIcon color1={'rgb(97, 218, 251, 1)'} 
                  color2={'rgb(30, 30, 30, 1)'}/>
        </IconButton>
      </div>
    </ModalContext.Provider>
  )
}

export default App
