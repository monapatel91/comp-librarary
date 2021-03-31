# Contributing to @digital-ai/dot-components

- [Getting Started](#getting-started)
  - [Run demo application](#run-demo-application)
  - [Run Storybook](#run-storybook)
- [Code Styleguide](#code-styleguide)
  - [Commit Messages](#commit-messages)
  - [Submitting Pull Requests](#submitting-pull-requests)
    - [General Author Checklist](#general-author-checklist)
- [Component vs. Demo](#component-vs-demo)
- [Building a Component](#building-a-component)
  - [Types of components](#types-of-components)
  - [Generate a component](#generate-a-component)
  - [Using Storybook](#using-storybook)
  - [Component Author Checklist](#component-author-checklist)
- [Contributing to Demo App](#contributing-to-demo-app)
  - [Page Component](#page-component)
  - [Updating Navigation](#updating-navigation)
    - [Routing](#routing)
    - [Sidebar](#sidebar)
- [Updating `dot` font icon](#updating-dot-font-icon)
- [Running Tests & Formatters](#running-tests-and-formatters)
  - [Running unit tests](#running-unit-tests)
  - [Running end-to-end tests](#running-end-to-end-tests)
  - [Running linter](#running-linter)
  - [Checking code style](#checking-code-style)
- [Definition of Done](#definition-of-done)
  - [Understand your workspace](#understand-your-workspace)
- [Publishing](#publishing)
  - [Publishing as NPM package to GitHub Packages](#publishing-as-npm-package-to-github-packages)
    - [Set the package version number](#set-the-package-version-number)
    - [Build and publish](#build-and-publish)
    - [Publish Storybook Site](#publish-storybook-site)

# Getting Started

## Run demo application

To run the demo application run `yarn start`. You can then see the running application at <http://localhost:4200/>.

## Run Storybook

To run Storybook locally run `yarn storybook`. You can then see Storybook running at <http://localhost:4400/>.

# Code Styleguide

- Order all props alphabetically, this allows for easier maintenance of larger components.

## Commit Messages

When working on something that is part of a GitHub issue we request that you use the following format with your commit messages. Doing so will allow your commit message to properly link to the related issue.

```sh
'Issue #1: some message here'
```

When working on something that is part of a Digital.ai Agility issue we request that you use the following format with your commit messages. Doing so will allow your commit message to properly link to the story in Agility if the GitHub integration is setup properly.

```sh
'S-12345: some message here'
```

## Submitting Pull Requests

- If related to an issue then format the title as `Issue #1: Title Here`
- If related to a story/defect in Agility then format the title as `S-12345: Story Title Here` or `D-12345: Defect Title`.
- PR should be marked as `draft` if still a work in progress and `ready for review` once your code changes are complete.
- Please provide enough information so that others will have proper context.
- Checklist of changes made should be added to the PR description
- Please extend `e2e` and `unit` tests accordingly.
- Make sure there are no default exports
- Update your PR with the issue # that your PR resolves if applicable. [More info](https://docs.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword.)

# Component vs. Demo

If you're creating or modifying an existing component, such as a `<Button>`, then your code changes will be in the `libs/dot-components/src` portion of our codebase.

If you're building an example of how various components could be used such as with a `<Form>` then it would make the most sense to include this in the `apps/demo` portion of our codebase.

# Building a Component

When creating/modifying components it's easiest to use Storybook as your reference point.

See [how to run storybook](#run-storybook) for more details.

## Types of Components

- **Experimental** - Any components belong here when they are a work in progress, awaiting UX review, with outstanding questions around how they will be used or if the functionality and/or API is unstable, etc.
- **Stable** - Once a component has been reviewed in depth by the dev team and the UX team it will be moved from experimental to stable.

## Generating a Component

You may either generate a new component with [NX](https://nx.dev/) or via command line with the following commands:

```sh
# dry run to see what files will be generated
yarn generate:comp:dry --name=[name of component] --export --pascalCaseFiles --style=styled-components --directory=components

# the real thing
yarn generate:comp --name=[name of component] --export --pascalCaseFiles --style=styled-components --directory=components
```

## Using Storybook

You should make sure that all actions are setup properly on Storybook so that users can experiment with the various options.

**`Button.stories.tsx`**

```typescript
export default {
  title: 'Components/Button',
  component: DotButton,
  argTypes: {
    onClick: {
      action: 'button clicked',
    },
  },
};
```

Please make sure to document each `prop` in your components interface accordingly, it will populate Storybook with these details.

**`Button.tsx`**

```typescript
export interface ButtonProps extends CommonProps {
  /** If true, the button will be disabled. */
  disabled?: boolean;
}
```

## End to End Testing (`e2e`)

We use [`cypress`](https://www.cypress.io/) for our End to End testing.

Our `e2e` tests are used primarily to capture styling decisions made by UX and other UI related tests which don't belong in our functional (unit) tests. The `e2e` tests can be found in a separate directory from the other component files, `apps/dot-components-e2e/src/integration`.

Cypress tests will point to the Storybook URL where the component lives. If your component is still `experimental` then the URL will be slightly different `/iframe.html?id=experimental-button--default`

At a minimum, each component should have an `e2e` test which verifies that the component has a `dot-` prefix class. Once UX does a review of the component, any alterations that are done will need to be captured

**`Button.spec.ts`**

```typescript
describe('dot-components: Button component', () => {
  before(() => cy.visit('/iframe.html?id=components-button--default'));

  it('should have a dot- prefix', () => {
    cy.get('button').should('have.class', 'dot-button');
  });

  describe('style decisions', () => {
    it('primary button has correct color', () => {
      cy.get('button.dot-button').should(
        'have.css',
        'background-color',
        'rgb(61, 108, 158)'
      );
    });
  });
});
```

## Functional Testing (`unit`)

We use [`testing-library`](https://github.com/testing-library) for all of our unit tests.

All components must have at a _minimum_ one unit test which validates that the API is unchanged. **Every** prop in the API needs to be evaluated in this test.

**`Button.spec.tsx`**

```typescript
describe('DotButton', () => {
  it('should have unchanged API', () => {
    const onClick = jest.fn();
    const props = {
      children: 'My Button',
      disabled: false,
      disableRipple: false,
      endIcon: <DotIcon iconId="save" />,
      fullWidth: true,
      isSubmit: true,
      onClick: onClick,
      size: 'small',
      startIcon: <DotIcon iconId="home" />,
      titleTooltip: 'click here',
      type: 'text',
    };

    const buttonProps: ButtonProps = {
      children: 'My Button',
      disabled: false,
      disableRipple: false,
      endIcon: <DotIcon iconId="save" />,
      fullWidth: true,
      isSubmit: true,
      onClick: onClick,
      size: 'small',
      startIcon: <DotIcon iconId="home" />,
      titleTooltip: 'click here',
      type: 'text',
    };
    expect(buttonProps).toEqual(props);
  });
});
```

## Component Author Checklist

- [ ] If new component, ensure it is being exported from library
- [ ] Make sure there are no default exports
- [ ] Component is a `styled-component` if applicable
- [ ] Component props extends `commonProps`
- [ ] Storybook configurations up-to-date
- [ ] `unit` test coverage updated
- [ ] `e2e` test coverage updated
- [ ] `CHANGE_LOG.md` updated

# Contributing to Demo App

All code changes will be handled through the source code for the demo app which lives in `apps/demo/src/`

See [how to run demo application](#run-demo-application) for more details.

## Page Component

Build out your demo page similar to any other React component in the `demo-components` directory. This is where most of your code will be contained.

## Updating Navigation

### Routing

All of our routes are managed in `routes/Routes.tsx` which is where you will import your [page component](#page-component) and create a path for it to be used by the navigation. Make sure that your component and path are simple and semantic.

```jsx
import { DemoForm } from '../../demo-components/DemoForm';

<Route path="/demo-form" exact component={DemoForm} />;
```

### Sidebar

Currently, all of the demo navigation is handled by the `Sidebar` component which gets its link information from `app/app.tsx`. When creating a new page on the demo, add your page to the `sideNavItems` array which will look similar to the following.

```javascript
 {
    iconId: 'package',
    text: 'Progression',
    href: '/progression',
  },
```

# Updating `dot.woff` Font Icon

For details go to [.dot design system](https://zeroheight.com/4a9ac476a/p/13a447-icons/t/36e685)

You can import `dot-components/src/lib/fonts/selection.json` back to the IcoMoon app using the _Import Icons_ button (or via Main Menu → Manage Projects) to retrieve your icon selection.

After downloading generated files from icomoon only the following files should be copied over and a pull request submitted; all other files can be ignored.

```sh
- dot-components/src/lib/fonts/dot.woff
- dot-components/src/lib/fonts/selection.json
```

You'll also need to copy the icon styles from the generated `style.css` and paste them at the bottom of the following file.

```sh
- dot-components/src/lib/components/icon/Icon.styles.ts
```

It's important to adjust the copied styles so that they match the following format.

```css
&.icon-delete:before {
  content: '\\e901';
}
```

# Running Tests and Formatters

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

# Definition of Done

Before any work can be merged all checks & builds must pass and your PR must have a minimum of 2 reviewers approval. If design changes were made, one of the reviewers must be a UX member.

# Publishing

## Security

There should be no outstanding security vulnerabilities with `moderate` or higher prior to publishing for use across other applications.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Set the package version number

Set the new version number for the package in the `/libs/dot-components/package.json` file. Create a commit with the new version number.

## Build and publish

To build and publish the library run the following commands:

```sh
# just build
yarn build

# build and publish
yarn build:publish
```

## Publish Storybook Site

The Storybook documentation is deployed via a manual GitHub Action. To trigger the Action follow these steps:

1. Navigate to the [Actions](https://github.com/digital-ai/dot-components/actions) for the repository
1. Click on the Workflow called "Deploy Storybook for Dot Components"
1. Click on the "Run Workflow" menu
1. Choose the appropriate branch to run the workflow on (should be the master branch)
1. Click on the "Run Workflow" button
