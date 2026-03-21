import type { FilterTaskProps } from "../types/Base.types"

const FilterTasks = ({ searchQuery, setSearchQuery, handleEnterKey }: FilterTaskProps) => {
    return (
        <div className="filter-tasks">
        <input type="text" 
               value={searchQuery}
               placeholder='Ищите, поручик!'
               onChange={(e) => setSearchQuery(e.target.value)}
               onKeyUp={(e) => handleEnterKey(e)}
        />
      </div>
    )
}

export default FilterTasks