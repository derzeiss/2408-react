import { useEffect, useState } from 'react';
import { AppHeader } from './components/AppHeader';
import { BookList } from './components/BookList';
import { Book } from './domain/book/Book';
import { getBooks } from './domain/book/api';
import { useStateMachine } from './hooks/useStateMachine';

function App() {
  const { state, next, data: errorMsg } = useStateMachine();
  const [books, setBooks] = useState<Book[]>([]);

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
  }, [next]);

  return (
    <div className="app">
      <AppHeader />
      {state !== 'success' && errorMsg && <div className="error">{errorMsg}</div>}
      {state === 'success' && <BookList books={books} />}
    </div>
  );
}

export default App;
