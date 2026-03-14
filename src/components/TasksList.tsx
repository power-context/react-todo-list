import type { ITask } from "../types/Base.types"
import TaskItem from "./TaskItem";

const TasksList = ({ tasks, changeStatusTask, removeTask, editTask }: { tasks: ITask[], changeStatusTask: any, removeTask: any, editTask: any }) => {
  return (
    <div className="tasks-wrapper">
    {tasks && tasks.length 
      ?
      tasks.map((item, index) => 
        <TaskItem 
            key={item.id}
            item={item}
            index={index}
            changeStatusTask={changeStatusTask}
            editTask={editTask}
            removeTask={removeTask} />
      )
      :
      <span>нет задач</span>
    }
  </div>
  )
}

export default TasksList