import { useState } from 'react';
import Todos from '../Todos/Todods';

const Search = () => {
  const [query, setQuery] = useState('');

  const handledSearch = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <label>
        Search Todo
        <input type='text' onChange={handledSearch} />
      </label>
      <Todos query={query} />
    </div>
  );
};

export default Search;
