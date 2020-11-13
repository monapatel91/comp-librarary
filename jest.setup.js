import '@testing-library/jest-dom';
import '@testing-library/user-event';

// Fix for `TypeError: document.createRange is not a function
// React Testing Library + Material UI Popper
global.document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document,
  },
});
