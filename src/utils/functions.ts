export const convertDateTimeStringToTime = (inputString: string): string => {
  const date = new Date(inputString);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  return timeString;
};

export const convertDateTimeStringToDate = (inputString: string): string => {
  return new Date(inputString).toISOString().substring(0, 10);
};
