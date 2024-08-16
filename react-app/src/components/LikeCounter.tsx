import { FC } from 'react';
import { SetState } from '../types/SetState';

interface LikeCounterProps {
  likes: number;
  setLikes: SetState<number>;
}

export const LikeCounter: FC<LikeCounterProps> = ({ likes, setLikes }) => {
  return (
    <button className="secondary" onClick={() => setLikes(likes + 1)}>
      <span>👏</span>
      {likes}
    </button>
  );
};
