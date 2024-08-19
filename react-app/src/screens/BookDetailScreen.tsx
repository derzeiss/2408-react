import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useBook } from '../domain/book/useBook';

export const BookDetailScreen: FC = () => {
  const { isbn } = useParams();
  const { state, msg, book } = useBook(isbn);

  const getContent = () => {
    if (state !== 'success') {
      if (!msg) return null;
      return <div className="error">{msg}</div>;
    }
    return (
      <div className="book-detail-screen">
        <img src={book.cover} />
        <h1>{book.title}</h1>
        <div>{book.subtitle}</div>
        <div className="text-meta">by {book.author}</div>
        <h2 className="m-top m-bottom">{book.price}</h2>
        <p>{book.abstract}</p>
      </div>
    );
  };

  return <div className="books-screen">{getContent()}</div>;
};
