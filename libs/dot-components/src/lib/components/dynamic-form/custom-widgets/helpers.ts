// eslint-disable-next-line @typescript-eslint/ban-types
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
