import { useMemo, useState } from 'react'
import type { KeyboardEvent } from "react";
import type { ChangeEvent } from "react";

import './App.scss'
import TasksList from './components/TasksList';
import type { ITask } from './types/Base.types';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [taskName, setTaskName] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTasks = useMemo(() => {
    return tasks.filter((task: ITask) => task.title.toLowerCase().includes(searchQuery.toLowerCase().trim()));
  }, [tasks, searchQuery]);

  const addNewTask = () => {
    if (taskName) {
      const newTask = {
        title: taskName,
        id: Date.now(),
        isActive: true
      }
      setTasks(prev => [...prev, newTask])
      setTaskName('')
    }
  }

  const check = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key  === 'Enter') {
      addNewTask();
    }
  }

  const removeTask = (id: number) => {
    setTasks(tasks => tasks.filter(item => item.id !== id))
  }

  const editTask = (id: number, title: string) => {
    const currentTasks = [...tasks];
    currentTasks.map((item: ITask) => {
      if (item.id === id) {
        return { ...item, title }
      }
      return item;
    })
    setTasks(currentTasks);
  }

  const changeStatusTask = (event: ChangeEvent<HTMLInputElement>, id: number) => {
    const currentTasks = [...tasks];
    currentTasks.map((item: ITask) => {
      item.id === id ? item.isActive = !event.target.checked : item
    })
    setTasks(currentTasks);
  }

  return (
    <div className='app-wrapper'>
      <h1>ToDo app</h1>
      <hr />
      <div className="filter-tasks">
        <input type="text" 
               value={searchQuery}
               placeholder='Ищите, поручик!'
               onChange={(e) => setSearchQuery(e.target.value)}
               onKeyUp={(e) => check(e)}
        />
        {/* <button 
          className='add-button'
          type='button'
          disabled={!searchQuery.trim()}
          onClick={addNewTask}>
            Search
        </button> */}
      </div>
      <hr />
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
      <TasksList 
        tasks={filteredTasks}
        changeStatusTask={changeStatusTask}
        editTask={editTask}
        removeTask={removeTask} />
    </div>
  )
}

export default App