# Code Style Guide

## Rules

1. **Use PascalCase for filenames**, which follows our existing patterns.
1. **Use `dot-` in class names**, allowing consumers to easily overwrite styles.
1. **Use `Dot` in component names**, making it clear the component is from us instead of MUI.
1. **No default exports**, applies to all helpers and components.
1. **Use `.ts` and `.tsx` files over `.js` and `.jsx` files**, which allows us to ensure proper typing.
1. **Use functional components over class**, which allows us to use React hooks.
1. **Prop names should follow existing APIs**, which follows our existing patterns.
1. **Use `<Fragment>` or `<>` over `<div>` or `<span>`**, to avoid additional markup in the DOM.

## Suggestions

1. **All props and imports should be ordered alphabetically**, which makes maintaining larger components easier.
1. **Use camelCase for prop names**, which follows our existing patterns.
1. **Use `git mv` command to relocate files**, which will only show the lines changed instead of displaying it as a new file.

## `eslint` rules

- `jsx-a11y/aria-role`
- `jsx-a11y/alt-text`
- `jsx-a11y/img-redundant-alt`
- `jsx-quotes`
- `no-multi-spaces`
- `react/self-closing-comp`
- `react/jsx-wrap-multilines`
- `react/jsx-tag-spacing`
