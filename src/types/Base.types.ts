export interface ITask {
    title: string;
    id: number;
    isActive: boolean;
}

export type TTaskMode = 'show' | 'edit';