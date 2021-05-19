# @digital-ai/dot-components

## Installation

```sh
# with npm
npm install @digital-ai/dot-components

# with yarn
yarn add @digital-ai/dot-components
```

### Theme Provider

The `DotThemeProvider` provides the theme for the components in this library. When using this library you will need to wrap your application with it like this:

```jsx
<DotThemeProvider>
  <App />
</DotThemeProvider>
```

Once your application is wrapped with `DotThemeProvider`, your styled components can use colors and spacings from the theme:

```jsx
import React from 'react';
import styled, { css } from 'styled-components';

const StyledWidget = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.palette.secondary[300]};
    border: 1px solid ${theme.palette.primary.main};
    .my-widget-text {
      margin-left: ${theme.spacing(2)}px;
    }
  `}
`;

export interface MyWidgetProps {
  text: string;
}

export const MyWidget = ({ text }: MyWidgetProps) => {
  return (
    <StyledWidget>
      <div className="my-widget-text">{text}</div>
    </StyledWidget>
  );
};
```

### Resolving Style Conflicts

It is possible that existing application styles might target native elements in ways that will conflict with styles from `dot-components`.

Because `dot-` classes are applied to native elements that are part of `dot-components`, such conflicts can be resolved by making minor changes to the application styles.

For example, suppose the application includes global styling like this:

```css
input {
  background-color: red;
}
```

To override this styling for `dot-components`, this could be changed to:

```css
input:not(.dot-input) {
  background-color: red;
}
```

### Updating

When you're ready to pull in the latest version of the `dot-components` package run the following command.

```sh
# with npm
npm update @digital-ai/dot-components@latest

# with yarn
yarn upgrade @digital-ai/dot-components@latest
```

## Font Icons

Find which icon you would like to use by going to [.dot design system](https://zeroheight.com/4a9ac476a/p/13a447-icons/b/43c8ca)

Follow the code example [shown here](https://storybook.lisbon-dev.com/?path=/docs/components-icon--default)

Note: You can use search in the upper right corner to search for an icon if you know its name.

If you're using the `DotIcon` component then you do not need to pass in the `icon-` prefix of the icon name.

## Contributing

[Learn about how to contribute](https://zeroheight.com/4a9ac476a/p/50279a-developers/b/631dc3)

## Code Style Guide

[Learn about our code style guide](https://zeroheight.com/4a9ac476a/p/50279a-developers/b/75551c)

## Change Log

[Learn about the latest improvements](https://zeroheight.com/4a9ac476a/p/50279a-developers/b/95a7cc).
