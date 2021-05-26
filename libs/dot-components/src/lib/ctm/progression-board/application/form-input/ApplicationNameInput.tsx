import React, { ChangeEvent, useEffect, useState } from 'react';
import { DotInputText } from '../../../../components';

export interface ApplicationNameInputProps {
  formAppNameErrorMsg?: string;
  isFormAppNameTouched: boolean;
  isFormAppNameValid: boolean;
  onAppNameChange: (appName: string) => void;
  onBeforeAppNameChange: () => void;
}

export const DELAY_MS = 300;

export const ApplicationNameInput = ({
  formAppNameErrorMsg,
  isFormAppNameTouched,
  isFormAppNameValid,
  onAppNameChange,
  onBeforeAppNameChange,
}: ApplicationNameInputProps) => {
  const [appName, setAppName] = useState<string>(null);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  // Notify outer component that typing started
  useEffect(() => {
    isTyping && onBeforeAppNameChange();
  }, [isTyping]);

  // Reset internal state (app name) when form is reset from the outside
  useEffect(() => {
    if (!isFormAppNameTouched && appName !== null) {
      setAppName(null);
    }
  }, [isFormAppNameTouched]);

  // Improve performance by avoiding callback execution on each keystroke
  useEffect(() => {
    if (appName === null) return;
    const handler = setTimeout(() => {
      setIsTyping(false);
      onAppNameChange(appName);
    }, DELAY_MS);
    return () => clearTimeout(handler);
  }, [appName]);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    !isTyping && setIsTyping(true);
    setAppName(e.target.value);
  };

  const isInErrorState = isFormAppNameTouched && !isFormAppNameValid;

  return (
    <DotInputText
      className="application-name"
      data-testid="application-name"
      error={isInErrorState}
      helperText={isInErrorState ? formAppNameErrorMsg : null}
      id="applicationName"
      label="Application name"
      onChange={onChange}
      name="applicationName"
      required={true}
      value={appName || ''}
    />
  );
};
