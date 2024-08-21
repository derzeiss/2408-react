import { FC, FormEventHandler, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useBook } from '../domain/book/useBook';
import { editBook } from '../domain/book/api';

export const BookEditScreen: FC = () => {
  const { isbn } = useParams();
  const [title, setTitle] = useState('');
  const { book, state } = useBook(isbn);
  const navigate = useNavigate();
  const [titleTouched, setTitleTouched] = useState(false);
  const titleError = title.length < 5 ? 'The title must be at least 5 characters long.' : '';

  useEffect(() => {
    if (state === 'error') navigate(`/books/${isbn}`);
  }, [isbn, state, navigate]);

  useEffect(() => {
    if (!book.title) return;
    setTitle(book.title);
  }, [book.title]);

  const handleSubmit: FormEventHandler = (ev) => {
    ev.preventDefault();
    if (titleError) return;
    editBook({ ...book, title }).then(() => {
      navigate('..', { relative: 'path' });
    });
  };

  return (
    <form className="book-edit-screen" onSubmit={handleSubmit} noValidate>
      <label>
        Title
        <input
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          minLength={5}
          required
          style={{ border: titleError ? '1px solid red' : '' }}
          onBlur={() => setTitleTouched(true)}
        />
      </label>
      {titleTouched && titleError && <div className="error">{titleError}</div>}

      <div style={{ display: 'flex', gap: '.5rem' }}>
        <button type="submit" disabled={!!titleError}>
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
