import { useEffect, useState } from 'react';

/* eslint-disable @typescript-eslint/ban-types */
export const getOptionsFromSchema = (optionsObj: {
  [key: string]: boolean | number | string | object | null;
}) => {
  const enumOptions = optionsObj.enumOptions as Array<{
    label: string;
    value: string;
  }>;
  const options: Array<{ label: string; value: string }> = enumOptions.map(
    ({ label, value }) => ({
      label,
      value,
    })
  );

  return options;
};

export const useProcessRawErrors = (rawErrors: Array<string>) => {
  const [error, setError] = useState(false);
  const [errorHelperText, setErrorHelperText] = useState<string>();

  useEffect(() => {
    const hasError = rawErrors?.length > 0;

    if (hasError) {
      setError(true);
      setErrorHelperText(rawErrors[0]);
    } else {
      setError(false);
      setErrorHelperText(null);
    }
  }, [rawErrors]);

  return { error, errorHelperText };
};
