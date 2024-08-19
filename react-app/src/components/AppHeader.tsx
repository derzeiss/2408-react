import { CSSProperties, useContext } from 'react';
import { ThemeContext } from '../domain/theme/ThemeContext';
import { ThemeEditor } from './ThemeEditor';
import { NavLink } from 'react-router-dom';

const links = [
  { path: '/books', text: 'Books' },
  { path: '/about', text: 'About' },
];

export const AppHeader = () => {
  const { primaryColor } = useContext(ThemeContext);

  return (
    <div className="app-header">
      <h1 style={{ color: primaryColor }}>Bookmonkey</h1>
      <ThemeEditor />

      <nav style={{ '--c-brand-primary': primaryColor } as CSSProperties}>
        {links.map((l) => (
          <NavLink key={l.path} to={l.path}>
            {l.text}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
