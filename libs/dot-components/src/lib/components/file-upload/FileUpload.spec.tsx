import React from 'react';
import { FileWithPath } from 'react-dropzone';
import { render, screen } from '../../testing-utils';
import { ListItemProps } from '../list/List';
import { DotFileUpload, FileUploadProps } from './FileUpload';
import { FileListItem } from './FileListItem';
import { parseAcceptedFiles, parseRejectedFiles } from './uploadHelpers';

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
      onChange: jest.fn(),
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
      /files are the maximum number of files you can upload at once./i
    );
    expect(maxSizeMessage[0]).toBeInTheDocument();
  });

  describe('Validate uploaded file list', () => {
    it('should display list of uploaded files', async () => {
      const deleteFile = jest.fn();
      const fileArray = [{ path: '/blah' }] as Array<FileWithPath>;
      const expected: Array<ListItemProps> = [
        {
          child: <FileListItem file={fileArray[0]} deleteFile={deleteFile} />,
        },
      ];

      const result = parseAcceptedFiles(fileArray, deleteFile);
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
});
