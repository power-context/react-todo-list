export interface ITask {
    title: string
    id: number
    isActive: boolean
}

export type TTaskMode = 'show' | 'edit'

export interface TasksListProps {
    tasks: ITask[]
    changeStatusTask: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void
    removeTask: (id: number) => void
    editTask: (id: number, title: string) => void
}

export interface TasksItemProps {
    item: ITask
    index: number
    changeStatusTask: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void
    removeTask: (id: number) => void
    editTask: (id: number, title: string) => void
}

export interface AddTaskProps {
    taskName: string
    setTaskName: React.Dispatch<React.SetStateAction<string>>
    check: (e: React.KeyboardEvent<HTMLInputElement>) => void
    addNewTask: () => void
}

export interface FilterTaskProps {
    searchQuery: string
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>
    check: (e: React.KeyboardEvent<HTMLInputElement>) => void
}