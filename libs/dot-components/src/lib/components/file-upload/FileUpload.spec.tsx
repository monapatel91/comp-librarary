import React, { ReactNode } from 'react';
import { act, fireEvent, render, screen, waitFor } from '../../testing-utils';
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

  xdescribe('Validate upload files', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const flushPromises = async (rerender: any, ui: ReactNode) => {
      act(() => waitFor(() => rerender(ui)));
    };

    const dispatchEvt = (
      node: Element | Node | Document | Window,
      type: string,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data: any
    ) => {
      const event = new Event(type, { bubbles: true });
      Object.assign(event, data);
      fireEvent(node, event);
    };

    const mockData = (files: Array<File>) => {
      return {
        dataTransfer: {
          files,
          items: files.map((file: File) => ({
            kind: 'file',
            type: file.type,
            getAsFile: () => file,
          })),
          types: ['Files'],
        },
      };
    };

    xit('invoke onDragEnter when dragenter event occurs', async () => {
      const file = new File([JSON.stringify({ ping: true })], 'ping.json', {
        type: 'application/json',
      });
      const data = mockData([file]);
      const onDragEnter = jest.fn();

      const { baseElement } = render(
        <DotFileUpload
          data-testid="test-file-upload"
          maxSize={10}
          onDragEnter={onDragEnter}
        />
      );
      const { rerender } = render(baseElement);
      const dropzone = screen.getByTestId('test-file-upload');

      dispatchEvt(dropzone, 'dragenter', data);
      await flushPromises(rerender, baseElement);

      expect(onDragEnter).toHaveBeenCalled();
    });

    xit('should update dropzone content when isDragActive', () => {
      render(<DotFileUpload maxSize={10} />);
      const dragMessage = screen.getAllByText(/Drop the file(s) here/i);
      expect(dragMessage[0]).toBeInTheDocument();
    });

    xit('should use onUpload if provided', () => {
      const onUpload = jest.fn();
      render(<DotFileUpload maxSize={10} onUpload={onUpload} />);
      expect(onUpload).toHaveBeenCalledTimes(0);

      // upload a file
      expect(onUpload).toHaveBeenCalled();
    });

    xit('should display a console warning when onUpload is not provided', () => {
      const consoleSpy = jest.spyOn(global.console, 'warn');
      render(<DotFileUpload maxSize={10} />);

      // upload a file
      expect(consoleSpy).toBeCalled();
    });

    xit('should display accepted files', () => {
      render(<DotFileUpload maxSize={10} />);
      // upload a file
      // get accepted files list
      // verify specific details, icon, text, etc
    });

    xit('should display errors with rejected files', () => {
      render(<DotFileUpload maxSize={10} />);
      // upload a file
      // get rejected files list
      // verify specific details, icon, text, etc
    });
  });
});
