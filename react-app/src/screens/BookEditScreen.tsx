import { FC, FormEventHandler, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useBook } from '../domain/book/useBook';

export const BookEditScreen: FC = () => {
  const { isbn } = useParams();
  const [title, setTitle] = useState('');
  const { book, state } = useBook(isbn);
  const navigate = useNavigate();

  useEffect(() => {
    if (state === 'error') navigate(`/books/${isbn}`);
  }, [isbn, state, navigate]);

  useEffect(() => {
    if (!book.title) return;
    setTitle(book.title);
  }, [book.title]);

  const handleSubmit: FormEventHandler = (ev) => {
    ev.preventDefault();
    console.log(title);
  };

  return (
    <form className="book-edit-screen" onSubmit={handleSubmit}>
      <label>
        Title
        <input value={title} onChange={(ev) => setTitle(ev.target.value)} minLength={5} required />
      </label>

      <div style={{ display: 'flex', gap: '.5rem' }}>
        <button type="submit">
          <span>💾</span> Save
        </button>

        <Link to={`/books/${isbn}`}>
          <button type="button" className="secondary">
            cancel
          </button>
        </Link>

        <Link to=".." relative="path">
          <button type="button" className="secondary">
            cancel relative
          </button>
        </Link>
      </div>
    </form>
  );
};
