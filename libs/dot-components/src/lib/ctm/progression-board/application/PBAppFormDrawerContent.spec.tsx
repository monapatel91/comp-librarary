import React from 'react';
import { render, screen } from '../../../testing-utils';
import {
  DotPBAppFormDrawerContent,
  PBAppFormDrawerContentProps,
} from './PBAppFormDrawerContent';
import { sampleAppAPITestData } from '../sample-data/sampleApplicationData';

const onDrawerClose = () => jest.fn();
const onFormCancel = () => jest.fn();
const onFormSubmitted = () => jest.fn();
const apiData = sampleAppAPITestData;

describe('PBAppFormDrawerContent', () => {
  const dataTestId = 'test-pb-application-drawer';

  const componentProps: PBAppFormDrawerContentProps = {
    apiData: apiData,
    'data-testid': dataTestId,
    onDrawerClose: onDrawerClose,
    onFormCancel: onFormCancel,
    onFormSubmit: onFormSubmitted,
  };

  beforeEach(() => {
    render(<DotPBAppFormDrawerContent {...componentProps} />);
  });

  it('should have unchanged API', () => {
    const props = {
      apiData: apiData,
      'data-testid': dataTestId,
      onDrawerClose: onDrawerClose,
      onFormCancel: onFormCancel,
      onFormSubmit: onFormSubmitted,
    };
    expect(componentProps).toEqual(props);
  });

  it('should render successfully', () => {
    expect(screen).toBeTruthy();
  });

  it('should render avatar-icon with appropriate class', () => {
    const spanElem = screen.getByTestId(`${dataTestId}-application-icon`);
    expect(spanElem).toBeVisible();
    expect(spanElem).toHaveClass('application-icon');
  });

  it('should render correct header title', () => {
    const externalKeyElem = screen.getByText('Add application');
    expect(externalKeyElem).toBeVisible();
    expect(externalKeyElem).toHaveClass('header-title');
  });

  it('should render close icon button', () => {
    const closeIconBtn = screen.getByTestId(`${dataTestId}-close-icon`);
    expect(closeIconBtn).toBeVisible();
    expect(closeIconBtn).toBeEnabled();
  });
});
