import {
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { editBook } from '../domain/book/api';
import { Book } from '../domain/book/Book';
import { useBook } from '../domain/book/useBook';

const validators: { [validator in keyof Book]?: (value: string) => string | null } = {
  title: (title: string) =>
    title.length < 5 ? 'The title must be at least 5 characters long.' : null,
};

export const BookEditScreenAdvanced: FC = () => {
  const { isbn } = useParams();
  const { book, state } = useBook(isbn);
  const navigate = useNavigate();

  const [values, setValues] = useState<Partial<Book>>({ title: '' });
  const [touched, setTouched] = useState<{ [fieldName in keyof Book]?: boolean }>({});
  const [errors, setErrors] = useState<{ [fieldName in keyof Book]?: string | null }>({});
  const hasErrors = Object.values(errors).some((err) => err !== null);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (ev) => {
    const name = ev.target.name as keyof Book;
    const value = ev.target.value;
    setValues({ ...values, [name]: value });
    if (validators[name]) {
      const error = validators[name](value);
      setErrors({ ...errors, [name]: error });
    }
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = (ev) => {
    setTouched({ ...touched, [ev.target.name]: true });
  };

  useEffect(() => {
    if (state !== 'success') return;
    setValues(book);
  }, [state, book]);

  const handleSubmit: FormEventHandler = (ev) => {
    ev.preventDefault();
    if (hasErrors) return;
    editBook({ ...book, ...values }).then(() => {
      navigate('..', { relative: 'path' });
    });
  };

  return (
    <form className="book-edit-screen" onSubmit={handleSubmit} noValidate>
      <label>
        Title
        <input
          name="title"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          minLength={5}
          required
        />
      </label>
      {touched.title && errors.title && <div className="error">{errors.title}</div>}

      <div style={{ display: 'flex', gap: '.5rem' }}>
        <button type="submit" disabled={hasErrors}>
          <span>💾</span> Save
        </button>

        <Link to=".." relative="path">
          <button type="button" className="secondary">
            cancel relative
          </button>
        </Link>
      </div>
    </form>
  );
};
