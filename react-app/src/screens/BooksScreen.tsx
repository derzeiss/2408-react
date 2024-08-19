import { useLoaderData } from 'react-router-dom';
import { BookList } from '../components/BookList';
import { Book } from '../domain/book/Book';

export const BooksScreen = () => {
  const books = useLoaderData() as Book[];
  // const { state, msg, books, refresh } = useBooks();

  // useEffect(() => {
  //   const refreshInterval = setInterval(refresh, 3000 * 1000);
  //   return () => clearInterval(refreshInterval);
  // }, [refresh]);

  return (
    <div className="books-screen">
      {/* {state !== 'success' && msg && <div className="error">{msg}</div>} */}
      {/* {state === 'success' && <BookList books={books} />} */}
      <BookList books={books} />
    </div>
  );
};
