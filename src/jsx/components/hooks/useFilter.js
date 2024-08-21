import { useMemo } from 'react';

function useFilter(filter, tasks) {
  const searchedTasks = useMemo(() => {
    if (filter.query) {
      return [...tasks].filter((task) => task.body.toLowerCase().includes(filter.query.toLowerCase()));
    } else {
      return [...tasks];
    }
  }, [filter, tasks])
  
  const categorizedTasks = useMemo(() => {
    if (filter.category === 'all') {
      return [...searchedTasks];
    }
    if (filter.category === 'complete') {
      return [...searchedTasks].filter((task) => task.completed);
    }
    if (filter.category === 'incomplete') {
      return [...searchedTasks].filter((task) => !task.completed);
    }
  }, [filter, searchedTasks])

  return categorizedTasks;
}

export default useFilter;