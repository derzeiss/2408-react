import { FC, useState } from 'react';
import { Book } from '../domain/book/Book';
import { LikeCounter } from './LikeCounter';
import { Hideable } from './Hideable';
import { cx } from '../utils/cx';

interface BookListItemProps {
  book: Book;
}

const getPriceRating = (price: string) => {
  const priceNumber = parseInt(price.substring(1));
  if (isNaN(priceNumber)) return '';
  if (priceNumber <= 10) return '$';
  if (priceNumber <= 30) return '$$';
  return '$$$';
};

export const BookListItem: FC<BookListItemProps> = ({ book }) => {
  const [likes, setLikes] = useState(0);
  const isFree = book.price === '$0.00';

  return (
    <div className={cx('book-list-item', { 'book-list-item_free': isFree })}>
      <h2>
        {likes >= 5 && <span className="icon_entry">⭐️</span>}
        {isFree && <span>💰 </span>}
        {book.title}
      </h2>
      <h3>{book.subtitle}</h3>
      {!isFree && <div style={{ color: 'green' }}>{getPriceRating(book.price)}</div>}
      <div className="text-meta">by {book.author}</div>
      <LikeCounter likes={likes} setLikes={setLikes} />
      <Hideable>
        <p>{book.abstract}</p>
      </Hideable>
    </div>
  );
};
