import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, RenderResult, screen, within } from '../../testing-utils';
import { WorkItem, WorkItemProps } from './WorkItem';
import {
  sampleWorkItemTest1,
  selectedWorkItemProps,
} from '../progression-board/sample-data/samplePbTestData';

describe('WorkItem', () => {
  let baseComponentElem: HTMLElement;

  const dataTestId = 'work-item';

  const getWorkItemByTestId = () => screen.getByTestId(dataTestId);

  const getIconByTestId = () =>
    within(getWorkItemByTestId()).getByTestId('icon-circle');

  const onHoverWorkItem = jest.fn();

  const onUnHoverWorkItem = jest.fn();

  const selectWorkItem = {
    ...selectedWorkItemProps,
    hoverWorkItem: onHoverWorkItem,
    unHoverWorkItem: onUnHoverWorkItem,
  };

  const componentProps: WorkItemProps = {
    baseUrl: 'www.test.ai/',
    'data-testid': dataTestId,
    isFaded: false,
    isSelected: false,
    selectWorkItem,
    workitem: sampleWorkItemTest1,
  };

  const renderComponent = (props: WorkItemProps = null): RenderResult => {
    const renderProps = props ? props : componentProps;
    return render(<WorkItem {...renderProps} />);
  };

  it('should have unchanged API', () => {
    const props = {
      baseUrl: 'www.test.ai/',
      'data-testid': dataTestId,
      isFaded: false,
      isSelected: false,
      selectWorkItem,
      workitem: sampleWorkItemTest1,
    };
    expect(componentProps).toEqual(props);
  });

  describe('default render', () => {
    beforeEach(() => {
      const { baseElement } = renderComponent();
      baseComponentElem = baseElement;
    });

    it('should render successfully', () => {
      expect(baseComponentElem).toBeTruthy();
    });

    it('should render workitem element as a circle icon', () => {
      expect(getWorkItemByTestId()).toBeVisible();
      expect(getIconByTestId()).toBeVisible();
    });

    it('should NOT have mouse events attached if NOT split item', () => {
      const workItem = getWorkItemByTestId();
      userEvent.hover(workItem);
      expect(onHoverWorkItem).not.toHaveBeenCalled();
      userEvent.unhover(workItem);
      expect(onUnHoverWorkItem).not.toHaveBeenCalled();
    });
  });

  describe('with custom props', () => {
    it('should have mouse events attached if workitem is split', () => {
      const props: WorkItemProps = {
        ...componentProps,
        workitem: {
          ...sampleWorkItemTest1,
          isSplit: true,
        },
      };
      renderComponent(props);
      const workItem = getWorkItemByTestId();
      userEvent.hover(workItem);
      expect(onHoverWorkItem).toHaveBeenCalledTimes(1);
      userEvent.unhover(workItem);
      expect(onUnHoverWorkItem).toHaveBeenCalledTimes(1);
    });
  });
});
