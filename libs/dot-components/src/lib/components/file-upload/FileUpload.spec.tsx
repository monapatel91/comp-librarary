import React from 'react';
import { render, screen } from '../../testing-utils';
import { FileUploadProps, DotFileUpload } from './FileUpload';

describe('DotFileUpload', () => {
  it('should have unchanged API', () => {
    const props = {
      accept: ['image/*'],
      ariaLabel: 'file-upload component',
      buttonOnly: false,
      className: 'file-upload',
      'data-testid': 'file-upload-testid',
      disabled: false,
      maxFiles: 5,
      maxSize: 10,
      onUpload: jest.fn(),
    };
    const componentProps: FileUploadProps = props;
    expect(componentProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = render(<DotFileUpload />);
    expect(baseElement).toBeTruthy();
  });

  it('should render button only when specified', () => {
    render(<DotFileUpload buttonOnly={true} maxSize={10} />);
    const maxSizeMessage = screen.getAllByText(/File size should not exceed/i);
    expect(maxSizeMessage[0]).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeTruthy();

    expect(screen.queryByRole('input')).not.toBeInTheDocument();
  });

  it('should render maxSize message', () => {
    render(<DotFileUpload maxSize={10} />);
    const maxSizeMessage = screen.getAllByText(/File size should not exceed/i);
    expect(maxSizeMessage[0]).toBeInTheDocument();
  });

  it('should render maxFiles message', () => {
    render(<DotFileUpload maxFiles={10} />);
    const maxSizeMessage = screen.getAllByText(
      /files are the maximum number of files you can drop here/i
    );
    expect(maxSizeMessage[0]).toBeInTheDocument();
  });

  xit('should update dropzone content when isDragActive', () => {
    render(<DotFileUpload />);
    const dragMessage = screen.getAllByText(/Drop the file(s) here/i);
    expect(dragMessage[0]).toBeInTheDocument();
  });

  xit('should use onUpload if provided', () => {
    const onUpload = jest.fn();
    render(<DotFileUpload onUpload={onUpload} />);
    expect(onUpload).toHaveBeenCalledTimes(0);

    // upload a file
    expect(onUpload).toHaveBeenCalled();
  });

  xit('should display a console warning when onUpload is not provided', () => {
    const consoleSpy = jest.spyOn(global.console, 'warn');
    render(<DotFileUpload />);

    // upload a file
    expect(consoleSpy).toBeCalled();
  });

  xit('should display accepted files', () => {
    render(<DotFileUpload />);
    // upload a file
    // get accepted files list
    // verify specific details, icon, text, etc
  });

  xit('should display errors with rejected files', () => {
    render(<DotFileUpload />);
    // upload a file
    // get rejected files list
    // verify specific details, icon, text, etc
  });
});
