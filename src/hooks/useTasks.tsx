import { useMemo, useState } from "react";
import type { KeyboardEvent } from "react";
import type { ITask, TSortMode } from "../types/Base.types";
import { sortItems } from "../utils.ts/tasks";

const useTasks = () => {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [sortMode, setSortMode] = useState<TSortMode | undefined>(undefined);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredTasks = useMemo(() => {
        return tasks.filter((task: ITask) => task.title.toLowerCase().includes(searchQuery.toLowerCase().trim()));
      }, [tasks, searchQuery]);

    const sortedFilteredTasks = useMemo(() => {
      if (sortMode) {
        return sortItems(filteredTasks, sortMode)
      } else {
        return filteredTasks;
      }
    }, [filteredTasks, sortMode])


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
      
      const handleEnterKey = (e: KeyboardEvent<HTMLInputElement>) => {
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
      
      const changeStatusTask = (id: number) => {
        setTasks(tasks =>
          tasks.map(item =>
            item.id === id
              ? { ...item, isActive: !item.isActive }
              : item
          )
        );
      }

    return {
      sortedFilteredTasks,
      addNewTask,
      editTask,
      changeStatusTask,
      removeTask,
      searchQuery,
      setSearchQuery,
      handleEnterKey,
      setSortMode,
      sortMode
    };
}

export default useTasks;