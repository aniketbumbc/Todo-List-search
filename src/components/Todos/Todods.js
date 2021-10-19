import { useFetch } from '../../hooks/useFetch';
import { useState, useMemo } from 'react';

const handledFiltedTodos = (query, data) => {
  if (!query) return data;

  const upperCaseQuery = query.toUpperCase();

  return data.filter((todo) => {
    const titleUpperCase = todo.title.toUpperCase();
    return titleUpperCase.includes(upperCaseQuery);
  });
};

const Todos = ({ query }) => {
  const { data, loading, error } = useFetch();
  const [filterData, setFilterData] = useState([]);

  useMemo(() => {
    setFilterData(handledFiltedTodos(query, data));
  }, [query, data]);

  const handleTodoSort = () => {
    const newSortedData = data
      .slice(0)
      .sort((a, b) => b.completed - a.completed);

    setFilterData(newSortedData);
  };

  return (
    <div className='todo-container'>
      {!!filterData.length && <h2> List of Todods</h2>}
      {loading && <h4>loading.......</h4>}
      {error && <h4>{error}</h4>}
      {filterData &&
        filterData.map((todo) => (
          <div key={todo.id}>
            <h5
              className={todo.completed ? 'green' : 'red'}
              onClick={handleTodoSort}
            >
              Title : {todo.title}
            </h5>
          </div>
        ))}

      {!filterData.length && !loading && <h2> To do not found</h2>}
    </div>
  );
};

export default Todos;
