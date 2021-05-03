import React from 'react';
import { render, RenderResult, screen } from '../../../testing-utils';
import {
  DotProgressionBoardAppInfoDrawer,
  ProgressionBoardAppInfoDrawerProps,
} from './ProgressionBoardAppInfoDrawer';
import { sampleAppDetailsTestData } from '../sample-data/sampleApplicationData';

const appDetails = sampleAppDetailsTestData;
const onDrawerClose = () => jest.fn();

describe('ProgressionBoardAppInfoDrawer', () => {
  const dataTestId = 'test-pb-app-info-drawer';

  const componentProps: ProgressionBoardAppInfoDrawerProps = {
    appDetails,
    'data-testid': dataTestId,
    isDrawerOpened: true,
    onDrawerClose,
  };

  const renderComponent = (
    props: ProgressionBoardAppInfoDrawerProps = null
  ): RenderResult => {
    const renderProps = props ? props : componentProps;
    return render(<DotProgressionBoardAppInfoDrawer {...renderProps} />);
  };

  beforeEach(() => {
    renderComponent();
  });

  it('should have unchanged API', () => {
    const props = {
      appDetails,
      'data-testid': dataTestId,
      isDrawerOpened: true,
      onDrawerClose,
    };
    expect(componentProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = renderComponent();
    expect(baseElement).toBeTruthy();
  });

  it('should render avatar-icon with appropriate class', () => {
    const spanElem = screen.getByTestId(`${dataTestId}-application-icon`);
    expect(spanElem).toBeVisible();
    expect(spanElem).toHaveClass('application-icon');
  });

  it('should render correct header title', () => {
    const externalKeyElem = screen.getByText('Application Details');
    expect(externalKeyElem).toBeVisible();
    expect(externalKeyElem).toHaveClass('header-title');
  });

  it("should render 'ApplicationEdit' component", () => {
    const elem = screen.getByTestId(`${dataTestId}-app-edit`);
    expect(elem).toBeVisible();
  });
});
