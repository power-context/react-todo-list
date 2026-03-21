import type { ITask, TSortMode } from "../types/Base.types"

export const sortItems = (items: ITask[], sortMode: TSortMode) => {
    return items.sort((a: ITask, b: ITask) => {
      switch (sortMode) {
        case 'A-Z': {
          return a.title.localeCompare(b.title, undefined, 
            { numeric: true, sensitivity: 'base' })
        }
        case 'Z-A': {
          return b.title.localeCompare(a.title, undefined, 
            { numeric: true, sensitivity: 'base' })
        }
      }
    })
  }