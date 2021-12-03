import { FileWithPath } from 'file-selector';
import React, { ReactNode } from 'react';
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '../../testing-utils';
import { ListItemProps } from '../list/List';
import {
  acceptedFileItems,
  fileRejectionItems,
  FileUploadProps,
  DotFileUpload,
} from './FileUpload';

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
    const { baseElement } = render(<DotFileUpload maxSize={10} />);
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
    render(<DotFileUpload maxFiles={10} maxSize={10} />);
    const maxSizeMessage = screen.getAllByText(
      /files are the maximum number of files you can drop here/i
    );
    expect(maxSizeMessage[0]).toBeInTheDocument();
  });

  describe('Validate uploaded file list', () => {
    // it('should display list of uploaded files', async () => {
    //   acceptedFileItems(fileArray);
    // });

    it('should display list of rejected files with error messages', async () => {
      const path = '/path';
      const maxSize = 10;
      const errors = [
        { code: 'file-too-large', message: `File exceeds ${maxSize}MB` },
        // { code: 'file-invalid-type', message: 'file-invalid-type' },
        // {code: 'too-many-files', message: 'too-many-files'},
      ];
      const expected: ListItemProps[] = [
        {
          className: 'file-error',
          endIconId: 'error-solid',
          primaryText: path,
          startIconId: 'attachment',
          secondaryText: errors[0].message,
        },
      ];

      const result = fileRejectionItems(
        [{ errors, file: { path } as any }],
        maxSize
      );
      expect(result).toEqual(expected);
    });
  });

  xdescribe('useDropzone() hook', () => {
    type FileNode = Element | Node | Document | Window;

    let files: any, images;
    function createFile(name: string, size: number, type: string) {
      const file = new File([], name, { type });
      Object.defineProperty(file, 'size', {
        get() {
          return size;
        },
      });
      return file;
    }

    async function flushPromises(
      rerender: (ui: ReactNode) => void,
      ui: ReactNode
    ) {
      waitFor(() => rerender(ui));
    }

    function drainTimers() {
      waitFor(() => {
        act(() => jest.runAllTimers());
      });
    }

    function createDtWithFiles(files: any = []) {
      return {
        dataTransfer: {
          files,
          items: files.map((file: File) => ({
            kind: 'file',
            size: file.size,
            type: file.type,
            getAsFile: () => file,
          })),
          types: ['Files'],
        },
      };
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function fireDragEnter(node: FileNode, data: any) {
      dispatchEvt(node, 'dragenter', data);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function fireDragOver(node: FileNode, data: any) {
      dispatchEvt(node, 'dragover', data);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function fireDragLeave(node: FileNode, data: any) {
      dispatchEvt(node, 'dragleave', data);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function fireDrop(node: FileNode, data: any) {
      dispatchEvt(node, 'drop', data);
    }

    // Using fireEvent.* doesn't work for our use case,
    // we cannot set the event props
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function dispatchEvt(node: FileNode, type: string, data: any) {
      const event = new Event(type, { bubbles: true });
      if (data) {
        Object.assign(event, data);
      }
      fireEvent(node, event);
    }

    beforeEach(() => {
      files = [createFile('file1.pdf', 1111, 'application/pdf')];
      images = [
        createFile('cats.gif', 1234, 'image/gif'),
        createFile('dogs.gif', 2345, 'image/jpeg'),
      ];
    });

    afterEach(cleanup);

    it('sets {isDragActive} and {isDragAccept} if some files are accepted on dragenter', async () => {
      const ui = <DotFileUpload maxSize={10} />;
      const { container, rerender } = render(ui);
      const dropzone = container.querySelector('div');

      const data = createDtWithFiles(files);
      fireDragEnter(dropzone, data);
      await flushPromises(rerender, ui);

      expect(dropzone).toHaveTextContent('dragActive');
      expect(dropzone).toHaveTextContent('dragAccept');
      expect(dropzone).not.toHaveTextContent('dragReject');
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
