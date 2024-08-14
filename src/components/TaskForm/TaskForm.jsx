import PropTypes from 'prop-types';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import classes from './TaskForm.module.scss';

function TaskForm({addNewTask, editTask}) {
  const title = {
    add: 'Добавление задачи',
    edit: 'Редактирование задачи'
  }
  
  return <div className={classes.taskForm}>
    <div className={classes.content}>
      <h2></h2>
      <Input value={''} 
             placeholder='Введите текст' 
             onChange={(e) => {}}
      />
    </div>
    <div className={classes.buttons}>
      <Button onClick={() => {}} 
              variant='outlined'>ОТМЕНА
      </Button>
      <Button onClick={() => {
          // if (!modal.content) {
          //     return;
          // }
      
          // if (modal.type === 'add') {
          //     addNewTask();
          //     setModal({...modal, visible: false})
          // } else if (modal.type === 'edit') {
          //     editTask();
          //     setModal({...modal, visible: false})
          // }
      }}>ПРИНЯТЬ</Button>
    </div>
  </div>
}

TaskForm.propTypes = {
    addNewTask: PropTypes.func.isRequired,
    editTask: PropTypes.func.isRequired,
}

export default TaskForm;