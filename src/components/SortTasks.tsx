import type { SortTaskProps, TSortMode } from "../types/Base.types"

const SortTasks = ({ sortMode, setSortMode }: SortTaskProps ) => {
    const defaultValue = 'выберите вид сортировки'
    const onChange = (val: TSortMode) => {
        setSortMode(val);
    }
    return (
        <div className="sort-wrapper">
            <label htmlFor="tasks">Сортировка по: </label>
            <select 
                name="tasks"
                id="tasks"
                value={sortMode ?? ''}
                onChange={event => onChange(event.target.value as TSortMode)}>
                <option disabled value="">{defaultValue}</option>
                <option value="A-Z">От А до Я</option>
                <option value="Z-A">От Я до А</option>
            </select>
        </div>
    )
}

export default SortTasks