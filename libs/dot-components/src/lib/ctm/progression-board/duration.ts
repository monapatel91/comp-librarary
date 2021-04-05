const least_significant_unit = 'minutes';
const ordered_by_least_significant = [
  least_significant_unit,
  'hours',
  'days',
  'months',
];
const defaultMostSignificantValue = {
  value: 0,
  unit: least_significant_unit,
};

export interface Tense {
  value: number;
  unit: string;
}

export interface DurationProps {
  /**  value for days */
  days: number;
  /** value for hours */
  hours: number;
  /** Space delimited CSS classes to be attributed to the menu item */
  value?: number;
  /** A key that can be used to determine which item was clicked */
  unit?: number;
}

const getHours = (sec: number) => Math.floor(sec / 3600);
const getDays = (sec: number) => Math.floor(getHours(sec) / 24);

export const getDaysWithHourPercisionFromSeconds = (sec: number) => ({
  days: getDays(sec),
  hours: getHours(sec),
});

export const calculateMostSignificantValue = (
  duration_data: DurationProps,
  defaultValue: Tense
) =>
  ordered_by_least_significant.reduce((mostSignificantValue, unit) => {
    return duration_data.unit > 0
      ? { unit, value: duration_data.unit }
      : mostSignificantValue;
  }, defaultValue || defaultMostSignificantValue);

export const determineTense = ({ value, unit }: Tense) =>
  value === 1 ? unit.substring(0, unit.length - 1) : unit;

const getLabel = (duration: DurationProps) => ({
  value: duration.days,
  label: `days, ${duration.hours} hours`,
});

export const getLabelFormatted = (seconds: number) =>
  getLabel(getDaysWithHourPercisionFromSeconds(seconds));

export const getMostSignificantLabel = (seconds: number) => {
  const daysAndHours = getDaysWithHourPercisionFromSeconds(seconds);
  const defaultValue = {
    value: 0,
    unit: 'days',
  };
  const mostSignificantValue = calculateMostSignificantValue(
    daysAndHours,
    defaultValue
  );
  return `${mostSignificantValue.value} ${determineTense(
    mostSignificantValue
  )}`;
};
