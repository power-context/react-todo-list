import { useState } from "react";
import type { KeyboardEvent } from "react";
import type { AddTaskProps } from "../types/Base.types";

const AddTask = ({addNewTask}: AddTaskProps) => {
    const [taskName, setTaskName] = useState<string>('');
    const checkNewTask = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key  === 'Enter') {
          if (e.currentTarget.value) {
            addNewTask(e.currentTarget.value);
            setTaskName('');
          }
        }
    }

    return (
        <div className="create-new-task">
            <input type="text" 
                value={taskName}
                placeholder='Добавь текст задачи...'
                onChange={(e) => setTaskName(e.target.value)}
                onKeyUp={(e) => checkNewTask(e)}
            />
            <button 
            className='add-button'
            type='button'
            disabled={!taskName.trim()}
            onClick={() => { addNewTask(taskName); setTaskName('') }}>
                Add new task
            </button>
        </div>
    )

}

export default AddTask;