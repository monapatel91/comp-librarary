export const mockResizeObserver = (): void => {
  class ResizeObserverMock {
    observe() {
      // do nothing
    }
    unobserve() {
      // do nothing
    }
    disconnect() {
      // do nothing
    }
  }
  window.ResizeObserver = ResizeObserverMock;
};
