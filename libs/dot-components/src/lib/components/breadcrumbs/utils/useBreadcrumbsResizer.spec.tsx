import { renderHook, RenderResult } from '@testing-library/react-hooks';
import {
  MaxVisibleItems,
  useBreadcrumbsResizer,
} from './useBreadcrumbsResizer';
import { ITEMS_SEPARATOR_SPACE } from './useBreadcrumbsResizer';
import { mockBreadcrumbItems } from '../Breadcrumbs.data';

describe('useBreadcrumbsResizer', () => {
  const getRefMocks = (
    firstItemWidth: number,
    lastItemWidth: number,
    lastItemLeftCoord: number
  ) => {
    const firstItemRefMock = {
      current: {
        getBoundingClientRect: () => ({
          width: firstItemWidth,
        }),
      },
    } as never;
    const lastItemRefMock = {
      current: {
        getBoundingClientRect: () => ({
          left: lastItemLeftCoord,
          width: lastItemWidth,
        }),
      },
    } as never;
    return [firstItemRefMock, lastItemRefMock];
  };

  const expectResultToEqualObject = (
    expectedResult: MaxVisibleItems,
    result: RenderResult<[MaxVisibleItems]>
  ) => {
    const { current } = result as RenderResult<[MaxVisibleItems]>;
    expect(current[0]).toEqual(expectedResult);
  };

  const renderResizerHook = (
    breadcrumbsRightCoord: number,
    firstItemRefMock: never,
    lastItemRefMock: never
  ) => {
    const { result } = renderHook(
      ({ breadcrumbsRightCoord, firstItemRef, lastItemRef }: never) =>
        useBreadcrumbsResizer(
          breadcrumbsRightCoord,
          { items: mockBreadcrumbItems },
          { firstItemRef, lastItemRef }
        ),
      {
        initialProps: {
          breadcrumbsRightCoord,
          firstItemRef: firstItemRefMock,
          lastItemRef: lastItemRefMock,
        },
      }
    );
    return result;
  };

  it('should return correct object for initial breadcrumbs settings state', () => {
    const firstItemRefMock = {
      current: undefined as never,
    } as never;
    const lastItemRefMock = {
      current: undefined as never,
    } as never;

    const result = renderResizerHook(1500, firstItemRefMock, lastItemRefMock);

    const { current } = result as RenderResult<[MaxVisibleItems]>;
    expect(current[0]).toEqual({
      lastRemovedItemWidth: undefined,
      maxVisibleItems: 5,
    });
  });

  it('should NOT resize when there is available space', () => {
    const dummyItemWidth = 71;
    const [firstItemRefMock, lastItemRefMock] = getRefMocks(
      dummyItemWidth,
      dummyItemWidth,
      381
    );
    const result = renderResizerHook(600, firstItemRefMock, lastItemRefMock);

    expectResultToEqualObject(
      {
        lastRemovedItemWidth: undefined,
        maxVisibleItems: 5,
      },
      result as RenderResult<[MaxVisibleItems]>
    );
  });

  it('should resize until it reaches 2 visible items', () => {
    const dummyItemWidth = 71;
    const [firstItemRefMock, lastItemRefMock] = getRefMocks(
      dummyItemWidth,
      dummyItemWidth,
      381
    );
    const result = renderResizerHook(400, firstItemRefMock, lastItemRefMock);

    expectResultToEqualObject(
      {
        lastRemovedItemWidth: dummyItemWidth + ITEMS_SEPARATOR_SPACE,
        maxVisibleItems: 2,
      },
      result as RenderResult<[MaxVisibleItems]>
    );
  });
});
