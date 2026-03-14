import { MdDeleteOutline, MdOutlineDone, MdOutlineModeEdit } from "react-icons/md"
import type { TasksItemProps, TTaskMode } from "../types/Base.types"
import { useState } from "react";

const TaskItem = ({item, index, changeStatusTask, removeTask, editTask}: TasksItemProps) => {
    const [mode, setMode] = useState<TTaskMode>('show');
    const [taskName, setTaskName] = useState<string>(item.title);


    const changeTask = () => {
        editTask(item.id, taskName);
        setMode('show');
    }
    return (
        <div className={`task-item ${!item.isActive ? 'inactive' : ''}`}>
          <div className="left-side">
            <input 
                type="checkbox"
                checked={!item.isActive}
                onChange={(e) => changeStatusTask(e, item.id)}
                className='change-status'/>
            <span style={{fontWeight: 'bold', marginRight: '5px'}}>{index + 1}.</span>
            {
                mode === 'show' 
                ? 
                    <span className='task-name'>{taskName}</span>
                : 
                    <input type="text" 
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)} />
            }
          </div>
          <div className="right-side">
            {
                mode === 'show'
                ? 
                    <MdOutlineModeEdit className='icon-button' onClick={() => setMode('edit')}/>
                :
                    <MdOutlineDone className='icon-button' onClick={() => changeTask()}/>
            }
            <MdDeleteOutline 
                className='icon-button'
                onClick={() => removeTask(item.id)} />
          </div>
        </div>
    )
}

export default TaskItem