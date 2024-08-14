import { useContext, useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import classes from "./TaskForm.module.scss";   
import { ModalContext } from "../../context/ModalContext";

function TaskForm({addNewTask, editTask}) {
    const { modal, setModal } = useContext(ModalContext);
    const title = {
        add: 'Добавление задачи',
        edit: 'Редактирование задачи'
    }

    return <div className={classes.taskForm}>
        <div className={classes.content}>
            <h2>{title[modal.type]}</h2>
            <Input value={modal.content} 
                placeholder='Введите текст' 
                onChange={(e) => setModal({...modal, content: e.target.value})}
            />
        </div>
        <div className={classes.buttons}>
            <Button onClick={() => setModal({...modal, visible: false})} 
                    variant='outlined'>ОТМЕНА
            </Button>
            <Button onClick={() => {
                if (!modal.content) {
                    return;
                }

                if (modal.type === 'add') {
                    addNewTask();
                    setModal({...modal, visible: false})
                } else if (modal.type === 'edit') {
                    editTask();
                    setModal({...modal, visible: false})
                }
            }}>ПРИНЯТЬ</Button>
        </div>
    </div>
}

export default TaskForm;