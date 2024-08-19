import { AppHeader } from './components/AppHeader';
import { BookList } from './components/BookList';
import { useBooks } from './domain/book/useBooks';

function App() {
  const { state, msg, books } = useBooks();
  return (
    <div className="app">
      <AppHeader />
      {state !== 'success' && msg && <div className="error">{msg}</div>}
      {state === 'success' && <BookList books={books} />}
    </div>
  );
}

export default App;
