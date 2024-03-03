import { Value } from '../visibility/datetimepicker/DateTimeSelector';

export const isDateValid = (dateTime: Value): boolean => {
  if (!dateTime) {
    return false;
  }

  const currentDate = new Date();

  const twoWeeksFromNow = new Date(currentDate);
  twoWeeksFromNow.setDate(currentDate.getDate() + 14);

  return dateTime <= twoWeeksFromNow;
};
