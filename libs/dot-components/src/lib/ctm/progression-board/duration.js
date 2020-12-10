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

const getHours = (seconds) => Math.floor(seconds / 3600);

const getDays = (seconds) =>
  Math.floor(getHours(seconds) / 24);

export const getDaysWithHourPercisionFromSeconds = (seconds) => ({
  days: getDays(seconds),
  hours: getHours(seconds),
});

export const calculateMostSignificantValue = (duration_data, defaultValue) =>
  ordered_by_least_significant.reduce((mostSignificantValue, unit) => {
    return duration_data[unit] > 0
      ? {unit, value: duration_data[unit]}
      : mostSignificantValue;
  }, defaultValue || defaultMostSignificantValue);

export const determineTense = ({value, unit}) =>
  value === 1 ? unit.substring(0, unit.length - 1) : unit;

const getLabel = (duration) => ({
  value: duration.days,
  label: `days, ${duration.hours} hours`,
});

export const getLabelFormatted = (seconds) =>
  getLabel(getDaysWithHourPercisionFromSeconds(seconds));

export const getMostSignificantLabel = (seconds) => {
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
