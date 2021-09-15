import { avatarColors } from '../theme-provider/ThemeProvider';
import { AvatarColor } from './avatar/Avatar';

/** Based on: https://en.wikipedia.org/wiki/Linear_congruential_generator **/
export const generateRandomNumber = (value: string, m: number): number => {
  const charCodes = [...value].map((letter) => letter.charCodeAt(0));
  const charactersLength = charCodes.length;

  const a = (charactersLength % (m - 1)) + 1;
  const c = charCodes.reduce((current, next) => current + next) % m;

  let randomNumber = charCodes[0] % m;
  for (let i = 0; i < charactersLength; i++)
    randomNumber = (a * randomNumber + c) % m;

  return randomNumber;
};

export const getRandomAvatarColor = (value: string): AvatarColor => {
  const colorOptions = [null].concat(Object.keys(avatarColors));
  if (!value) return 'lightGrey';
  const colorIndex = generateRandomNumber(value, colorOptions.length);
  return colorOptions[colorIndex];
};
