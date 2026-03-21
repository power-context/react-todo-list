import './App.scss'
import TasksList from './components/TasksList';
import AddTask from './components/AddTask';
import FilterTasks from './components/FilterTasks';
import useTasks from './hooks/useTasks';
import SortTasks from './components/SortTasks';

function App() {
  const {
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
      <SortTasks 
        sortMode={sortMode}
        setSortMode={setSortMode}
      />
      <TasksList 
        tasks={sortedFilteredTasks}
        changeStatusTask={changeStatusTask}
        editTask={editTask}
        removeTask={removeTask} />
    </div>
  )
}

export default App