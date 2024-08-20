import { FC, FormEventHandler, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';

export const BookEditScreenUncontrolled: FC = () => {
  const { isbn } = useParams();
  const nameRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler = (ev) => {
    ev.preventDefault();
    console.log(nameRef.current?.value);
  };

  return (
    <form className="book-edit-screen" onSubmit={handleSubmit}>
      <label>
        Title
        <input ref={nameRef} minLength={5} required />
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
      </div>
    </form>
  );
};
