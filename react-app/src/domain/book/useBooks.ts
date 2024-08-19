import { useState, useEffect } from 'react';
import { useStateMachine } from '../../hooks/useStateMachine';
import { getBooks } from './api';
import { Book } from './Book';

export const useBooks = () => {
  const { state, next, data: msg } = useStateMachine();
  const [books, setBooks] = useState<Book[]>([]);
  const [lastRefresh, setLastRefresh] = useState(Date.now());

  const refresh = () => {
    setLastRefresh(Date.now());
  };

  useEffect(() => {
    const refreshInterval = setInterval(refresh, 3000 * 1000);
    return () => clearInterval(refreshInterval);
  }, []);

  useEffect(() => {
    next('loading', 'Loading books...');
    getBooks()
      .then((books) => {
        next('success');
        setBooks(books);
      })
      .catch((err) => {
        console.error(err);
        next('error', 'Error while fetching books.');
      });
  }, [next, lastRefresh]);

  return { state, msg, books };
};
