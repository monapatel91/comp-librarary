## Submitting a PR

- Please provide enough information so that others can review your pull request.
- If adding additional functionality please extend `e2e` and `unit` tests accordingly.
- Update your PR with the issue # that your PR resolves if applicable. [More info](https://docs.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword.)
- PR should be marked as `draft` if still a work in progress
- PR should be marked as `ready` when your code changes are complete and ready for review.
- If PR should be linked to an issue then format the title as `Issue #1: Title Here`
- If PR should be linked to a story/defect in Agility then format the title as `S-12345: Story Title Here`

For more information, see the [`CONTRIBUTING`](https://github.com/digital-ai/dot-components/blob/master/CONTRIBUTING.md) guide.

**PLEASE REMOVE TEMPLATE ABOVE "Changes Made" BEFORE SUBMITTING**

## Changes Made

- please note all changes made to API, design, functionality, etc.

## Author Checklist

- [ ] Checklist of changes made added to PR description
- [ ] New component?
  - [ ] is it being exported from library?
  - [ ] Make sure there are no `default` exports
  - [ ] Component is a styled component
  - [ ] Component props extends `commonProps`
- [ ] Storybook configurations up-to-date
- [ ] `unit` test coverage updated
  - [ ] `testing-library` imports are from `testing-utils`
  - [ ] modified props have been added to API unit test
- [ ] `e2e` test coverage updated
- [ ] `CHANGE_LOG.md` updated
  - [ ] breaking changes are specified as such
- [ ] Related issue linked to PR

## Reviewer Checklist

- [ ] Author checklist has been reviewed?
- [ ] All acceptance criteria has been met from linked issue
- [ ] Run code and verify all changes
- [ ] Updated Storybook deployment has been reviewed
- [ ] UX Review when style changes have been made

## Related Issue(s)

Resolves #XXXX
