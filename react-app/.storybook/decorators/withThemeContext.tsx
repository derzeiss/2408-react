import { Decorator } from '@storybook/react';
import { fn } from '@storybook/test';
import { Theme } from '../../src/domain/theme/Theme';
import { ThemeContext } from '../../src/domain/theme/ThemeContext';

export const withThemeContext: Decorator<Theme> = (Story, { args }) => (
  <ThemeContext.Provider value={{ primaryColor: args.primaryColor, setPrimaryColor: fn() }}>
    <Story />
  </ThemeContext.Provider>
);
