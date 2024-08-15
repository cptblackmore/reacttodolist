import TaskList from './components/TaskList/TaskList';
import Logo from './components/UI/Logo/Logo';
import './styles/App.scss';

function App() {
  return (
      <div className='App'>
        <Logo/>
        <TaskList storageKey='tasks1'/>
      </div>
  )
}

export default App;
