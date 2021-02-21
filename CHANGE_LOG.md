# Change Log

## 0.0.0-alpha.9

> **BREAKING CHANGE: RadioButton** removed unneeded `ariaLabel` prop

  <br />
  
  > **BREAKING CHANGE: RadioGroup** `radioButtons` prop to `options` to use base props for `RadioGroup` and `CheckboxGroup`
- **ActionToolbar**: added to index exports
- **Card**: refactored to be a lightweight wrapper component.
- **CardContent**: Create the card content component.
- **CardFooter**: Create the card footer component.
- **CardHeader**: Create the card header component.
- **Checkbox**: added NEW `Checkbox` component
- **CheckboxGroup**: added NEW `CheckboxGroup` component
- **FormGroup**: added NEW `FormGroup` component
- **InputFormFields**: changed `required` from being a required prop to optional
- **InputText**: added comments to interface
- **InputText**: added missing `value` prop
- **RadioButton**: added NEW `RadioButton` component
- **RadioButton**: added `id` prop
- **RadioButton**: added `required` prop
- **RadioGroup**: added `required` prop
- **RadioGroup**: added NEW `RadioGroup` component
- **RadioGroup**: added `row` prop to be consistent with material-ui and checkboxes and allow for group layout change from row to column.
- **RadioButton**: moved to Components
- **RadioGroup**: moved to Components

### Experimental

- **PackageVersion** - convert to functional component
- **Phase** - convert to functional component
- **ProgressionBoard** - convert to functional component
- **ProgressionBoardLegend** - cleaned up DOM structure, converted workitems to icons
- **RevisionRangeLabel** - convert to functional component
- **StageCard**: added `avatar` prop
- **SwimLane** - convert to functional component
- **WorkItem** - convert to functional component

## 0.0.0-alpha.8

- **AppToolbar**: fixed postion styles so the AppTollbar is always flush to top, left, and right
- **InputSelect**: added `InputSelect` to the list of exported component from the library
- **ProgressionBoardLegend**: utilize `DotIcon` component

## 0.0.0-alpha.7

### Components

- **AutoComplete**: removed `inputVariant` prop
- **Avatar**: if `large` then icon `fontSize` will be set to `default`
- **Global**: integrated `Lato` font family as global style so consumer no longer needs to import `.css` file
- **Global**: removed `.css` files to improve consumption and performance
- **Icon**: removed `large` from `fontSize` options
- **Icon**: integrated `dot` font family as part of styled component so consumer no longer needs to import `.css` file
- **InlineEdit**: removed `inputVariant` prop
- **InlineEdit**: added `size` prop - note `size` will be used in place of `margin`. `margin` controls the vertical spacing and the component size and needed to remove the complexity of having both options.
- **InlineEdit**: removed `margin` prop in favor of the simpler `size` prop.
- **InputProps**: renamed `InputTextProps` to `InputProps` and moved `InputTextProps` to be used with `InputText` to support `multiline` props
- **InputSelect**: added `size` prop - note `size` will be used in place of `margin`. `margin` controls the vertical spacing and the component size and needed to remove the complexity of having both options.
- **InputSelect**: removed `margin` prop in favor of the simpler `size` prop.
- **InputText**: added `multiline` prop
- **InputText**: added `size` prop - note `size` will be used in place of `margin`. `margin` controls the vertical spacing and the component size and needed to remove the complexity of having both options.
- **InputText**: removed `margin` prop in favor of the simpler `size` prop.
- **InputText**: added `rows` prop, only applies to `multiline`
- **InputText**: added `rowMax` prop, only applies to `multiline`
- **InputText**: added unit tests for `multiline`
- **Link**: Create the link component.
- **Switch**: added prop for `labelPlacement`
- **Switch**: fixed inconsistent styles per UX review

## 0.0.0-alpha.6

### Components

- **Sidebar**: `DotNavigation` no longer renders if `navItems` are not passed in.

## 0.0.0-alpha.5

### Experimental

- **AutoComplete**: removed `inputVariant` prop
- **Card**: updated `classes` prop to `className`
- **Dialog**: updated `classes` prop to `className`
- **InlineEdit**: removed `inputVariant` prop
- **InputSelect**: added props for `startIcon`, `endIcon`, `warning`, `id`, `helperText`
- **InputSelect**: added custom styles for `warning` state
- **InputSelect**: fixed inconnsistent styles per UX review
- **InputSelect**: added better demo controls in storybook for `startIcon`, `endIcon`
- **InputSelect**: moved styled component definitions to `InputFormFields.styles.ts`
- **InputSelect**: moved interface and type definitions to `InputFormFields.propTypes.ts`
- **InputSelect**: removed `variant` prop
- **InputText**: added props for `startIcon`, `endIcon`, `warning`, `id`, `helperText`
- **InputText**: added custom styles for `warning` state
- **InputText**: fixed inconnsistent styles per UX review
- **InputText**: added better demo controls in storybook for `startIcon`, `endIcon`
- **InputText**: moved styled component definitions to `InputFormFields.styles.ts`
- **InputText**: moved interface and type definitions to `InputFormFields.propTypes.ts`
- **InputText**: removed `variant` prop
- **Menu**: updated `classes` prop to `className`
- **PhaseHeader**: updated `classes` prop to `className`

## 0.0.0-alpha.4

### Components

- **AppToolbar**: changed `brand` to `appName`
- **AppToolbar**: changed `items` to `navItems`
- **Button**: changed `iconId` prop to `startIcon` prop which accepts a component
- **Button**: added props for `disableRipple`, `fullWidth` and `endIcon`
- **EmptyState**: added `className` prop, updated title from `h4` to `h2`
- **EmptyState**: changed `Image` prop to `image`
- **Navigation**: added button as component to trigger subnav
- **Navigation**: added support for keyboard navigation

## 0.0.0-alpha.3

### Components

- **Action Toolbar**: created the `DotActionToolbar` component
- **AppToolbar**: converted `DotHeader` to `DotAppToolbar`
- **AppToolbar**: added `DotAvatar` to `DotAppToolbar`
- **AppToolbar**: added `DotMenu` to `DotAppToolbar` for hamburger menu
- **Breadcrumbs**: added the `className` prop to include a class to the root dom element
- **Breadcrumbs**: updated style to more closely match the design system
- **Breadcrumbs**: added `tabIndex` on links
- **Breadcrumbs**: added `cursor: pointer` on link hover
- **Breadcrumbs**: updated Link styles
- **Button**: changed `label` prop to `children` which accepts string only
- **Button**: changed `text` and `outlined` colors to `default`
- **Button**: updated theme to use default `line-height`
- **Drawer**: added `width` props, defaults to `256px` for anchor positions `left` and `right`
- **Drawer**: updated overlay styles
- **Drawer**: added default padding `16px` to be in spec with material
- **Icon**: updated style to more closely match the design system
- **Icon**: renamed the `icon` prop to `iconId`
- **Icon**: removed the `iconBgColor`, `iconClasses`, and `iconType` props
- **Icon**: added the `className` prop to include a class to the root dom element
- **Icon Button**: updated style to more closely match the design system
- **Icon Button**: replace `iconButtonSize` and `iconSize` props with the `size` prop
- **Icon Button**: rename `classes` prop to `className`
- **Menu**: changed from `text` to `children` to allow for more flexibility around menu item
- **Menu**: added `onClick` handler for menu items
- **Navigation**: added support for button & icon button
- **Navigation**: added support for divider, section header
- **Navigation**: ability to display a second level navigation onClick
- **Sidebar**: swapped out logo, component now controls the ability to collapse/expand
- **Sidebar**: adjustments to animation used, style adjustments based on UX feedback

### Experimental

- **Progression Board Legend**: created the `DotProgressionBoardLegend` component

## 0.0.0-alpha.2

### Experimental

- **Progression Board**: created the `DotProgressionBoard` component

## 0.0.0-alpha.1

### Components

- **Avatar**: added the following props: `iconId`, `imageSrc`, `text`, `type`, and `variant`
- **Avatar**: made the `alt` prop required
- **Avatar**: changed the `classes` prop to `className`
- **Avatar**: set avatar sizes to `small`, `medium`, or `large`
- **Button**: changed the `classes` prop to `className`
- **Button**: set button types to `destructive`, `primary`, `outlined`, or `text`
- **Button**: change `displayText` prop to `label`
- **Button**: add the following props: `isSubmit` and `size`
- **ThemeProvider**: created the theme provider and included a light theme configuration with a color palette and typography configuration that matches the Dot Design System

### Experimental

- **Menu**: created `DotMenu` wrapper component with included button for ease of consumption

## 0.1.2

### Experimental

- **Auto Complete**: Create the auto complete component. [Design docs](https://zeroheight.com/4a9ac476a/p/94a413-auto-complete/b/861f76).
- **Avatar**: Create the avatar component. [Design docs](https://zeroheight.com/4a9ac476a/p/357f84-avatar/b/207629).
- **Breadcrumbs**: Create the breadcrumbs component. [Design docs](https://zeroheight.com/4a9ac476a/p/67de7b-breadcrumbs/b/200388).
- **Button**: Create the button component. [Design docs](https://zeroheight.com/4a9ac476a/p/14028d-button/b/09d7b1).
- **Card**: Create the card component. [Design docs](https://zeroheight.com/4a9ac476a/p/7440a8-card/b/774ebb).
- **Chip**: Create the chip component. [Design docs](https://zeroheight.com/4a9ac476a/p/315218-chips/b/6323a7).
- **Confirmation Dialog**: Create the confirmation dialog component. [Design docs](https://zeroheight.com/4a9ac476a/p/516dfa-dialog/b/05631f).
- **Dialog**: Create the dialog component. [Design docs](https://zeroheight.com/4a9ac476a/p/516dfa-dialog/b/05631f).
- **Drawer**: Create the drawer component. [Design docs](https://zeroheight.com/4a9ac476a/p/84a534-drawer/b/200388).
- **Empty State**: Create the empty state component. [Design docs](https://zeroheight.com/4a9ac476a/p/413789-empty-state/b/483e63).
- **Header**: Create the header component. [Design docs](https://zeroheight.com/4a9ac476a/p/74161a-single-level-nav-flow/b/94d1c7).
- **Icon**: Create the icon component. [Design docs](https://zeroheight.com/4a9ac476a/p/56c3a8-icon).
- **Icon Button**: Create the icon button component. [Design docs](https://zeroheight.com/4a9ac476a/p/14028d-button/b/09d7b1).
- **Infinite Scroll**: Create the infinite scroll component. [Design docs](https://zeroheight.com/4a9ac476a/p/796995-infinite-scroll/b/533430).
- **Inline Edit**: Create the inline edit component. [Design docs](https://zeroheight.com/4a9ac476a/p/199edb-inline-edit/b/758e10).
- **Input Select**: Create the input select component. [Design docs](https://zeroheight.com/4a9ac476a/p/3194b2-input-text/b/7993c9).
- **Input Text**: Create the input text component. [Design docs](https://zeroheight.com/4a9ac476a/p/3194b2-input-text/b/7993c9).
- **Navigation**: Create the navigation component.
- **Paginated Table**: Create the infinite scroll component. [Design docs](https://zeroheight.com/4a9ac476a/p/662bde-table/b/25b7dc).
- **Progress**: Create the progress component. [Design docs](https://zeroheight.com/4a9ac476a/p/6102aa-progress-indicators/b/41fdf6).
- **Row**: Create the row component.
- **Skeleton**: Create the skeleton component. [Design docs](https://zeroheight.com/4a9ac476a/p/739a93-skeleton-loader/b/060be8).
- **Switch**: Create the switch component. [Design docs](https://zeroheight.com/4a9ac476a/p/906d11-switches/b/71f6ed).
- **Stage Card**: Create the stage card component. [Design docs](https://zeroheight.com/4a9ac476a/p/52a412-stage-card/b/57fcb0).
- **Step Card**: Create the stage card component. [Design docs](https://zeroheight.com/4a9ac476a/p/495871-step-card/b/426fc4).
