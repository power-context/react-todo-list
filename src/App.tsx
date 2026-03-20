import { useMemo, useState } from 'react'
import type { KeyboardEvent } from "react";
import type { ChangeEvent } from "react";

import './App.scss'
import TasksList from './components/TasksList';
import type { ITask } from './types/Base.types';
import AddTask from './components/AddTask';
import FilterTasks from './components/FilterTasks';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTasks = useMemo(() => {
    return tasks.filter((task: ITask) => task.title.toLowerCase().includes(searchQuery.toLowerCase().trim()));
  }, [tasks, searchQuery]);

  const addNewTask = (taskName: string) => {
    if (taskName) {
      const newTask = {
        title: taskName,
        id: Date.now(),
        isActive: true
      }
      setTasks(prev => [...prev, newTask])
    }
  }

  const checkKeyboardEvent = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key  === 'Enter') {
      if (e.currentTarget.value) {
        addNewTask(e.currentTarget.value);
      }
    }
  }

  const removeTask = (id: number) => {
    setTasks(tasks => tasks.filter(item => item.id !== id))
  }

  const editTask = (id: number, title: string) => {
    setTasks(tasks => tasks.map(item => {
      return item.id === id ? { ...item, title } : item
    }));
  }

  const changeStatusTask = (event: ChangeEvent<HTMLInputElement>, id: number) => {
    setTasks(tasks => tasks.map((item: ITask) => {
      item.id === id ? item.isActive = !event.target.checked : item
      return item;
    }));
  }

  return (
    <div className='app-wrapper'>
      <h1>ToDo app</h1>
      <hr />
      <FilterTasks
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        checkKeyboardEvent={checkKeyboardEvent}
      />
      <hr />
      <AddTask
        addNewTask={addNewTask}
      />
      <TasksList 
        tasks={filteredTasks}
        changeStatusTask={changeStatusTask}
        editTask={editTask}
        removeTask={removeTask} />
    </div>
  )
}

export default App