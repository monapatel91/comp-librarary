# @digital-ai/dot-components

## Installation

```sh
# with npm
npm install @digital-ai/dot-components

# with yarn
yarn add @digital-ai/dot-components
```

The library ships with a CSS file that will bring in its styles and font-icons. To import the styles into your application simply include the following import in one of the top component in your application.

```js
import '@digital-ai/dot-components/dot-components.esm.css';
```

### Theme Provider

The `DotThemeProvider` provides the theme for the components in this library. When using this library you will need to wrap your application with it like this:

```jsx
<DotThemeProvider>
  <App />
</DotThemeProvider>
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

Follow the code example [shown here](https://zeroheight.com/4a9ac476a/p/13a447-icons/b/52c5a5)

Note: You can use search in the upper right corner to search for an icon if you know its name.

If you're using the `DotIcon` component then you do not need to pass in the `icon-` prefix of the icon name.

## Contributing

TBD

## Change Log

[Learn about the latest improvements](/CHANGE_LOG.md).
