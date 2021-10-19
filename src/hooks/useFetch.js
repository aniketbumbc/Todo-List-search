import { useState, useEffect } from 'react';

export const useFetch = () => {
  const url = 'https://jsonplaceholder.typicode.com/todos';

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'api-key': 'abc',
          },
        });

        if (response.ok) {
          setLoading(false);
          response.json().then((data) => setData(data));
        } else {
          throw new Error('Something Went Wrong ' + response.status);
        }
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
