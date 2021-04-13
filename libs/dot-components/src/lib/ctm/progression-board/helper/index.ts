export const copyTextToClipboard = async (
  textToCopy = ''
): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(textToCopy);
    return true;
  } catch (err) {
    throw new Error(err);
  }
};
