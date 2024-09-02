import { useMemo } from 'react';

function useFilter(filterQuery, filterCategory, tasks) {
  const searchedTasks = useMemo(() => {
    if (filterQuery) {
      return [...tasks].filter((task) => task.body.toLowerCase().includes(filterQuery.toLowerCase()));
    } else {
      return [...tasks];
    }
  }, [filterQuery, tasks])
  
  const categorizedTasks = useMemo(() => {
    if (filterCategory.value === 'all') {
      return [...searchedTasks];
    }
    if (filterCategory.value === 'complete') {
      return [...searchedTasks].filter((task) => task.completed);
    }
    if (filterCategory.value === 'incomplete') {
      return [...searchedTasks].filter((task) => !task.completed);
    }
  }, [filterCategory, searchedTasks])

  return categorizedTasks;
}

export default useFilter;