import { createContext } from 'react';

export const ThemeContext = createContext({
  primaryColor: 'steelblue',
  setPrimaryColor: () => {},
});
