import { FC, PropsWithChildren, useState } from 'react';
import { usePrimaryColor } from '../domain/theme/usePrimaryColor';

interface HideableProps extends PropsWithChildren {
  initiallyVisible?: boolean;
}

export const Hideable: FC<HideableProps> = ({ children }) => {
  const [contentVisible, setContentVisible] = useState(false);
  const primaryColor = usePrimaryColor();

  return (
    <div className="hideable">
      {contentVisible && children}
      <button
        className="tertiary"
        onClick={() => setContentVisible(!contentVisible)}
        style={{ color: primaryColor }}
      >
        {contentVisible ? '- hide' : '+ show'} content
      </button>
    </div>
  );
};
