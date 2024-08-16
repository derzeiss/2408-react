import { FC, PropsWithChildren, useState } from 'react';

interface HideableProps extends PropsWithChildren {
  initiallyVisible?: boolean;
}

export const Hideable: FC<HideableProps> = ({ children }) => {
  const [contentVisible, setContentVisible] = useState(false);
  return (
    <div className="hideable">
      {contentVisible && children}
      <button className="tertiary" onClick={() => setContentVisible(!contentVisible)}>
        {contentVisible ? '- hide' : '+ show'} content
      </button>
    </div>
  );
};
