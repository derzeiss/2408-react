import { useEffect, useState } from 'react';
import { useStateMachine } from '../../hooks/useStateMachine';
import { getBook } from './api';
import { Book } from './Book';

export const useBook = (isbn?: string) => {
  const { state, next, data: msg } = useStateMachine();
  const [book, setBook] = useState<Book>({} as Book);

  useEffect(() => {
    if (!isbn) return;
    next('loading', 'Loading book...');
    getBook(isbn)
      .then((book) => {
        next('success');
        setBook(book);
      })
      .catch((err) => {
        console.error(err);
        next('error', 'Error while fetching book.');
      });
  }, [isbn, next]);

  return { state, msg, book };
};
