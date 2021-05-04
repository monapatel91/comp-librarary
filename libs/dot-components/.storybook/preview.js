import React, { useState } from 'react';
import { addDecorator } from '@storybook/react';

import {
  DotThemeProvider,
  agilityDarkTheme,
  agilityLightTheme,
  darkTheme,
  lightTheme,
} from '../src/lib/theme-provider/ThemeProvider';
import { withThemes } from '@react-theming/storybook-addon';
import { ThemeProvider } from 'styled-components';

const TAG_SELECTOR = 'addon-backgrounds-color';

const createStyle = (color) => `
.sb-show-main {
  background: ${color};
  transition: background-color 0.3s;
}
`;

export const addBackgroundStyle = (color) => {
  const css = createStyle(color);
  const existingStyle = document.getElementById(TAG_SELECTOR);
  if (existingStyle) {
    if (existingStyle.innerHTML !== css) {
      existingStyle.innerHTML = css;
    }
  } else {
    const style = document.createElement('style');
    style.setAttribute('id', TAG_SELECTOR);
    style.innerHTML = css;

    document.head.appendChild(style);
  }
};

const getThemeParameter = () => {
  const urlParams = new URLSearchParams(document.location.search);
  return urlParams.get('theme');
};

function updateThemeParameter(theme) {
  const regex = new RegExp('([?&])theme=.*?(&|$)', 'i');
  const separator =
    window.parent.location.search.indexOf('?') !== -1 ? '&' : '?';
  if (window.parent.location.search.match(regex)) {
    return window.parent.location.search.replace(
      regex,
      '$1theme=' + theme + '$2'
    );
  } else {
    return window.parent.location.search + separator + 'theme=' + theme;
  }
}

const urlTheme = getThemeParameter();
let storybookTheme = urlTheme ? urlTheme : 'light';
let background = null;
let search = null;

export const WithTheme = (Story) => {
  const [theme, setTheme] = useState(storybookTheme);

  const checkTheme = () => {
    if (storybookTheme !== theme) {
      setTheme(storybookTheme);
    }
    if (window.location.search !== search && background) {
      addBackgroundStyle(background);
      search = window.location.search;
    }
    setTimeout(checkTheme, 100);
  };
  setTimeout(checkTheme, 100);

  return (
    <DotThemeProvider theme={theme}>
      <Story />
    </DotThemeProvider>
  );
};
addDecorator(WithTheme);

export const onThemeSwitch = (context) => {
  const { theme } = context;
  const params = {
    backgrounds: {
      default: theme.palette.background && theme.palette.background.default,
    },
  };
  storybookTheme = theme.name;

  if (getThemeParameter() !== theme.name) {
    const newParams = updateThemeParameter(theme.name);
    window.parent.location.search = newParams;
  }

  background = params.backgrounds.default;
  return {
    parameters: params,
  };
};

const providerFn = ({ theme, children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

lightTheme.name = 'light';
darkTheme.name = 'dark';
agilityLightTheme.name = 'agility-light';
agilityDarkTheme.name = 'agility-dark';

const getSortedThemes = () => {
  switch (storybookTheme) {
    case 'dark':
      return [darkTheme, lightTheme, agilityLightTheme, agilityDarkTheme];
    case 'agility-dark':
      return [agilityDarkTheme, lightTheme, darkTheme, agilityLightTheme];
    case 'agility-light':
      return [agilityLightTheme, lightTheme, darkTheme, agilityDarkTheme];
    default:
      return [lightTheme, darkTheme, agilityLightTheme, agilityDarkTheme];
  }
};

addDecorator(
  withThemes(null, getSortedThemes(), { onThemeSwitch, providerFn })
);

export const parameters = {
  options: {
    storySort: {
      order: ['Introduction', 'Change Log', 'Components', 'Experimental'],
    },
  },
};
