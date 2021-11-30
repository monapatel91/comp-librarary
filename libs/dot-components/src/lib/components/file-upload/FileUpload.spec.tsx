import React from 'react';
import { render } from '../../testing-utils';
import { FileUploadProps, DotFileUpload } from './FileUpload';

describe('DotFileUpload', () => {
  it('should have unchanged API', () => {
    const props = {
      ariaLabel: 'file-upload component',
      className: 'file-upload',
      'data-testid': 'file-upload-testid',
    };
    const componentProps: FileUploadProps = props;
    expect(componentProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = render(<DotFileUpload />);
    expect(baseElement).toBeTruthy();
  });
});
