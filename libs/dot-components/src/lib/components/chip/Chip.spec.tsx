import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import DotChip from './Chip';

describe('Chip', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DotChip label="Hello" />);
    expect(baseElement).toBeTruthy();
  });

  it('should allow the user to click if clickable', () => {
    const onClick = jest.fn();
    render(<DotChip label="Hello" clickable={true} onClick={onClick} />);

    const chip = screen.getByRole('button');
    userEvent.click(chip);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should not display the delete icon if not deletable', () => {
    const { baseElement } = render(<DotChip label="Hello" deletable={false} />);
    const deleteIcon = baseElement.querySelector('.MuiChip-deleteIcon');
    expect(deleteIcon).not.toBeTruthy();
  });

  it('should display the delete icon if deletable', () => {
    const onDelete = jest.fn();
    const { baseElement } = render(
      <DotChip label="Hello" deletable={true} onDelete={onDelete} />
    );
    const deleteIcon = baseElement.querySelector('.MuiChip-deleteIcon');
    expect(deleteIcon).toBeTruthy();
    userEvent.click(deleteIcon as Element);
    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});
