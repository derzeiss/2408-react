import { useContext } from 'react';
import { ThemeContext } from '../domain/theme/ThemeContext';
import { ThemeEditor } from './ThemeEditor';

export const AppHeader = () => {
  const { primaryColor } = useContext(ThemeContext);

  return (
    <div className="app-header">
      <h1 style={{ color: primaryColor }}>Bookmonkey</h1>
      <ThemeEditor />
    </div>
  );
};
