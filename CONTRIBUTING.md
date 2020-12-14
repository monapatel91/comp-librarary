# Contributing to @digital-ai/dot-components

## Generate a component

To generate a component execute use following commands:

```sh
# dry run to see what files will be generated
yarn generate:comp:dry --name=[name of component]

# the real thing
yarn generate:comp --name=[name of component]
```

## Updating font icon

For details go to [.dot design system](https://zeroheight.com/4a9ac476a/p/13a447-icons/t/36e685)

You can import `dot-components/src/lib/fonts/font-icon/selection.json` back to the IcoMoon app using the _Import Icons_ button (or via Main Menu → Manage Projects) to retrieve your icon selection.

After downloading generated files from icomoon only the following files should be copied over and a pull request submitted.

```sh
- dot-components/src/lib/fonts/font-icon/fonts/*
- dot-components/src/lib/fonts/font-icon/selection.json
- dot-components/src/lib/fonts/font-icon/style.css
- dot-components/src/lib/fonts/font-icon/style.scss
- dot-components/src/lib/fonts/font-icon/variables.scss
```

You won't need any of the files located under the `demo-files/` directory when including the generated font in your own projects.

When you're done be sure to update [the package number](#set-the-package-version-number)

## Definition of Done

<!-- TODO -->

## Run demo application

To run the demo application run `yarn start`. You can then see the running application at <http://localhost:4200/>.

## Run Storybook

To run Storybook locally run `yarn storybook`. You can then see Storybook running at <http://localhost:4400/>.

## Running unit tests

Unit tests are run via [Jest](https://jestjs.io). The following commands can be used to run unit tests for the component library:

```sh
# execute all unit tests
yarn test

# execute unit tests in watch mode
yarn test --watch
```

## Running end-to-end tests

e2e tests are run via [Cypress](https://www.cypress.io/). The following commands can be used to run e2e tests for the component library:

```sh
# execute all e2e tests
yarn e2e

# execute e2e tests in watch mode
yarn e2e --watch
```

**_Note:_** When running e2e tests in watch mode Storybook is also running and available.

## Running linter

We use eslint for linting our source code. You can check the component library for lint issues by running `yarn lint` locally.

## Checking code style

For code formatting we use [Prettier](https://prettier.io/). Any overrides that we have configured to the default Prettier rules is defined in the `.prettierrc` file.

You can use the following scripts to help you check for and fix any code format issues that you have:

```sh
# check for format issues
yarn format:check

# to fix any format issues
yarn format
```

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Publishing as NPM package to GitHub Packages

In order to publish you will need to have authenticated to GitHub Packages. If you haven't done so already [Authenticating](/README.md) for instructions.

### Set the package version number

<!-- TODO: come up with a better and more consistent way of setting the version number -->

Set the new version number for the package in the `/libs/dot-components/package.json` file. Create a commit with the new version number.

- adding a new component should be an increase of `0.0.1`
- adding a new font icon should be an increase of `0.0.1`
- once a new set of components are added an increase of `0.1.0`
- breaking changes will be an increase of `1.0.0`

### Build and publish

To build and publish the library run the following commands:

```sh
# just build
yarn build

# build and publish
yarn build:publish
```
