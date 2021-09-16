import { avatarColors } from '../theme-provider/ThemeProvider';
import { AvatarColor } from './avatar/Avatar';

export const calculateNumberFromText = (text: string): number => {
  const charCodes = text
    .split('') // => ["A", "A"]
    .map((char) => char.charCodeAt(0)) // => [65, 65]
    .join(''); // => "6565"
  return parseInt(charCodes, 10);
};

export const getAvatarColorForInputText = (value: string): AvatarColor => {
  const colorOptions = [...(Object.keys(avatarColors) as AvatarColor[])];
  if (!value || !colorOptions || colorOptions.length <= 0) return 'default';
  const numberFromValue = calculateNumberFromText(value);
  return colorOptions[numberFromValue % colorOptions.length];
};
