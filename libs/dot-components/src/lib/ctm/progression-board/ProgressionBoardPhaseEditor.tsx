import React, { Fragment, ReactNode, useEffect, useState } from 'react';
import { CommonProps } from '../../components/CommonProps';
import { useStylesWithRootClass } from '../../components/useStylesWithRootClass';
import {
  rootClassName,
  StyledProgressionBoardPhaseEditor,
} from './ProgressionBoardPhaseEditor.styles';
import { EditablePhase } from './EditablePhase';
import { EditablePhaseType } from './ProgressionBoardInterfaces';
import { DotButton, DotIconButton } from '../../components';
import {
  checkIfNewPhasePresent,
  getPhasesWithNewInsertedPhase,
  getPhasesWithoutActiveFocus,
  getPhasesWithPhaseRemoved,
  getSavedPhases,
  isPhasesDataValid,
} from './progression/phaseEditorHelper';

export interface PBPhaseEditorProps extends CommonProps {
  editablePhases: Array<EditablePhaseType>;
  onCancel: () => void;
  onSave: (newPhases: Array<EditablePhaseType>) => void;
}

export const DotProgressionBoardPhaseEditor = ({
  className,
  'data-testid': dataTestId,
  editablePhases,
  onCancel,
  onSave,
}: PBPhaseEditorProps) => {
  const rootClasses = useStylesWithRootClass(rootClassName, className);

  const [phases, setPhases] = useState<Array<EditablePhaseType>>([]);

  const initialEmptyPhase = {
    hasFocus: true,
    isEditable: true,
    isNew: true,
    name: '',
  };

  /* Update state only when editablePhases change from wrapper component */
  useEffect(() => {
    // In case there are no phases provided, always display nameless one in edit mode
    editablePhases.length > 0
      ? setPhases(editablePhases.map((phase) => ({ ...phase, isNew: false })))
      : setPhases([initialEmptyPhase]);
  }, [editablePhases]);

  const isSaveBtnDisabled =
    !checkIfNewPhasePresent(phases) || !isPhasesDataValid(phases);

  const onNewPhaseClick = (position: number): (() => void) => () => {
    setPhases(
      (prevPhases: Array<EditablePhaseType>): Array<EditablePhaseType> =>
        getPhasesWithNewInsertedPhase(prevPhases, position)
    );
  };

  const onPhaseChange = (name: string, position: number): void => {
    setPhases(
      (prevPhases: Array<EditablePhaseType>): Array<EditablePhaseType> => {
        const newUpdatedPhases: Array<EditablePhaseType> = getPhasesWithoutActiveFocus(
          prevPhases
        );
        newUpdatedPhases[position].name = name;
        return newUpdatedPhases;
      }
    );
  };

  const onPhaseDelete = (position: number): void => {
    setPhases(
      (prevPhases: Array<EditablePhaseType>): Array<EditablePhaseType> =>
        getPhasesWithPhaseRemoved(prevPhases, position)
    );
  };

  const onCancelButtonClick = (): void => onCancel();

  const onSaveButtonClick = (): void => onSave(getSavedPhases(phases));

  const renderAddPhaseButton = (
    index: number,
    key: string = undefined
  ): ReactNode => (
    <DotIconButton
      data-testid={`${dataTestId}-add-phase`}
      key={key}
      className="add-btn"
      iconId="add"
      onClick={onNewPhaseClick(index)}
    />
  );

  const renderPhases = (): ReactNode => {
    const numberOfPhases = phases?.length || 0;
    return (
      <div className="phases">
        {phases?.map((phase: EditablePhaseType, index: number) => {
          const { hasFocus, isEditable, isNew, name } = phase;
          return (
            <Fragment key={`${numberOfPhases}-${index}`}>
              {renderAddPhaseButton(index)}
              <EditablePhase
                data-testid={`${dataTestId}-editable-phase`}
                hasFocus={hasFocus}
                isNew={isNew}
                isEditable={isEditable}
                name={name}
                onPhaseChange={onPhaseChange}
                onPhaseDelete={onPhaseDelete}
                position={index}
              />
            </Fragment>
          );
        })}
        {renderAddPhaseButton(
          numberOfPhases,
          `${numberOfPhases}-${numberOfPhases}`
        )}
      </div>
    );
  };

  return (
    <StyledProgressionBoardPhaseEditor
      className={rootClasses}
      data-testid={dataTestId}
    >
      <div className="configure-actions">
        <DotButton onClick={onCancelButtonClick} type="text">
          Cancel
        </DotButton>
        <DotButton
          className="configure-save-btn"
          disabled={isSaveBtnDisabled}
          onClick={onSaveButtonClick}
        >
          Save
        </DotButton>
      </div>
      {renderPhases()}
    </StyledProgressionBoardPhaseEditor>
  );
};
