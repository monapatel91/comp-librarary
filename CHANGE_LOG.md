# Changelog

## [1.5.2](https://github.com/digital-ai/dot-components/tree/1.5.2) (12/17/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/1.5.1...1.5.2)

**Fixed bugs:**

- `Apptoolbar`: primary logo link is hardcoded to `/` [\#879](https://github.com/digital-ai/dot-components/issues/879)
- `AlertBanner` [\#834](https://github.com/digital-ai/dot-components/issues/834)
- D-19319: `Apptoolbar`: primary logo link is hardcoded to `/` [\#880](https://github.com/digital-ai/dot-components/pull/880) ([dmiletic85](https://github.com/dmiletic85))
- D-19197: Warning in console when using html elements as `AlertBanner` children. [\#874](https://github.com/digital-ai/dot-components/pull/874) ([dmiletic85](https://github.com/dmiletic85))

## [1.5.1](https://github.com/digital-ai/dot-components/tree/1.5.1) (12/17/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/1.5.0...1.5.1)

**Fixed bugs:**

- Breaking prop type change in DotAccordion [\#850](https://github.com/digital-ai/dot-components/issues/850)
- D-19247: summary prop [\#873](https://github.com/digital-ai/dot-components/pull/873) ([TheKeithStewart](https://github.com/TheKeithStewart))

## [1.5.0](https://github.com/digital-ai/dot-components/tree/1.5.0) (12/15/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/1.4.0...1.5.0)

**Features:**

- `Breadcrumbs` enhancement \(collapse and expand automatically\) [\#836](https://github.com/digital-ai/dot-components/issues/836)
- S-80586: Breadcrumbs enhancement \(collapse and expand automatically\) [\#843](https://github.com/digital-ai/dot-components/pull/843) ([dmiletic85](https://github.com/dmiletic85))

**Fixed bugs:**

- Expand/collapse broken for uncontrolled DotAccordion [\#865](https://github.com/digital-ai/dot-components/issues/865)
- `Breadcrumbs` meuItems is null when changing the amount of breadcrumb items [\#839](https://github.com/digital-ai/dot-components/issues/839)
- `Breadcrumbs` Setting `expansionMenu={true}` does not work always [\#838](https://github.com/digital-ai/dot-components/issues/838)
- `Breadcrumbs`  item with href should be full width clickable when using `expansionMenu={true}` [\#837](https://github.com/digital-ai/dot-components/issues/837)
- D-19294: Fix broken expand/collapse for uncontrolled accordion [\#866](https://github.com/digital-ai/dot-components/pull/866) ([selsemore](https://github.com/selsemore))

**Merged pull requests:**

- S-80787: branch protection [\#868](https://github.com/digital-ai/dot-components/pull/868) ([CWSites](https://github.com/CWSites))
- S-80783: add ESLint rule for alpha order [\#867](https://github.com/digital-ai/dot-components/pull/867) ([CWSites](https://github.com/CWSites))

## [1.4.0](https://github.com/digital-ai/dot-components/tree/1.4.0) (12/13/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/1.3.7...1.4.0)

**Features:**

- Expose 'expanded' and 'onChange' DotAccordion props [\#857](https://github.com/digital-ai/dot-components/issues/857)
- S-80740: Expose DotAccordion 'expanded' and 'onChange' props [\#860](https://github.com/digital-ai/dot-components/pull/860) ([selsemore](https://github.com/selsemore))

**Fixed bugs:**

- Accordion expanded and collapsed icons are not aligned [\#858](https://github.com/digital-ai/dot-components/issues/858)
- D-19250: Fix alignment of DotAccordion collapsed/expanded icons [\#859](https://github.com/digital-ai/dot-components/pull/859) ([selsemore](https://github.com/selsemore))

**Merged pull requests:**

- S-76843: Use digital.ai bot PAT for merging master \> develop [\#862](https://github.com/digital-ai/dot-components/pull/862) ([CWSites](https://github.com/CWSites))
- S-76843: move changelog pre v`1.0.0` to `HISTORY.md` [\#856](https://github.com/digital-ai/dot-components/pull/856) ([CWSites](https://github.com/CWSites))

## [1.3.7](https://github.com/digital-ai/dot-components/tree/1.3.7) (12/11/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/1.3.6...1.3.7)

**Merged pull requests:**

- S-76843: setup PR release template [\#853](https://github.com/digital-ai/dot-components/pull/853) ([CWSites](https://github.com/CWSites))
- S-76843 automation improvements III [\#852](https://github.com/digital-ai/dot-components/pull/852) ([CWSites](https://github.com/CWSites))
- Merge `master` back to `develop` [\#849](https://github.com/digital-ai/dot-components/pull/849) ([CWSites](https://github.com/CWSites))

## [1.3.6](https://github.com/digital-ai/dot-components/tree/1.3.6) (12/10/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/1.3.5...1.3.6)

**Features:**

- Expose onKeyDown for input [\#714](https://github.com/digital-ai/dot-components/issues/714)
- S-79571: DotInput - expose onKeyDown [\#846](https://github.com/digital-ai/dot-components/pull/846) ([monapatel91](https://github.com/monapatel91))
- S-79357: evaluate codebase and remove old references to core Tooltip [\#844](https://github.com/digital-ai/dot-components/pull/844) ([CWSites](https://github.com/CWSites))
- S-80621: file upload  [\#840](https://github.com/digital-ai/dot-components/pull/840) ([CWSites](https://github.com/CWSites))
- S-76922: file upload [\#820](https://github.com/digital-ai/dot-components/pull/820) ([CWSites](https://github.com/CWSites))

**Fixed bugs:**

- DotDynamicForm does not properly initialize form state for boolean attribute with initialValue false [\#841](https://github.com/digital-ai/dot-components/issues/841)
- Extended sidenav drawer should collapse when another drawer option is clicked [\#739](https://github.com/digital-ai/dot-components/issues/739)
- \#841 Fix DotDynamicForm initial form state for controls with initialValue false [\#842](https://github.com/digital-ai/dot-components/pull/842) ([selsemore](https://github.com/selsemore))
- D-19189: Extended sidenav drawer should collapse when another drawer option is clicked [\#830](https://github.com/digital-ai/dot-components/pull/830) ([dmiletic85](https://github.com/dmiletic85))

**Merged pull requests:**

- S-76843: only merge master back to develop AFTER the release is done [\#848](https://github.com/digital-ai/dot-components/pull/848) ([CWSites](https://github.com/CWSites))
- S-76843: testing out yarn install commands for CI [\#847](https://github.com/digital-ai/dot-components/pull/847) ([CWSites](https://github.com/CWSites))

## [1.3.5](https://github.com/digital-ai/dot-components/tree/1.3.5) (12/03/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/1.3.4...1.3.5)

**Features:**

- Expose onFocus and onBlur callbacks in DotInputText and other input components [\#829](https://github.com/digital-ai/dot-components/issues/829)
- Pass 'disabled' prop to DotDynamicForm controls [\#806](https://github.com/digital-ai/dot-components/issues/806)
- S-80473: Expose onFocus and onBlur callbacks for DotInputText and DotInputSelect components [\#832](https://github.com/digital-ai/dot-components/pull/832) ([selsemore](https://github.com/selsemore))
- S-80268: `DotDynamicForm` improvements [\#821](https://github.com/digital-ai/dot-components/pull/821) ([dmiletic85](https://github.com/dmiletic85))

**Fixed bugs:**

- Go back item in `Sidebar` is not aligned with rest of items [\#824](https://github.com/digital-ai/dot-components/issues/824)
- DotBadge generates console warnings [\#816](https://github.com/digital-ai/dot-components/issues/816)
- Sidebar scrollbar should be positioned on the very right of the sidebar [\#746](https://github.com/digital-ai/dot-components/issues/746)
- D-19151: `DotBadge` generates console warnings [\#827](https://github.com/digital-ai/dot-components/pull/827) ([dmiletic85](https://github.com/dmiletic85))
- D-19177: `Go back` item in `DotSidebar` is not aligned with rest of items [\#826](https://github.com/digital-ai/dot-components/pull/826) ([dmiletic85](https://github.com/dmiletic85))

**Merged pull requests:**

- merge `master` \> `develop` [\#825](https://github.com/digital-ai/dot-components/pull/825) ([CWSites](https://github.com/CWSites))

## [1.3.4](https://github.com/digital-ai/dot-components/tree/1.3.4) (11/30/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/1.3.3...1.3.4)

**Features:**

- Add to `DotList` right arrow in some cases [\#720](https://github.com/digital-ai/dot-components/issues/720)
- `DotTable` Provide a way to apply custom classes to table rows and cells [\#643](https://github.com/digital-ai/dot-components/issues/643)
- S-80369: Create `ProgressButton` component [\#822](https://github.com/digital-ai/dot-components/pull/822) ([dmiletic85](https://github.com/dmiletic85))
- S-79696: change size of collapse icon button, add tooltip [\#819](https://github.com/digital-ai/dot-components/pull/819) ([CWSites](https://github.com/CWSites))
- S-80264: Agility wrapper sandbox documentation [\#810](https://github.com/digital-ai/dot-components/pull/810) ([CWSites](https://github.com/CWSites))

**Fixed bugs:**

- Input elements not displaying correctly when `border-box` is used in consumer components [\#811](https://github.com/digital-ai/dot-components/issues/811)
- Breadcrumbs are not vertically aligned [\#809](https://github.com/digital-ai/dot-components/issues/809)
- Batman wasn't here :\( [\#807](https://github.com/digital-ai/dot-components/issues/807)
- TEST - GitHub + Agility Integration [\#800](https://github.com/digital-ai/dot-components/issues/800)
- Batman wasn't here [\#798](https://github.com/digital-ai/dot-components/issues/798)
- Alert component style issues [\#795](https://github.com/digital-ai/dot-components/issues/795)
- \#795 Address AlertBanner style issues [\#815](https://github.com/digital-ai/dot-components/pull/815) ([angel-git](https://github.com/angel-git))
- D-19138: Remove margin-bottom from breadcrumbs [\#813](https://github.com/digital-ai/dot-components/pull/813) ([angel-git](https://github.com/angel-git))
- D-19148: Input elements not displaying correctly when `border-box` is used in consumer components [\#812](https://github.com/digital-ai/dot-components/pull/812) ([dmiletic85](https://github.com/dmiletic85))

**Merged pull requests:**

- S-79569: Do not set custom class for table cell if none was provided [\#808](https://github.com/digital-ai/dot-components/pull/808) ([selsemore](https://github.com/selsemore))
- \[D-18631\]\[D-18632\]\[D-18802\]:Focus state of avatar button and sidebar list item and inaccurate count of nav item [\#804](https://github.com/digital-ai/dot-components/pull/804) ([monapatel91](https://github.com/monapatel91))
- 17 nov2021 update icon [\#803](https://github.com/digital-ai/dot-components/pull/803) ([BojanKocijan](https://github.com/BojanKocijan))
- S-79569: `DotTable` - ability to add classes to rows & cells [\#799](https://github.com/digital-ai/dot-components/pull/799) ([monapatel91](https://github.com/monapatel91))
- Bringing `master` back into `develop` [\#797](https://github.com/digital-ai/dot-components/pull/797) ([CWSites](https://github.com/CWSites))

## [1.3.3](https://github.com/digital-ai/dot-components/tree/1.3.3) (11/16/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/1.3.2...1.3.3)

**Features:**

- Add 'target' prop to ListItemProps [\#784](https://github.com/digital-ai/dot-components/issues/784)
- Expose built-in `leaveDelay`, `onClose`, `open` props on `DotTooltip` component [\#778](https://github.com/digital-ai/dot-components/issues/778)

**Fixed bugs:**

- `DotProgress` Displaying deprecation warning even when `title` prop is NOT set from the consumer component [\#783](https://github.com/digital-ai/dot-components/issues/783)
- Wrong z-index for autocomplete [\#779](https://github.com/digital-ai/dot-components/issues/779)
- DotInputText startIcon and endIcon are not aligned with text [\#764](https://github.com/digital-ai/dot-components/issues/764)
- Allow normal text formatting inside DotAlertBanner [\#738](https://github.com/digital-ai/dot-components/issues/738)

**Merged pull requests:**

- Next minor release [\#796](https://github.com/digital-ai/dot-components/pull/796) ([CWSites](https://github.com/CWSites))
- D-19069: `AutoComplete` z-index not behaving as expected [\#793](https://github.com/digital-ai/dot-components/pull/793) ([CWSites](https://github.com/CWSites))
- D-19067: slight vertical alignment of icon inside of input fields [\#792](https://github.com/digital-ai/dot-components/pull/792) ([CWSites](https://github.com/CWSites))
- D-19066: `AlertBanner` add `textVariant` prop for different font formatting [\#791](https://github.com/digital-ai/dot-components/pull/791) ([CWSites](https://github.com/CWSites))
- D-19065: `DotProgress` remove default `title` value [\#790](https://github.com/digital-ai/dot-components/pull/790) ([CWSites](https://github.com/CWSites))
- S-80103: add `yarn format:check` to PR verification and release testing [\#789](https://github.com/digital-ai/dot-components/pull/789) ([CWSites](https://github.com/CWSites))
- S-79880: Add 'target' prop to ListItemProps [\#788](https://github.com/digital-ai/dot-components/pull/788) ([selsemore](https://github.com/selsemore))
- S-80109: Expose built-in `leaveDelay`, `onClose`, `open` props on `DotTooltip` component [\#786](https://github.com/digital-ai/dot-components/pull/786) ([dmiletic85](https://github.com/dmiletic85))
- S-76907: update ButtonToggle styles, update unit tests and add e2e tests [\#785](https://github.com/digital-ai/dot-components/pull/785) ([CWSites](https://github.com/CWSites))
- S-80048: product wrapper demo [\#782](https://github.com/digital-ai/dot-components/pull/782) ([CWSites](https://github.com/CWSites))
- bring `master` back into `develop` [\#781](https://github.com/digital-ai/dot-components/pull/781) ([CWSites](https://github.com/CWSites))

## [1.3.2](https://github.com/digital-ai/dot-components/tree/1.3.2) (11/05/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/1.3.1...1.3.2)

**Features:**

- Add submitButtonProps prop to DotJsonSchemaForm component [\#774](https://github.com/digital-ai/dot-components/issues/774)
- Export all neutral colors [\#770](https://github.com/digital-ai/dot-components/issues/770)

**Merged pull requests:**

- Patch release [\#780](https://github.com/digital-ai/dot-components/pull/780) ([TheKeithStewart](https://github.com/TheKeithStewart))
- S-79985: temporarily remove react-jsonschema-form from library [\#776](https://github.com/digital-ai/dot-components/pull/776) ([TheKeithStewart](https://github.com/TheKeithStewart))
- Add submitButtonProps prop to DotJsonSchemaForm component [\#775](https://github.com/digital-ai/dot-components/pull/775) ([selsemore](https://github.com/selsemore))
- \#770 Add Neutral colors missing [\#771](https://github.com/digital-ai/dot-components/pull/771) ([angel-git](https://github.com/angel-git))
- D-19042: remove duplicate tooltips [\#769](https://github.com/digital-ai/dot-components/pull/769) ([CWSites](https://github.com/CWSites))
- S-76893: Webpack 4 - update peer dependencies [\#768](https://github.com/digital-ai/dot-components/pull/768) ([CWSites](https://github.com/CWSites))
- S-79957: improve husky [\#765](https://github.com/digital-ai/dot-components/pull/765) ([CWSites](https://github.com/CWSites))
- merge `master` \> `develop` [\#763](https://github.com/digital-ai/dot-components/pull/763) ([CWSites](https://github.com/CWSites))

## [1.3.1](https://github.com/digital-ai/dot-components/tree/1.3.1) (10/30/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/1.3.0...1.3.1)

**Fixed bugs:**

- Lato 700 is not rendered correctly on Digital.ai Release with dot-components [\#758](https://github.com/digital-ai/dot-components/issues/758)
- Circular Dependency - Dynamic Form [\#757](https://github.com/digital-ai/dot-components/issues/757)

**Merged pull requests:**

- Next \[PATCH\] Release [\#762](https://github.com/digital-ai/dot-components/pull/762) ([CWSites](https://github.com/CWSites))
- D-19026: Missing required prop for icon button when importing it to table cell [\#761](https://github.com/digital-ai/dot-components/pull/761) ([monapatel91](https://github.com/monapatel91))
- D-18543: proper export of type and interface [\#760](https://github.com/digital-ai/dot-components/pull/760) ([CWSites](https://github.com/CWSites))
- D-19023: Circular Dependency in `DynamicForm` component [\#759](https://github.com/digital-ai/dot-components/pull/759) ([dmiletic85](https://github.com/dmiletic85))
- Bring `master` back into `develop` [\#756](https://github.com/digital-ai/dot-components/pull/756) ([CWSites](https://github.com/CWSites))
- S-79458: `Sidebar` apply agility specific updates to theme only [\#755](https://github.com/digital-ai/dot-components/pull/755) ([CWSites](https://github.com/CWSites))
- S-77126: react jsonschema form wrapper [\#728](https://github.com/digital-ai/dot-components/pull/728) ([TheKeithStewart](https://github.com/TheKeithStewart))

## [1.3.0](https://github.com/digital-ai/dot-components/tree/1.3.0) (10/28/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/1.2.1...1.3.0)

**Features:**

- Forms [\#594](https://github.com/digital-ai/dot-components/issues/594)

**Fixed bugs:**

- AppToolbar height change breaks layout for consumer [\#733](https://github.com/digital-ai/dot-components/issues/733)
- `DotMenu` max height calculation doesn't take paddings into the consideration [\#707](https://github.com/digital-ai/dot-components/issues/707)

**Merged pull requests:**

- D-19011: remove default MUI min width of end icon on list item [\#754](https://github.com/digital-ai/dot-components/pull/754) ([CWSites](https://github.com/CWSites))
- Next \[MINOR\] release [\#753](https://github.com/digital-ai/dot-components/pull/753) ([monapatel91](https://github.com/monapatel91))
- 27 oct2021 update name of progression icon [\#751](https://github.com/digital-ai/dot-components/pull/751) ([BojanKocijan](https://github.com/BojanKocijan))
- D-19004: update readme link to be accurate [\#750](https://github.com/digital-ai/dot-components/pull/750) ([CWSites](https://github.com/CWSites))
- D-18990: allow consumers to pass custom menu item height [\#749](https://github.com/digital-ai/dot-components/pull/749) ([CWSites](https://github.com/CWSites))
- Updated icons 26 oct 2021 [\#748](https://github.com/digital-ai/dot-components/pull/748) ([BojanKocijan](https://github.com/BojanKocijan))
- D-18992: Missing disabled prop of icon button when importing it to tablecell [\#745](https://github.com/digital-ai/dot-components/pull/745) ([monapatel91](https://github.com/monapatel91))
- Icons: integrations, plugins [\#744](https://github.com/digital-ai/dot-components/pull/744) ([BojanKocijan](https://github.com/BojanKocijan))
- Icons update oct 25 2021 [\#743](https://github.com/digital-ai/dot-components/pull/743) ([BojanKocijan](https://github.com/BojanKocijan))
- S-79594: Add optional debounce prop to `DotInputText` [\#742](https://github.com/digital-ai/dot-components/pull/742) ([dmiletic85](https://github.com/dmiletic85))
- D-18997: when specified width of sidebar, it should be applied properly [\#737](https://github.com/digital-ai/dot-components/pull/737) ([CWSites](https://github.com/CWSites))
- S-76892: create generator for new components [\#736](https://github.com/digital-ai/dot-components/pull/736) ([CWSites](https://github.com/CWSites))
- D-18986: update app toolbar to be dense by default [\#735](https://github.com/digital-ai/dot-components/pull/735) ([CWSites](https://github.com/CWSites))
- D-18985: update menu list to be content-box sizing [\#734](https://github.com/digital-ai/dot-components/pull/734) ([CWSites](https://github.com/CWSites))
- S-77126: Dynamic Form [\#717](https://github.com/digital-ai/dot-components/pull/717) ([dmiletic85](https://github.com/dmiletic85))

## [1.2.1](https://github.com/digital-ai/dot-components/tree/1.2.1) (10/15/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/1.2.0...1.2.1)

**Fixed bugs:**

- Alpha .25 doesn't work well within agility dark theme [\#710](https://github.com/digital-ai/dot-components/issues/710)

**Closed issues:**

- Add `ariaLabel` prop on `DotIconButton` instance within `Sidebar` component [\#703](https://github.com/digital-ai/dot-components/issues/703)

**Merged pull requests:**

- next release [\#732](https://github.com/digital-ai/dot-components/pull/732) ([CWSites](https://github.com/CWSites))
- D-18963: add ariaLabel to sidebar collapse button [\#731](https://github.com/digital-ai/dot-components/pull/731) ([CWSites](https://github.com/CWSites))
- S-76840: update contributing guidelines and PR template [\#730](https://github.com/digital-ai/dot-components/pull/730) ([CWSites](https://github.com/CWSites))
- D-18979: export `Tooltip` component [\#729](https://github.com/digital-ai/dot-components/pull/729) ([CWSites](https://github.com/CWSites))
- Merge pull request \#719 from digital-ai/develop [\#727](https://github.com/digital-ai/dot-components/pull/727) ([CWSites](https://github.com/CWSites))

## [1.2.0](https://github.com/digital-ai/dot-components/tree/1.2.0) (10/14/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/1.1.1...1.2.0)

**Fixed bugs:**

- Missing return on `List` [\#721](https://github.com/digital-ai/dot-components/issues/721)
- Menu className doesn't apply to relevant attribute or theming not correct [\#711](https://github.com/digital-ai/dot-components/issues/711)
- `Avatar` component is using `default` value for icon font size and is generating console warning [\#708](https://github.com/digital-ai/dot-components/issues/708)
- Wrong background colour on `DotAlertBanner` on top of a `DotDialog` [\#702](https://github.com/digital-ai/dot-components/issues/702)

**Merged pull requests:**

- D-18961: update dialog styles to be more explicit [\#726](https://github.com/digital-ai/dot-components/pull/726) ([CWSites](https://github.com/CWSites))
- D-18964: update icon fontSize to use `medium` instead of `default` [\#725](https://github.com/digital-ai/dot-components/pull/725) ([CWSites](https://github.com/CWSites))
- D-18973: `DotList` missing return statement [\#724](https://github.com/digital-ai/dot-components/pull/724) ([CWSites](https://github.com/CWSites))
- D-18972: custom logo height constraints [\#723](https://github.com/digital-ai/dot-components/pull/723) ([CWSites](https://github.com/CWSites))
- D-18970: remove color prop from Badge storybook config [\#722](https://github.com/digital-ai/dot-components/pull/722) ([CWSites](https://github.com/CWSites))
- MINOR release [\#719](https://github.com/digital-ai/dot-components/pull/719) ([CWSites](https://github.com/CWSites))
- Icons oct 13 2021 [\#718](https://github.com/digital-ai/dot-components/pull/718) ([BojanKocijan](https://github.com/BojanKocijan))
- S-78918: add loading indicator to menu [\#716](https://github.com/digital-ai/dot-components/pull/716) ([CWSites](https://github.com/CWSites))
- S-78834: update icon buttons to follow agility theme more closely [\#715](https://github.com/digital-ai/dot-components/pull/715) ([CWSites](https://github.com/CWSites))
- S-77041: New component tooltip [\#713](https://github.com/digital-ai/dot-components/pull/713) ([monapatel91](https://github.com/monapatel91))
- S-76773: product badges in app toolbar and sidebar [\#712](https://github.com/digital-ai/dot-components/pull/712) ([CWSites](https://github.com/CWSites))
- Icons update oct 7th 2021 [\#709](https://github.com/digital-ai/dot-components/pull/709) ([BojanKocijan](https://github.com/BojanKocijan))
- Bring `master` back into `develop` [\#705](https://github.com/digital-ai/dot-components/pull/705) ([CWSites](https://github.com/CWSites))
- S-78833 agility sidebar [\#701](https://github.com/digital-ai/dot-components/pull/701) ([CWSites](https://github.com/CWSites))

## [1.1.1](https://github.com/digital-ai/dot-components/tree/1.1.1) (10/06/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/1.1.0...1.1.1)

**Closed issues:**

- Security Updates [\#699](https://github.com/digital-ai/dot-components/issues/699)

**Merged pull requests:**

- MINOR RELEASE [\#704](https://github.com/digital-ai/dot-components/pull/704) ([CWSites](https://github.com/CWSites))
- S-79291: update nested dependencies [\#700](https://github.com/digital-ai/dot-components/pull/700) ([CWSites](https://github.com/CWSites))
- S-78832: Agility icon & badge updates [\#698](https://github.com/digital-ai/dot-components/pull/698) ([CWSites](https://github.com/CWSites))
- S-79251: add workflow for sonarqube scan when code merged to develop [\#697](https://github.com/digital-ai/dot-components/pull/697) ([CWSites](https://github.com/CWSites))
- Bring `master` back into `develop` [\#696](https://github.com/digital-ai/dot-components/pull/696) ([CWSites](https://github.com/CWSites))
- S-76906: table action column [\#692](https://github.com/digital-ai/dot-components/pull/692) ([monapatel91](https://github.com/monapatel91))
- S-78164: Sticky menu item on DotMenu component [\#687](https://github.com/digital-ai/dot-components/pull/687) ([dmiletic85](https://github.com/dmiletic85))

## [1.1.0](https://github.com/digital-ai/dot-components/tree/1.1.0) (09/29/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/1.0.12...1.1.0)

**Fixed bugs:**

- value prop isn't being passed to tab [\#693](https://github.com/digital-ai/dot-components/issues/693)

**Merged pull requests:**

- MINOR release [\#695](https://github.com/digital-ai/dot-components/pull/695) ([CWSites](https://github.com/CWSites))
- pass value to tab [\#694](https://github.com/digital-ai/dot-components/pull/694) ([kmmarsh](https://github.com/kmmarsh))
- S-78831: update AppToolbar component for Agility [\#691](https://github.com/digital-ai/dot-components/pull/691) ([CWSites](https://github.com/CWSites))
- Bring `master` back into `develop` [\#690](https://github.com/digital-ai/dot-components/pull/690) ([CWSites](https://github.com/CWSites))

## [1.0.12](https://github.com/digital-ai/dot-components/tree/1.0.12) (09/23/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/1.0.11...1.0.12)

**Fixed bugs:**

- `DotAppToobar` has z-index higher than autocomplete [\#669](https://github.com/digital-ai/dot-components/issues/669)
- `Link` component is not triggered on `Enter` key [\#630](https://github.com/digital-ai/dot-components/issues/630)
- `AutoComplete` component has incorrectly typed `AutoCompleteValue` in `onChange` signature [\#627](https://github.com/digital-ai/dot-components/issues/627)

**Merged pull requests:**

- Next Release [\#689](https://github.com/digital-ai/dot-components/pull/689) ([CWSites](https://github.com/CWSites))
- D-18817: set mainMenuItems to `null` by default [\#688](https://github.com/digital-ai/dot-components/pull/688) ([CWSites](https://github.com/CWSites))
- D-18664: update link to allow for keypress [\#686](https://github.com/digital-ai/dot-components/pull/686) ([CWSites](https://github.com/CWSites))
- D-18665: AppToolbar z-index update [\#685](https://github.com/digital-ai/dot-components/pull/685) ([CWSites](https://github.com/CWSites))
- D-18663: Update AutoComplete value typing [\#684](https://github.com/digital-ai/dot-components/pull/684) ([CWSites](https://github.com/CWSites))
- Bring `master` back into `develop` [\#683](https://github.com/digital-ai/dot-components/pull/683) ([CWSites](https://github.com/CWSites))
- S-78051: Feedback on Navigation Rail component [\#681](https://github.com/digital-ai/dot-components/pull/681) ([dmiletic85](https://github.com/dmiletic85))

## [1.0.11](https://github.com/digital-ai/dot-components/tree/1.0.11) (09/16/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/1.0.10...1.0.11)

**Fixed bugs:**

- DotListItem [\#611](https://github.com/digital-ai/dot-components/issues/611)

**Merged pull requests:**

- Next Release [\#682](https://github.com/digital-ai/dot-components/pull/682) ([CWSites](https://github.com/CWSites))
- S-78594: Update avatar component to randomly assign a color of the avatar background to the signed in user [\#680](https://github.com/digital-ai/dot-components/pull/680) ([dmiletic85](https://github.com/dmiletic85))
- D-18421: close hamburger on navigate [\#679](https://github.com/digital-ai/dot-components/pull/679) ([CWSites](https://github.com/CWSites))
- Bring `master` back into `develop` after release. [\#678](https://github.com/digital-ai/dot-components/pull/678) ([CWSites](https://github.com/CWSites))

## [1.0.10](https://github.com/digital-ai/dot-components/tree/1.0.10) (09/09/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/1.0.9...1.0.10)

**Fixed bugs:**

- Console warnings while running unit tests for codebase that is consuming dot-components library [\#629](https://github.com/digital-ai/dot-components/issues/629)

**Merged pull requests:**

- New patch release [\#677](https://github.com/digital-ai/dot-components/pull/677) ([CWSites](https://github.com/CWSites))
- D-18424: include breadcrumb wrapper with breadcrumb component [\#675](https://github.com/digital-ai/dot-components/pull/675) ([CWSites](https://github.com/CWSites))
- Merge `master` back to `develop` [\#674](https://github.com/digital-ai/dot-components/pull/674) ([CWSites](https://github.com/CWSites))
- D-18536: material 4.12.3 upgrade [\#667](https://github.com/digital-ai/dot-components/pull/667) ([CWSites](https://github.com/CWSites))

## [1.0.9](https://github.com/digital-ai/dot-components/tree/1.0.9) (09/02/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/1.0.8...1.0.9)

**Features:**

- \[DotTable\] Ability to make table body cell centered [\#609](https://github.com/digital-ai/dot-components/issues/609)
- \[DotTable\] Additional prop for making table cell field truncated and displayed in one line [\#602](https://github.com/digital-ai/dot-components/issues/602)

**Fixed bugs:**

- untouched modified files [\#660](https://github.com/digital-ai/dot-components/issues/660)
- Update Agility colors [\#656](https://github.com/digital-ai/dot-components/issues/656)
- Add aria-label property [\#632](https://github.com/digital-ai/dot-components/issues/632)

**Merged pull requests:**

- Release `1.0.8` [\#673](https://github.com/digital-ai/dot-components/pull/673) ([CWSites](https://github.com/CWSites))
- D-18730: action toolbar support [\#671](https://github.com/digital-ai/dot-components/pull/671) ([CWSites](https://github.com/CWSites))
- S-78572: Make entire sidebar backitem clickable [\#670](https://github.com/digital-ai/dot-components/pull/670) ([selsemore](https://github.com/selsemore))
- improving table component by fixing issues reported on github [\#668](https://github.com/digital-ai/dot-components/pull/668) ([monapatel91](https://github.com/monapatel91))
- S-78516 extra files being formatted [\#665](https://github.com/digital-ai/dot-components/pull/665) ([TheKeithStewart](https://github.com/TheKeithStewart))
- S-78464: add main branch name [\#664](https://github.com/digital-ai/dot-components/pull/664) ([CWSites](https://github.com/CWSites))
- S-78497: Add 'page' prop to DotTable [\#662](https://github.com/digital-ai/dot-components/pull/662) ([selsemore](https://github.com/selsemore))
- S-78487: Add agility colors for Accordion, Pill and Tabs [\#661](https://github.com/digital-ai/dot-components/pull/661) ([angel-git](https://github.com/angel-git))
- Issue \#632: Add aria-label property [\#659](https://github.com/digital-ai/dot-components/pull/659) ([dmiletic85](https://github.com/dmiletic85))
- S-78464: SonarQube [\#657](https://github.com/digital-ai/dot-components/pull/657) ([CWSites](https://github.com/CWSites))
- D-18607: Fix rowsPerPage parsing and do not pad table with empty rows [\#655](https://github.com/digital-ai/dot-components/pull/655) ([selsemore](https://github.com/selsemore))
- S-78388: Export interfaces and types needed for table pagination and sorting [\#654](https://github.com/digital-ai/dot-components/pull/654) ([selsemore](https://github.com/selsemore))
- S-77872: gather test coverage in sonarcloud [\#653](https://github.com/digital-ai/dot-components/pull/653) ([CWSites](https://github.com/CWSites))

## [1.0.8](https://github.com/digital-ai/dot-components/tree/1.0.8) (08/23/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/1.0.7...1.0.8)

**Fixed bugs:**

- Some things that were being used by consumers were removed from the exports of the library [\#650](https://github.com/digital-ai/dot-components/issues/650)

**Merged pull requests:**

- add export back to component library [\#652](https://github.com/digital-ai/dot-components/pull/652) ([CWSites](https://github.com/CWSites))
- add back missing items from export [\#651](https://github.com/digital-ai/dot-components/pull/651) ([TheKeithStewart](https://github.com/TheKeithStewart))
- Master back into develop [\#649](https://github.com/digital-ai/dot-components/pull/649) ([CWSites](https://github.com/CWSites))

## [1.0.7](https://github.com/digital-ai/dot-components/tree/1.0.7) (08/23/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/1.0.6...1.0.7)

**Fixed bugs:**

- Link color is hardcoded for agility product [\#641](https://github.com/digital-ai/dot-components/issues/641)
- Error when installing dot-components in a project that is on version 17 of React [\#591](https://github.com/digital-ai/dot-components/issues/591)

**Closed issues:**

- Dialog Accessibility enhancement [\#648](https://github.com/digital-ai/dot-components/issues/648)

**Merged pull requests:**

- Add autofocus property to Button [\#647](https://github.com/digital-ai/dot-components/pull/647) ([angel-git](https://github.com/angel-git))
- remove customer logo and use imaginary test logo instead [\#646](https://github.com/digital-ai/dot-components/pull/646) ([CWSites](https://github.com/CWSites))
- Patch release [\#645](https://github.com/digital-ai/dot-components/pull/645) ([CWSites](https://github.com/CWSites))
- S-78162: adjust link color [\#642](https://github.com/digital-ai/dot-components/pull/642) ([CWSites](https://github.com/CWSites))
- update all API unit tests to not have duplicate data [\#639](https://github.com/digital-ai/dot-components/pull/639) ([CWSites](https://github.com/CWSites))
- Custom main logo in the AppToolbar [\#637](https://github.com/digital-ai/dot-components/pull/637) ([monapatel91](https://github.com/monapatel91))

## [1.0.6](https://github.com/digital-ai/dot-components/tree/1.0.6) (08/18/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/1.0.5...1.0.6)

**Features:**

- New component alert banner [\#625](https://github.com/digital-ai/dot-components/pull/625) ([monapatel91](https://github.com/monapatel91))

**Fixed bugs:**

- Dialog and autocomplete dont follow agility dark theme [\#631](https://github.com/digital-ai/dot-components/issues/631)
- Fix agility theme colors [\#623](https://github.com/digital-ai/dot-components/issues/623)

**Merged pull requests:**

- Next patch release with agility theme colors [\#638](https://github.com/digital-ai/dot-components/pull/638) ([CWSites](https://github.com/CWSites))
- S 78162: agility theme [\#636](https://github.com/digital-ai/dot-components/pull/636) ([CWSites](https://github.com/CWSites))
- update the peerDependencies to support all appropriate versions of React [\#634](https://github.com/digital-ai/dot-components/pull/634) ([monapatel91](https://github.com/monapatel91))
- Feedback of snackbar [\#628](https://github.com/digital-ai/dot-components/pull/628) ([monapatel91](https://github.com/monapatel91))
- S-77873: Support agility themes in certain components [\#626](https://github.com/digital-ai/dot-components/pull/626) ([CWSites](https://github.com/CWSites))
- D-18346: fix sidebar menu item height [\#624](https://github.com/digital-ai/dot-components/pull/624) ([selsemore](https://github.com/selsemore))
- Merging master back into develop [\#622](https://github.com/digital-ai/dot-components/pull/622) ([CWSites](https://github.com/CWSites))

## [1.0.5](https://github.com/digital-ai/dot-components/tree/1.0.5) (07/28/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/1.0.4...1.0.5)

**Merged pull requests:**

- Merging develop onto master [\#621](https://github.com/digital-ai/dot-components/pull/621) ([TheKeithStewart](https://github.com/TheKeithStewart))
- pin material-ui lab version [\#620](https://github.com/digital-ai/dot-components/pull/620) ([TheKeithStewart](https://github.com/TheKeithStewart))

## [1.0.4](https://github.com/digital-ai/dot-components/tree/1.0.4) (07/28/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/1.0.3...1.0.4)

**Features:**

- S-76930: New Component: DotSnackbar [\#607](https://github.com/digital-ai/dot-components/pull/607) ([coryell1287](https://github.com/coryell1287))

**Merged pull requests:**

- Resolve issue from MUI console errors due to unlocked version of @material-ui/lab [\#619](https://github.com/digital-ai/dot-components/pull/619) ([CWSites](https://github.com/CWSites))
- Merging master back into develop [\#618](https://github.com/digital-ai/dot-components/pull/618) ([CWSites](https://github.com/CWSites))
- S-77134: lock @material-ui/lab to 4.0.0-alpha.56 [\#617](https://github.com/digital-ai/dot-components/pull/617) ([CWSites](https://github.com/CWSites))
- S-76627: new snackbar provider [\#616](https://github.com/digital-ai/dot-components/pull/616) ([TheKeithStewart](https://github.com/TheKeithStewart))
- S-76905 split button component back to experimental [\#614](https://github.com/digital-ai/dot-components/pull/614) ([CWSites](https://github.com/CWSites))
- S-76905: update SplitButton design and functionality [\#613](https://github.com/digital-ai/dot-components/pull/613) ([CWSites](https://github.com/CWSites))
- S-77681: setup test-coverage for reporting on dot-components [\#610](https://github.com/digital-ai/dot-components/pull/610) ([CWSites](https://github.com/CWSites))
- S-76838: address Sonarcloud code issues [\#608](https://github.com/digital-ai/dot-components/pull/608) ([CWSites](https://github.com/CWSites))
- S-76918: DialogButtonProps updated with more available BaseButtonProps [\#605](https://github.com/digital-ai/dot-components/pull/605) ([CWSites](https://github.com/CWSites))
- D-18306: lock material UI to `4.11.x` [\#604](https://github.com/digital-ai/dot-components/pull/604) ([CWSites](https://github.com/CWSites))
- S-77317: Add 'height' prop to DotDrawer component [\#603](https://github.com/digital-ai/dot-components/pull/603) ([selsemore](https://github.com/selsemore))
- Update GitHub prerelease [\#599](https://github.com/digital-ai/dot-components/pull/599) ([CWSites](https://github.com/CWSites))
- S-76917: remove progressionBoard styles from theme provider [\#597](https://github.com/digital-ai/dot-components/pull/597) ([CWSites](https://github.com/CWSites))

## [1.0.3](https://github.com/digital-ai/dot-components/tree/1.0.3) (07/27/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/1.0.2...1.0.3)

**Features:**

- Add height property to DotDrawer component [\#600](https://github.com/digital-ai/dot-components/issues/600)
- Address theme overrides in consuming applications. [\#578](https://github.com/digital-ai/dot-components/issues/578)

**Fixed bugs:**

- Not all button props are passed to the buttons in a Dialog [\#571](https://github.com/digital-ai/dot-components/issues/571)

**Merged pull requests:**

- Deploying latest to master [\#615](https://github.com/digital-ai/dot-components/pull/615) ([CWSites](https://github.com/CWSites))

## [1.0.2](https://github.com/digital-ai/dot-components/tree/1.0.2) (07/08/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/1.0.1...1.0.2)

**Merged pull requests:**

- S-76905: add disablePortal prop to SplitButton and set z-index for SplitButton menu [\#596](https://github.com/digital-ai/dot-components/pull/596) ([selsemore](https://github.com/selsemore))
- S-76905: fix error upon selection of split button option with non-numeric key [\#595](https://github.com/digital-ai/dot-components/pull/595) ([selsemore](https://github.com/selsemore))
- updating github workflow to default to patch release [\#593](https://github.com/digital-ai/dot-components/pull/593) ([CWSites](https://github.com/CWSites))
- S-76914: optional prop for truncating accordion summary to one line [\#590](https://github.com/digital-ai/dot-components/pull/590) ([CWSites](https://github.com/CWSites))
- Update icons [\#589](https://github.com/digital-ai/dot-components/pull/589) ([BojanKocijan](https://github.com/BojanKocijan))
- Issue \#555: build warnings [\#588](https://github.com/digital-ai/dot-components/pull/588) ([CWSites](https://github.com/CWSites))
- Issue \#181: Create Security Policy [\#584](https://github.com/digital-ai/dot-components/pull/584) ([CWSites](https://github.com/CWSites))
- Issue \#572: move storybook dependency [\#582](https://github.com/digital-ai/dot-components/pull/582) ([CWSites](https://github.com/CWSites))
- resolve high severity security vulnerabilities [\#581](https://github.com/digital-ai/dot-components/pull/581) ([CWSites](https://github.com/CWSites))
- Update issue templates [\#580](https://github.com/digital-ai/dot-components/pull/580) ([CWSites](https://github.com/CWSites))
- Upload of commit icon [\#575](https://github.com/digital-ai/dot-components/pull/575) ([BojanKocijan](https://github.com/BojanKocijan))
- S-76321: Remove PB-related code from dot-components repo [\#570](https://github.com/digital-ai/dot-components/pull/570) ([dmiletic85](https://github.com/dmiletic85))
- Issue \#562: Fix EmptyState behavior when no imageSrc prop is passed [\#568](https://github.com/digital-ai/dot-components/pull/568) ([selsemore](https://github.com/selsemore))
- Issue \#566: Fix DotPill console warning message [\#567](https://github.com/digital-ai/dot-components/pull/567) ([selsemore](https://github.com/selsemore))
- Navigation rail improvements [\#565](https://github.com/digital-ai/dot-components/pull/565) ([dmiletic85](https://github.com/dmiletic85))
- New icons 27 5 2021 [\#564](https://github.com/digital-ai/dot-components/pull/564) ([BojanKocijan](https://github.com/BojanKocijan))
- Add isUnderToolbar property to Sidebar for use beneath AppToolbar [\#560](https://github.com/digital-ai/dot-components/pull/560) ([selsemore](https://github.com/selsemore))
- Move approved components to "Stable" [\#559](https://github.com/digital-ai/dot-components/pull/559) ([CWSites](https://github.com/CWSites))
- merging master \> develop [\#557](https://github.com/digital-ai/dot-components/pull/557) ([CWSites](https://github.com/CWSites))
- S-75998: \[PB Tech Debt\] Avoid unnecessary form re-renders when typing application name [\#556](https://github.com/digital-ai/dot-components/pull/556) ([dmiletic85](https://github.com/dmiletic85))
- S-75991: \[PB Tech Debt\] Refactor and improve wrapper component in demo app [\#546](https://github.com/digital-ai/dot-components/pull/546) ([dmiletic85](https://github.com/dmiletic85))

## [1.0.1](https://github.com/digital-ai/dot-components/tree/1.0.1) (07/02/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/1.0.0...1.0.1)

**Features:**

- Improvements to `Table` Component [\#577](https://github.com/digital-ai/dot-components/issues/577)
- Expose `title` prop on input fields [\#576](https://github.com/digital-ai/dot-components/issues/576)
- Additional Accordion prop for making summary field truncated and displayed in one line  [\#574](https://github.com/digital-ai/dot-components/issues/574)
- Breakpoint updates [\#573](https://github.com/digital-ai/dot-components/issues/573)
- Drag and Drop Layout Engine POC [\#526](https://github.com/digital-ai/dot-components/issues/526)
- Component: POC Custom Flyout Side Panel [\#473](https://github.com/digital-ai/dot-components/issues/473)
- Storybook improvements for components with subcomponents [\#242](https://github.com/digital-ai/dot-components/issues/242)
- App Switcher [\#69](https://github.com/digital-ai/dot-components/issues/69)

**Fixed bugs:**

- The package.json that is published with the component includes @react-theming/storybook-addon as a peerDependency [\#572](https://github.com/digital-ai/dot-components/issues/572)
- DotCheckboxGroup value prop is of the wrong data type [\#561](https://github.com/digital-ai/dot-components/issues/561)
- Workitem hover/selection causes unnecessary progression board re-renders with DOM updates [\#531](https://github.com/digital-ai/dot-components/issues/531)
- ProgressionBoard phases shouldn't take full width of the board [\#504](https://github.com/digital-ai/dot-components/issues/504)
- Some components do not look good using dark themes [\#478](https://github.com/digital-ai/dot-components/issues/478)
- `ProgressionBoard` using deprecated `findDOMNode` on `demo` [\#430](https://github.com/digital-ai/dot-components/issues/430)

**Closed issues:**

- Export Helpers [\#587](https://github.com/digital-ai/dot-components/issues/587)
- Automation Improvements [\#585](https://github.com/digital-ai/dot-components/issues/585)
- Component: `InlineEdit` [\#583](https://github.com/digital-ai/dot-components/issues/583)
- Component: `SplitButton` [\#579](https://github.com/digital-ai/dot-components/issues/579)
- ButtonToggle [\#563](https://github.com/digital-ai/dot-components/issues/563)
- Outstanding build warnings [\#555](https://github.com/digital-ai/dot-components/issues/555)
- Cross browser testing [\#441](https://github.com/digital-ai/dot-components/issues/441)
- Review `vsm-hub` Codebase [\#391](https://github.com/digital-ai/dot-components/issues/391)
- SPIKE: snapshot testing [\#264](https://github.com/digital-ai/dot-components/issues/264)
- Custom schematic for generating code for the library [\#259](https://github.com/digital-ai/dot-components/issues/259)
- Upgrade Material-UI to v5 [\#220](https://github.com/digital-ai/dot-components/issues/220)
- Setup Experitest [\#216](https://github.com/digital-ai/dot-components/issues/216)
- Better storybook controls [\#197](https://github.com/digital-ai/dot-components/issues/197)
- S-74178: Publish demo site to a hosted environment [\#97](https://github.com/digital-ai/dot-components/issues/97)
- S-73859: Configure Sonar Cloud [\#95](https://github.com/digital-ai/dot-components/issues/95)
- Future roadmap  [\#90](https://github.com/digital-ai/dot-components/issues/90)

**Merged pull requests:**

- Deploying latest to master [\#592](https://github.com/digital-ai/dot-components/pull/592) ([CWSites](https://github.com/CWSites))

## [v0.0.1-alpha.0](https://github.com/digital-ai/dot-components/tree/v0.0.1-alpha.0) (05/19/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/v0.0.0-alpha.45...v0.0.1-alpha.0)

**Fixed bugs:**

- ZeroHeight CORS issue [\#549](https://github.com/digital-ai/dot-components/issues/549)

**Merged pull requests:**

- Updating master to `0.0.1-alpha` [\#552](https://github.com/digital-ai/dot-components/pull/552) ([CWSites](https://github.com/CWSites))
- Updating to `0.0.1` [\#551](https://github.com/digital-ai/dot-components/pull/551) ([CWSites](https://github.com/CWSites))
- 5/10/21 update icon [\#545](https://github.com/digital-ai/dot-components/pull/545) ([BojanKocijan](https://github.com/BojanKocijan))
- D-17921 Remove the unused icons from the legend. [\#544](https://github.com/digital-ai/dot-components/pull/544) ([HakujouRyu](https://github.com/HakujouRyu))
- bump material-ui to v4.11.2 [\#543](https://github.com/digital-ai/dot-components/pull/543) ([CWSites](https://github.com/CWSites))
- Bring build changes into `develop` [\#541](https://github.com/digital-ai/dot-components/pull/541) ([CWSites](https://github.com/CWSites))

## [v0.0.0-alpha.45](https://github.com/digital-ai/dot-components/tree/v0.0.0-alpha.45) (05/18/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/v0.0.0-alpha.44...v0.0.0-alpha.45)

## [v0.0.0-alpha.44](https://github.com/digital-ai/dot-components/tree/v0.0.0-alpha.44) (05/18/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/v0.0.0-alpha.43...v0.0.0-alpha.44)

## [v0.0.0-alpha.43](https://github.com/digital-ai/dot-components/tree/v0.0.0-alpha.43) (05/18/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/v0.0.0-alpha.42...v0.0.0-alpha.43)

## [v0.0.0-alpha.42](https://github.com/digital-ai/dot-components/tree/v0.0.0-alpha.42) (05/17/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/v0.0.0-alpha.40...v0.0.0-alpha.42)

## [v0.0.0-alpha.40](https://github.com/digital-ai/dot-components/tree/v0.0.0-alpha.40) (05/17/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/v0.0.0-alpha.39...v0.0.0-alpha.40)

## [v0.0.0-alpha.39](https://github.com/digital-ai/dot-components/tree/v0.0.0-alpha.39) (05/17/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/v0.0.0-alpha.38...v0.0.0-alpha.39)

## [v0.0.0-alpha.38](https://github.com/digital-ai/dot-components/tree/v0.0.0-alpha.38) (05/17/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/v0.0.0-alpha.37...v0.0.0-alpha.38)

## [v0.0.0-alpha.37](https://github.com/digital-ai/dot-components/tree/v0.0.0-alpha.37) (05/17/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/v0.0.0-alpha.36...v0.0.0-alpha.37)

## [v0.0.0-alpha.36](https://github.com/digital-ai/dot-components/tree/v0.0.0-alpha.36) (05/17/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/v0.0.0-alpha.35...v0.0.0-alpha.36)

**Fixed bugs:**

- running `npm install` on fresh install fails [\#542](https://github.com/digital-ai/dot-components/issues/542)

## [v0.0.0-alpha.35](https://github.com/digital-ai/dot-components/tree/v0.0.0-alpha.35) (05/14/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/v0.0.0-alpha.34...v0.0.0-alpha.35)

**Fixed bugs:**

- Table cells have useless tooltips [\#539](https://github.com/digital-ai/dot-components/issues/539)
- \[Progression\] Application name validation is not trimming whitespaces when doing duplicate name check [\#536](https://github.com/digital-ai/dot-components/issues/536)
- Error when displaying the Skeleton loader while a table is loading [\#535](https://github.com/digital-ai/dot-components/issues/535)
- List and Sidebar show multiple flyout menus at the same time [\#523](https://github.com/digital-ai/dot-components/issues/523)

**Merged pull requests:**

- Issue \#539: Do not add tooltips to table cells [\#540](https://github.com/digital-ai/dot-components/pull/540) ([selsemore](https://github.com/selsemore))
- Issue \#535: Do not nest \<td\> in \<span\> in table skeleton data [\#538](https://github.com/digital-ai/dot-components/pull/538) ([selsemore](https://github.com/selsemore))
- Issue \#536: \[Progression\] Application name validation is not trimming whitespaces when doing duplicate name check [\#537](https://github.com/digital-ai/dot-components/pull/537) ([dmiletic85](https://github.com/dmiletic85))
- Issue \#523: Fix List/Sidebar to not show multiple flyout menus at once [\#525](https://github.com/digital-ai/dot-components/pull/525) ([selsemore](https://github.com/selsemore))

## [v0.0.0-alpha.34](https://github.com/digital-ai/dot-components/tree/v0.0.0-alpha.34) (05/13/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/v0.0.0-alpha.33...v0.0.0-alpha.34)

**Fixed bugs:**

- TypeScript Error:`applicationName` missing when required [\#528](https://github.com/digital-ai/dot-components/issues/528)
- build errors running demo [\#457](https://github.com/digital-ai/dot-components/issues/457)

**Closed issues:**

- deprecation warning with `@storybook/addon-postcss` [\#455](https://github.com/digital-ai/dot-components/issues/455)

**Merged pull requests:**

- Issue \#528: TypeScript Error:applicationName missing when required \(case issue\) [\#533](https://github.com/digital-ai/dot-components/pull/533) ([dmiletic85](https://github.com/dmiletic85))
- Issue \#528: TypeScript Error:applicationName missing when required [\#532](https://github.com/digital-ai/dot-components/pull/532) ([dmiletic85](https://github.com/dmiletic85))
- D-17908: Hover on progression board causes rerender of board [\#524](https://github.com/digital-ai/dot-components/pull/524) ([dmiletic85](https://github.com/dmiletic85))
- Automation improvements [\#521](https://github.com/digital-ai/dot-components/pull/521) ([CWSites](https://github.com/CWSites))
- Layout poc [\#510](https://github.com/digital-ai/dot-components/pull/510) ([j-schoen](https://github.com/j-schoen))

## [v0.0.0-alpha.33](https://github.com/digital-ai/dot-components/tree/v0.0.0-alpha.33) (05/11/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/v0.0.0-alpha.32...v0.0.0-alpha.33)

**Features:**

- Add `backgroundColor` prop for `DotAvatar` when `type` is `text` or `icon` [\#494](https://github.com/digital-ai/dot-components/issues/494)

**Fixed bugs:**

- Icons not shown for nested List/Sidebar items in menu mode [\#518](https://github.com/digital-ai/dot-components/issues/518)

**Merged pull requests:**

- Issue \#518 fix nested item icons [\#519](https://github.com/digital-ai/dot-components/pull/519) ([selsemore](https://github.com/selsemore))
- Issue \#494: add 'backgroundColor' and 'color' props to DotAvatar [\#516](https://github.com/digital-ai/dot-components/pull/516) ([selsemore](https://github.com/selsemore))

## [v0.0.0-alpha.32](https://github.com/digital-ai/dot-components/tree/v0.0.0-alpha.32) (05/11/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/v0.0.0-alpha.31...v0.0.0-alpha.32)

**Features:**

- Checkbox enhancement [\#271](https://github.com/digital-ai/dot-components/issues/271)

**Closed issues:**

- S-73861: Automate process for versioning and releasing [\#84](https://github.com/digital-ai/dot-components/issues/84)

**Merged pull requests:**

- Issue \#271: Add ariaLabel, ariaLabelledby and disableRipple props [\#522](https://github.com/digital-ai/dot-components/pull/522) ([selsemore](https://github.com/selsemore))
- S-75925: Sticky action buttons on application drawer when content becomes scrollable [\#520](https://github.com/digital-ai/dot-components/pull/520) ([dmiletic85](https://github.com/dmiletic85))
- S-73861: CI/CD Automation [\#515](https://github.com/digital-ai/dot-components/pull/515) ([CWSites](https://github.com/CWSites))
- S-75915: Client side validation for application name [\#513](https://github.com/digital-ai/dot-components/pull/513) ([dmiletic85](https://github.com/dmiletic85))

## [v0.0.0-alpha.31](https://github.com/digital-ai/dot-components/tree/v0.0.0-alpha.31) (05/10/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/v0.0.0-alpha.30...v0.0.0-alpha.31)

**Merged pull requests:**

- 10/5/2021-Update icons [\#517](https://github.com/digital-ai/dot-components/pull/517) ([BojanKocijan](https://github.com/BojanKocijan))

## [v0.0.0-alpha.30](https://github.com/digital-ai/dot-components/tree/v0.0.0-alpha.30) (05/07/2021)

[Full Changelog](https://github.com/digital-ai/dot-components/compare/v0.0.0-alpha.29...v0.0.0-alpha.30)

**Features:**

- Add `color` prop to pill component [\#493](https://github.com/digital-ai/dot-components/issues/493)
- Navigation rail + labels [\#464](https://github.com/digital-ai/dot-components/issues/464)
- Issue \#464: Navigation rail + labels [\#505](https://github.com/digital-ai/dot-components/pull/505) ([dmiletic85](https://github.com/dmiletic85))

**Merged pull requests:**

- Fix some lint issues [\#511](https://github.com/digital-ai/dot-components/pull/511) ([CWSites](https://github.com/CWSites))
- Issue 493: Pill colors [\#506](https://github.com/digital-ai/dot-components/pull/506) ([selsemore](https://github.com/selsemore))

## 0.0.0-alpha.29

### Components

- **List** - fixed `onClick` and `href` handling to work when click is to left of list item icon
- **Sidebar** - fixed `onClick` and `href` handling to work when click is to left of list item icon

### Experimental

- **SplitButton** - added `SplitButton` component

## 0.0.0-alpha.28

> **BROKEN BUILD, DO NOT USE**

## 0.0.0-alpha.27

> **BROKEN BUILD, DO NOT USE**

## 0.0.0-alpha.26

### Components

- **Breadcrumbs** - added `expansionMenu` prop which, if true, shows collapsed breadcrumbs in a dropdown menu
- **Dialog** - added `hasActions` optional prop which toggles existence of actions buttons, and is, by default, set to true

### Experimental

- **ProgressionBoard** - changed type of `packageVersions` to `Array<PackageType | EmptyPackageType>` to support application's empty state

## 0.0.0-alpha.25

### Experimental

- **ProgressionBoard** - determine of a workitem is split internally rather than expecting the provided data to provide that
- **DotProgressionBoardApplicationDrawer** - removed this component and replaced it with **DotProgressionBoardAppFormDrawer**
- **DotProgressionBoardAppInfoDrawer** - created new component used for viewing existing application data inside of a drawer

## 0.0.0-alpha.21

### Components

- **Sidebar** - `nestedListType` prop made optional

## 0.0.0-alpha.20

### Components

- **Tabs** - replaced `indicatorColor` and `textColor` props with `color` prop that controls both
- **Tabs** - created new component

### Experimental

- **ProgressionBoardPhaseEditor** - created new component used for adding new phases to progression

## 0.0.0-alpha.19

### Components

> **BREAKING CHANGE: EmptyState** - renamed `image` to `imageSrc` and set it to accept a string representing the path to the image source

- **Accordion** - is now a stable component
- **Accordion** - added `hasElevation` prop

- **AppToolbar** - added `mainMenuWidth` prop
- **Sidebar** - added `nestedListType` prop which controls how a nested list is displayed
- **Toggle** - added new component to stable components

### Experimental

- **List** - added `nestedListType` prop which controls how a nested list is displayed
- **List** - now accepts `menuPlacement` prop for use when `nestedListType` is `menu`
- **ProgressionBoardApplicationDrawer** - added `payloadUrl` property to `ApplicationAPI` interface

## 0.0.0-alpha.18

### Components

- **AppToolbar** - ensure that `avatar` is always on the right side of the AppToolbar component

### Experimental

- **ProgressionBoard** - changed `WorkItem` to use `DotIcon` instead of `ul`

## 0.0.0-alpha.17

### Components

> **BREAKING CHANGE: ConfirmationDialog** - renamed `cancelBtnProps` to `cancelButtonProps`

> **BREAKING CHANGE: ConfirmationDialog** - renamed `submitBtnProps` to `submitButtonProps`

> **BREAKING CHANGE: ConfirmationDialog** - renamed `onConfirm` to `onSubmit`

> **BREAKING CHANGE: ConfirmationDialog** - renamed `showDialog` to `open`

> **BREAKING CHANGE: Dialog** - updated `SubmitButtonProps` to only allow `type: 'primary' | 'destructive'`

- **AutoComplete** - added `inputRef` prop
- **Checkbox** - added `inputRef` prop
- **ConfirmationDialog** - is now a stable component
- **Dialog** - is now a stable component
- **Dialog** - hard-coded cancel button to `type="text"`
- **Dialog** - added `closeIconVisible`, `closeOnClickAway` prop
- **InputSelect** - added `inputRef` prop
- **InputText** - added `inputRef` prop
- **RadioButton** - added `inputRef` prop
- **Switch** - added `inputRef` prop
- **Switch** - added `id` prop

### Experimental

- **ProgressionBoardWorkItemDrawer** - `owner` property type (of `WorkItemDetailsType` interface) changed from `string` to `Array<string>` to support multiple owners

## 0.0.0-alpha.16

### Components

- **Form** - created new component
- **InputSelect** - made `value` prop optional
- **Sidebar** - added `open` prop

## 0.0.0-alpha.15

### Components

> **BREAKING CHANGE: Avatar** - update `variant` prop to accept `circular` instead of `circle` as per it being deprecated in v5.

> **BREAKING CHANGE: Skeleton** - changed `variant` prop to take `circular` and `rectangular` rather than `circle` and `rect`

- **AutoComplete** - added `disabled` prop
- **AutoComplete** - added `autoFocus` prop
- **InputSelect** - added `disabled` prop
- **InputText** - added `disabled` prop
- **InputText** - added `readOnly` prop
- **InputText** - hard coded `autoComplete` to `off`
- **Table** - fixed `stickyHeader` to work without requiring `maxHeight`
- **Table** - fixed `NaN` in pagination total rows count
- **TableHeader** - export `DotColumnHeader` interface
- **ListItem** - added `selected` prop

### Experimental

- **InlineEdit** - added `readOnly` prop
- **InlineEdit** - hard coded `autoComplete` to `off`

## 0.0.0-alpha.14

### Components

> **BREAKING CHANGE: Accordion** - removed unused `id` prop from component

> **BREAKING CHANGE: InputSelect** - removed initial value for `defaultValue`

> **BREAKING CHANGE: All Components** - removed `default` exports from all components

> **BREAKING CHANGE: Sidebar** - changed `backItem` prop to be a single `ListItemProps` instead of an array

> **`dot-` classes applied to native elements** - applied `dot-` classes to native elements to enable usage of `:not` to avoid style conflicts

- **AutoComplete** - `string` data type acceptable for defaultValue
- **AvatarGroup** - added new component
- **Menu** - added `disablePortal` prop
- **Pill**: added `Pill` to the list of exported component from the library
- **Sidebar** - back button is now a custom component with icon button instead of a list item.
- **Sidebar** - back button now uses `backItemProps` with `text` and `onClick` required
- **Table** - removed `page` prop
- **Table** - removed `handleRequestSort` callback
- **Table** - removed `setRowsPerPage` callback
- **Table** - removed `setPage` callback
- **Table** - added `toolbar` prop
- **Table** - added `onUpdateData` callback
- **Table** - added `onRowClick` callback
- **Table** - locally paginated table (no `onUpdateData` provided) handles sorting and paging internally.
- **Table** - moved to Components
- **TablePagination** - added new component
- **Typography** - added new component

### Experimental

- **ProgressionBoardDrawer** - is no longer exported component
- **ProgressionBoardApplicationDrawer** - new component which can be used in combination with `ProgressionBoard` for adding new application
- **ProgressionBoardWorkItemDrawer** - new component which can be used in combination with `ProgressionBoard` for displaying workitem's data

## 0.0.0-alpha.13

### Components

> **BREAKING CHANGE: Menu** - removed MenuItem `onClick` prop

> **BREAKING CHANGE: Navigation** - removed in favor of `List` component

> **BREAKING CHANGE: NavItem** - removed in favor of `ListItem` component

> **BREAKING CHANGE: ProgressionBoardThemeProvider** removed in favor of setting the theme at the global level

> **BREAKING CHANGE: Sidebar** - replaced use of `Navigation` with `List`

> **BREAKING CHANGE: InputSelect** - removed `onChange` from InputSelectProps

> **BREAKING CHANGE: InputText** - removed `onChange` from InputTextProps

> **BREAKING CHANGE: react-router-dom** - removed peer dependency on `react-router-dom`

- **DotDrawer** - added `ModalProps` optional prop, which serves as an object containing props applied to the Modal element
- **DotDrawer** - added `PaperProps` optional prop, which serves as an object containing props applied to the Paper element
- **DotInputSelect**: added the value prop to DotSelect so that whichever option is selected is passed to the value prop
- **Menu** - added `onSelect` prop
- **Pill** - introduced a new Pill Component to the Component Library
- **List** - added new component
- **ListItem** - added new component
- **ThemeProvider** - add `layer` object to global theme provider to match with UX mockups.
- **ThemeProvider** - moved themes to global theme provider, `light`, `dark`, `agilityLight` and `agilityDark`
- **ThemeProvider** updated `breakpoints` in `theme` object to `xs: 0`, `sm: 720`, `md: 1024`, `lg: 1280`, `xl: 1920`,

### Experimental

- **ProgressionBoard** - added `displayDrawer` prop which controls display of workitem details drawer
- **ProgressionBoard** - added `drawerWidth` prop which controls drawer width (if enabled)
- **ProgressionBoard** - added `workItemSelection` optional prop which represents an object containing data for custom workitem selection implementation
- **ProgressionBoard** - removed `displayDrawer` optional prop
- **ProgressionBoard** - removed `drawerWidth` optional prop
- **ProgressionBoardDrawer** - moved outside of `ProgressionBoard` component, can be used separately in custom wrapper component
- **ProgressionBoardDrawer** - added `drawerPaperProps` optional prop, which serves as an object containing props applied to the drawer's Paper element
- **ProgressionBoardDrawer** - added `workItemDetails` optional prop, object which contains detail data about workitem (fetched asynchronously)

## 0.0.0-alpha.12

### Components

- **AutoComplete** - onChange signature changed to match material-ui
- **AutoComplete** - AutoCompleteOption.category changed to AutoCompletionOption.group and made optional
- **AutoComplete** - defaultValue prop type changed to accept an AutoCompleteOption or an AutoCompleteOption array
- **AutoComplete** - value prop type changed to accept an AutoCompleteOption or an AutoCompleteOption array
- **AutoComplete** - added helperText prop
- **AutoComplete** - added inputId prop
- **AutoComplete** - added error prop and styling
- **AutoComplete** - use outlined version of chips
- **Chip** - fixed colors for border, close icon and hover
- **DotDrawer**: added default value of 256px to `width` prop
- **InputText** - added placeholder prop
- **Menu** - removed `buttonContent` prop (and button)
- **Menu** - added `anchorEl` prop
- **Menu** - added `open` prop
- **Menu** - added `onLeave` callback prop
- **Menu** - added `key` to MenuItemProps
- **Menu** - added `menuId` and `menuItemKey` params to MenuItemProps `onClick` callback signature
- **Menu** - styled for min-width (112px), max-width (280px) and scrollability
- **Menu** - moved to Components
- **Skeleton** - hard-coded `animation` to `wave` and removed `animation` prop
- **Skeleton** - changed background color to #e3e5e8
- **Skeleton** - removed default export
- **Skeleton** - moved to Components
- **Switch** - added `onChange` callback prop
- **ThemeProvider** - remove `CssBaseline` to prevent style hoisting, attempted `ScopedCssBaseline` but appears that MUI has let this go stale.

## 0.0.0-alpha.11

### Components

- **Chip**: removed `iconId` prop
- **Chip**: added `startIcon` prop
- **Chip**: changed data type of `avatar` prop to accept `DotAvatar` component
- **Chip**: changed `clickable` to `isClickable`
- **Chip**: changed `deletable` to `isDeletable`
- **Chip**: removed `label` prop
- **Chip**: added `children` prop
- **Chip**: added `error` prop
- **Chip**: removed `variant` prop
- **Chip**: removed `color` prop
- **CheckboxGroup**: fixed hardcoded coded select all state to be dynamic
- **Progress**: moved to Components

### Experimental

- **WorkItem**: Reafactored to return with new WorkItemTooltip.
- **WorkItemTooltip**: Created the new tooltip component.

## 0.0.0-alpha.10

### Components

- **ActionToolbar**: added to index exports
- **InputText**: added missing `value` prop

## 0.0.0-alpha.9

### Components

> **BREAKING CHANGE: RadioButton** removed unneeded `ariaLabel` prop

> **BREAKING CHANGE: RadioGroup** `radioButtons` prop to `options` to use base props for `RadioGroup` and `CheckboxGroup`

- **Card**: refactored to be a lightweight wrapper component.
- **CardContent**: Create the card content component.
- **CardFooter**: Create the card footer component.
- **CardHeader**: Create the card header component.
- **Checkbox**: added NEW `Checkbox` component
- **CheckboxGroup**: added NEW `CheckboxGroup` component
- **FormGroup**: added NEW `FormGroup` component
- **InputFormFields**: changed `required` from being a required prop to optional
- **InputText**: added comments to interface
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

### Components

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


\* *This Changelog was automatically generated by [github_changelog_generator](https://github.com/github-changelog-generator/github-changelog-generator)*
