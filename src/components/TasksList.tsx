import type { TasksListProps } from "../types/Base.types"
import TaskItem from "./TaskItem";

const TasksList = ({ tasks, changeStatusTask, removeTask, editTask }: TasksListProps) => {
  return (
    <div className="tasks-wrapper">
    {tasks.length 
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