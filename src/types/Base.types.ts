export interface ITask {
    title: string
    id: number
    isActive: boolean
}

export type TTaskMode = 'show' | 'edit'

export type TSortMode = 'A-Z' | 'Z-A'

export interface TasksListProps {
    tasks: ITask[]
    changeStatusTask: (id: number) => void
    removeTask: (id: number) => void
    editTask: (id: number, title: string) => void
}

export interface TasksItemProps {
    item: ITask
    index: number
    changeStatusTask: (id: number) => void
    removeTask: (id: number) => void
    editTask: (id: number, title: string) => void
}

export interface AddTaskProps {
    addNewTask: (taskName: string) => void
}

export interface FilterTaskProps {
    searchQuery: string
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>
    handleEnterKey: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export interface SortTaskProps {
    sortMode: TSortMode | undefined
    setSortMode: React.Dispatch<React.SetStateAction<TSortMode | undefined>>
}