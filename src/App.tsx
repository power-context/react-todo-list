import './App.scss'
import TasksList from './components/TasksList';
import AddTask from './components/AddTask';
import FilterTasks from './components/FilterTasks';
import useTasks from './hooks/useTasks';

function App() {
  const {
    filteredTasks,
    addNewTask,
    editTask,
    changeStatusTask,
    removeTask,
    searchQuery,
    setSearchQuery,
    handleEnterKey,
  } = useTasks();

  return (
    <div className='app-wrapper'>
      <h1>ToDo app</h1>
      <hr />
      <FilterTasks
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleEnterKey={handleEnterKey}
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