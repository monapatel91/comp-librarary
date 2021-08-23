import { CommonProps } from './CommonProps';

describe('CommonProps', () => {
  it('should have unchanged API', () => {
    const props = {
      className: 'test-class',
      'data-testid': 'testid',
    };
    const commonProps: CommonProps = props;
    expect(commonProps).toEqual(props);
  });
});
