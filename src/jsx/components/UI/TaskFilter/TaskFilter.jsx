import PropTypes from 'prop-types';
import Select from '../../Select/Select';
import Input from '../Input/Input';
import SearchIcon from '../svg/SearchIcon';
import classes from './TaskFilter.module.scss';

function TaskFilter({filter, setFilter}) {
  const selectValues = [
    {value: 'all', text: 'Все'},
    {value: 'complete', text: 'Выполнено'},
    {value: 'incomplete', text: 'Не выполнено'}
  ]

  return <div className={classes.filter}>
    <Input value={filter.query} 
           placeholder='Поиск задачи...' 
           onChange={e => {setFilter({...filter, query: e.target.value})}}
           icon={<SearchIcon/>}
    />
    <Select filter={filter} 
            setFilter={setFilter} 
            className={classes.category}
            values={selectValues}
    />
  </div>
}

TaskFilter.propTypes = {
  filter: PropTypes.object.isRequired,
  setFilter: PropTypes.func.isRequired
}

export default TaskFilter;