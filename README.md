# @digital-ai/dot-components

<!-- TODO: add more detail -->

This is a component library...

## Installation

Before you can install the `@digital-ai/dot-components` package in your project you will need to authenticate to GitHub Packages and configure npm for your project to use GitHub Packages for its npm registry.

### Authenticating

To install private packages in GitHub Packages you need to generate a personal access token with GitHub. You can do this by following the instructions at [Authenticating to GitHub Packages](https://docs.github.com/en/free-pro-team@latest/packages/publishing-and-managing-packages/about-github-packages#authenticating-to-github-packages).

Once you have created your personal access token you will need to set an environment variable on your local machine called `DOT_COMPONENTS_TOKEN` with the value of your personal access token.

### Installing the package from the GitHub Packages npm registry

`@digital-ai/dot-components` is available as a private npm package on GitHub Packages. Your project will likely have other npm packages from the public NPM registry. To configure your project to only get the `@digital-ai/dot-components` package from GitHub Packages you will need to create the create or edit an `.npmrc` file in the same directory as your `package.json` file and add the following to the file:

```sh
@digital-ai:registry=https://npm.pkg.github.com
```

Once you have done that, and you have authenticated to GitHub Packages (see above), then you can install the package.

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

## Font Icons

### How to use font icon

Find which icon you would like to use by going to [.dot design system](https://zeroheight.com/4a9ac476a/p/13a447-icons/b/43c8ca)

Follow the code example [shown here](https://zeroheight.com/4a9ac476a/p/13a447-icons/b/52c5a5)

Note: You can use search in the upper right corner to search for an icon if you know its name.

## How to modify the existing font icon and update it

For details go to [.dot design system](https://zeroheight.com/4a9ac476a/p/13a447-icons/t/36e685)

You can import `dot-components/src/lib/font-icon/selection.json` back to the IcoMoon app using the _Import Icons_ button (or via Main Menu → Manage Projects) to retrieve your icon selection.

After downloading generated files from icomoon only the following files should be copied over and a pull request submitted.

```sh
- dot-components/src/lib/font-icon/fonts/*
- dot-components/src/lib/font-icon/selection.json
- dot-components/src/lib/font-icon/style.css
- dot-components/src/lib/font-icon/style.scss
- dot-components/src/lib/font-icon/variables.scss
```

You won't need any of the files located under the `demo-files/` directory when including the generated font in your own projects.

## Contributing

Read our [contributing guide](/CONTRIBUTING.md) to learn about our development process, now to test changes, and how to build and publish the package to GitHub Packages.
