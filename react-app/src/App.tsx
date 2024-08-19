import { useState } from 'react';
import { AppHeader } from './components/AppHeader';
import { BookList } from './components/BookList';
import { useBooks } from './domain/book/useBooks';
import { ThemeContext } from './domain/theme/ThemeContext';

function App() {
  const { state, msg, books } = useBooks();
  const [primaryColor, setPrimaryColor] = useState('tomato');

  return (
    <ThemeContext.Provider value={{ primaryColor, setPrimaryColor }}>
      <div className="app">
        <AppHeader />
        {state !== 'success' && msg && <div className="error">{msg}</div>}
        {state === 'success' && <BookList books={books} />}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
