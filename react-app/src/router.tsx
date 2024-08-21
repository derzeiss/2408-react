import { createBrowserRouter, redirect } from 'react-router-dom';
import App from './App';
import { getBooks } from './domain/book/api';
import { AboutScreen } from './screens/AboutScreen';
import { BookDetailScreen } from './screens/BookDetailScreen';
import { BookEditScreenAdvanced } from './screens/BookEditScreenAdvanced';
import { BooksErrorScreen } from './screens/BooksErrorScreen';
import { BooksScreen } from './screens/BooksScreen';
import { ErrorScreen } from './screens/ErrorScreen';

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
        path: '/books/:isbn/edit',
        element: <BookEditScreenAdvanced />,
      },
      {
        path: '/about',
        element: <AboutScreen />,
      },
    ],
  },
]);
