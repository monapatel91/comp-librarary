import React from 'react';
import { FileWithPath } from 'react-dropzone';
import { render, screen, waitFor } from '../../testing-utils';
import { ListItemProps } from '../list/List';
import { DotFileUpload, FileUploadProps } from './FileUpload';
import { DotFileListItem, FileItemProps } from './FileListItem';
import { parseAcceptedFiles, parseRejectedFiles } from './uploadHelpers';
import userEvent from '@testing-library/user-event';

// TO-DO: possible that we can test file upload https://testing-library.com/docs/ecosystem-user-event/#uploadelement-file--clickinit-changeinit--options
const dummyFile = { path: 'image.jpg' } as FileWithPath;
const testId = 'file-upload-testid';
const onChange = jest.fn();
const defaultUpload = (
  <DotFileUpload data-testid={testId} maxSize={10} onChange={onChange} />
);

describe('DotFileUpload', () => {
  it('should have unchanged API', () => {
    const props = {
      accept: ['image/*'],
      ariaLabel: 'file-upload component',
      buttonOnly: false,
      className: 'file-upload',
      'data-testid': testId,
      disabled: false,
      maxFiles: 5,
      maxSize: 10,
      onChange: onChange,
      onDragEnter: jest.fn(),
    };
    const componentProps: FileUploadProps = props;
    expect(componentProps).toEqual(props);
  });

  it('should render successfully', () => {
    const { baseElement } = render(defaultUpload);
    expect(baseElement).toBeTruthy();
    expect(screen.getByTestId(testId)).not.toHaveClass('disabled');
  });

  it('should be disabled when specified', () => {
    render(
      <DotFileUpload
        data-testid={testId}
        disabled={true}
        maxSize={10}
        onChange={onChange}
      />
    );
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByTestId(testId)).toHaveClass('disabled');
  });

  it('should render button only when specified', () => {
    render(
      <DotFileUpload buttonOnly={true} maxSize={10} onChange={onChange} />
    );
    expect(screen.getByRole('button')).toBeTruthy();
    expect(screen.queryByRole('input')).not.toBeInTheDocument();
  });

  it('should render maxSize message', () => {
    render(defaultUpload);
    const maxSizeMessage = screen.getAllByText(/File size should not exceed/i);
    expect(maxSizeMessage[0]).toBeInTheDocument();
  });

  it('should render maxFiles message', () => {
    render(<DotFileUpload maxFiles={10} maxSize={10} onChange={onChange} />);
    const maxSizeMessage = screen.getAllByText(
      /files are the maximum number of files you can upload at once./i
    );
    expect(maxSizeMessage[0]).toBeInTheDocument();
  });

  describe('Validate uploaded file list', () => {
    it('should display list of uploaded files', async () => {
      const deleteFile = jest.fn();
      const fileArray = [dummyFile] as Array<FileWithPath>;
      const expected: ListItemProps = {
        child: <DotFileListItem file={fileArray[0]} deleteFile={deleteFile} />,
      };

      const result = parseAcceptedFiles(dummyFile, deleteFile);
      expect(result).toEqual(expected);
    });

    it('should display list of rejected files with error messages separated by commas', async () => {
      const path = '/path';
      const maxSize = 10;
      const errors = [
        { code: 'file-too-large', message: `File exceeds ${maxSize}MB` },
        { code: 'file-invalid-type', message: 'file-invalid-type' },
        { code: 'too-many-files', message: 'too-many-files' },
        { code: 'unknown-error-message', message: 'unknown-error-message' },
      ];
      const expected: ListItemProps[] = [
        {
          className: 'file-error',
          endIconId: 'error-solid',
          primaryText: path,
          startIconId: 'file',
          secondaryText: `${errors[0].message}, ${errors[1].message}, ${errors[2].message}, ${errors[3].message}`,
        },
      ];

      const result = parseRejectedFiles(
        [{ errors, file: { path } as FileWithPath }],
        maxSize
      );
      expect(result).toEqual(expected);
    });
  });

  describe('DotFileListItem', () => {
    it('should have unchanged API', () => {
      const props = {
        ariaLabel: 'file item component',
        className: 'dot-file-upload-item',
        'data-testid': `${testId}-item`,
        deleteFile: jest.fn(),
        file: dummyFile,
      };
      const componentProps: FileItemProps = props;
      expect(componentProps).toEqual(props);
    });

    it('should render successfully', () => {
      const deleteFile = jest.fn();
      const { baseElement } = render(
        <DotFileListItem file={dummyFile} deleteFile={deleteFile} />
      );
      expect(baseElement).toBeTruthy();
    });

    it('should trigger deleteFile when button clicked', () => {
      const deleteFile = jest.fn();
      render(<DotFileListItem file={dummyFile} deleteFile={deleteFile} />);
      const button = screen.getByRole('button');
      userEvent.click(button);
      expect(deleteFile).toHaveBeenCalled();
    });

    it('should change icon on mouseover', async () => {
      const deleteFile = jest.fn();
      render(
        <DotFileListItem
          file={dummyFile}
          data-testid={`${testId}-item`}
          deleteFile={deleteFile}
        />
      );
      const buttonIcon = screen.getByTestId('button-icon');
      const successIcon = document.querySelector('.icon-check-solid');

      expect(screen.getByTestId(`${testId}-item`)).toContainElement(buttonIcon);
      expect(successIcon).toBeInTheDocument();

      userEvent.hover(buttonIcon);
      await waitFor(() => {
        const trashIcon = document.querySelector('.icon-delete');
        expect(trashIcon).toBeInTheDocument();
      });

      userEvent.unhover(buttonIcon);
      await waitFor(() => {
        expect(successIcon).toBeInTheDocument();
      });
    });
  });
});
