import { CommonProps } from './CommonProps';

describe('CommonProps', () => {
  it('should have unchanged API', () => {
    const props = {
      className: 'test-class',
      'data-testid': 'testid',
    };
    const commonProps: CommonProps = {
      className: 'test-class',
      'data-testid': 'testid',
    };
    expect(commonProps).toEqual(props);
  });
});
