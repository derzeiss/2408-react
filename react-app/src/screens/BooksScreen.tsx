import { useEffect } from 'react';
import { BookList } from '../components/BookList';
import { useBooks } from '../domain/book/useBooks';

export const BooksScreen = () => {
  const { state, msg, books, refresh } = useBooks();

  useEffect(() => {
    const refreshInterval = setInterval(refresh, 3000 * 1000);
    return () => clearInterval(refreshInterval);
  }, [refresh]);

  return (
    <div className="books-screen">
      {state !== 'success' && msg && <div className="error">{msg}</div>}
      {state === 'success' && <BookList books={books} />}
    </div>
  );
};
