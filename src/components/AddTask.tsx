import type { AddTaskProps } from "../types/Base.types";

const AddTask = ({ taskName, setTaskName, check, addNewTask}: AddTaskProps) => {
    return (
        <div className="create-new-task">
            <input type="text" 
                value={taskName}
                placeholder='Добавь текст задачи...'
                onChange={(e) => setTaskName(e.target.value)}
                onKeyUp={(e) => check(e)}
            />
            <button 
            className='add-button'
            type='button'
            disabled={!taskName.trim()}
            onClick={addNewTask}>
                Add new task
            </button>
        </div>
    )

}

export default AddTask;