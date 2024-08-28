import PropTypes from 'prop-types';
import Select from '../Select';
import Input from './Input';
import SearchIcon from './svg/SearchIcon';

function TaskFilter({filter, setFilter}) {
  const selectValues = [
    {value: 'all', text: 'Все'},
    {value: 'complete', text: 'Выполнено'},
    {value: 'incomplete', text: 'Не выполнено'}
  ]

  return <div className='filter'>
    <Input value={filter.query} 
           placeholder='Поиск задачи...' 
           onChange={e => {setFilter({...filter, query: e.target.value})}}
           icon={<SearchIcon/>}
    />
    <div className='category'>
      <Select filter={filter} 
              setFilter={setFilter} 
              values={selectValues}
      />
    </div>

    <style jsx>{`
      .filter {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 2em;
        gap: 0.5em;
      }

      .category {
        width: 100%;
        max-width: 120px;
      }
    `}</style>
  </div>
}

TaskFilter.propTypes = {
  filter: PropTypes.object.isRequired,
  setFilter: PropTypes.func.isRequired
}

export default TaskFilter;