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

const getHours = (sec) => Math.floor(sec / 3600);
const getDays = (sec) => Math.floor(getHours(sec) / 24);

export const getDaysWithHourPercisionFromSeconds = (sec) => ({
  days: getDays(sec),
  hours: getHours(sec),
});

export const calculateMostSignificantValue = (duration_data, defaultValue) =>
  ordered_by_least_significant.reduce((mostSignificantValue, unit) => {
    return duration_data[unit] > 0
      ? { unit, value: duration_data[unit] }
      : mostSignificantValue;
  }, defaultValue || defaultMostSignificantValue);

export const determineTense = ({ value, unit }) =>
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
