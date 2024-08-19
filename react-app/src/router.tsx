import { createBrowserRouter, redirect } from 'react-router-dom';
import App from './App';
import { ErrorScreen } from './screens/ErrorScreen';
import { BooksScreen } from './screens/BooksScreen';
import { AboutScreen } from './screens/AboutScreen';
import { getBooks } from './domain/book/api';
import { BooksErrorScreen } from './screens/BooksErrorScreen';
import { BookDetailScreen } from './screens/BookDetailScreen';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: '/',
        loader: () => redirect('/books'),
      },
      {
        path: '/books',
        element: <BooksScreen />,
        loader: () => getBooks(),
        errorElement: <BooksErrorScreen />,
      },
      {
        path: '/books/:isbn',
        element: <BookDetailScreen />,
      },
      {
        path: '/about',
        element: <AboutScreen />,
      },
    ],
  },
]);
