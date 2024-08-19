import { useContext } from 'react';
import { ThemeContext } from '../domain/theme/ThemeContext';

const colors = ['tomato', 'olivedrab', 'hotpink'];

export const ThemeEditor = () => {
  const { primaryColor, setPrimaryColor } = useContext(ThemeContext);

  return (
    <div className="theme-editor">
      {colors.map((c) => (
        <button
          key={c}
          style={{ background: c, outline: primaryColor === c ? '1px solid #333' : '' }}
          onClick={() => setPrimaryColor(c)}
        />
      ))}
    </div>
  );
};
