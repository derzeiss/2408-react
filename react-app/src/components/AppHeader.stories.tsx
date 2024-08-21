import { Meta } from '@storybook/react';
import { Theme } from '../domain/theme/Theme';
import { AppHeader } from './AppHeader';
import { withThemeContext } from '../../.storybook/decorators/withThemeContext';

export default {
  component: AppHeader,
  args: {
    primaryColor: 'tomato',
  },
  argTypes: {
    primaryColor: {
      control: 'inline-radio',
      options: ['tomato', 'olivedrab', 'hotpink'],
      type: 'string',
    },
  },
  decorators: [withThemeContext],
} as Meta<Theme>;

export const Default = {};
