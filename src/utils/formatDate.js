import { format, addHours } from "date-fns";

export const timestampToDate = function (
  timestamp,
  dateFormat = "dd/MM/yyyy ha",
  timeDifference = 0
) {
  const userTimeDifference = new Date().getTimezoneOffset() / 60;
  const milliseconds = addHours(
    Number(`${timestamp}000`),
    timeDifference + userTimeDifference
  );
  return format(milliseconds, dateFormat);
};
