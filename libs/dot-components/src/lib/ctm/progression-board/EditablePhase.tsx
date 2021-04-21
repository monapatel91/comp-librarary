import React, { ChangeEvent, ReactNode } from 'react';
import { Divider } from '@material-ui/core';
import { CommonProps } from '../../components/CommonProps';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import { rootClassName, StyledEditablePhase } from './EditablePhase.styles';
import { DotIconButton, DotInputText, DotTypography } from '../../components';

export interface EditablePhaseProps extends CommonProps {
  hasFocus: boolean;
  isEditable: boolean;
  isNew: boolean;
  name: string;
  onPhaseChange: (name: string, position: number) => void;
  onPhaseDelete: (position: number) => void;
  position: number;
}

export const EditablePhase = ({
  className,
  'data-testid': dataTestId,
  hasFocus = false,
  isEditable = false,
  isNew = false,
  name,
  onPhaseChange,
  onPhaseDelete,
  position,
}: EditablePhaseProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const onPhaseNameChange = (event: ChangeEvent<HTMLInputElement>): void =>
    onPhaseChange(event.target.value, position);

  const renderPhaseTitle = (): ReactNode => {
    if (isEditable) {
      return (
        <DotInputText
          className="editable-phase-name"
          data-testid={`${dataTestId}-name-input`}
          id={`phaseName${position}`}
          inputRef={(input) => input && hasFocus && input.focus()}
          name={`phaseName${position}`}
          onChange={onPhaseNameChange}
          placeholder="Phase name"
          value={name}
        />
      );
    }
    return (
      <DotTypography className="header-title" variant="h3">
        <span title={name}>{name}</span>
      </DotTypography>
    );
  };

  const renderDeleteButton = (): ReactNode => {
    if (isNew) {
      return (
        <DotIconButton
          className="delete-btn"
          data-testid={`${dataTestId}-delete-btn`}
          iconId="delete"
          onClick={onDeleteButtonClick}
        />
      );
    }
    return null;
  };

  const onDeleteButtonClick = (): void => onPhaseDelete(position);

  return (
    <StyledEditablePhase className={rootClasses} data-testid={dataTestId}>
      <div className="header">
        {renderPhaseTitle()}
        {renderDeleteButton()}
      </div>
      <Divider className="content-divider" />
    </StyledEditablePhase>
  );
};
