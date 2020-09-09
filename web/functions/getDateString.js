import { localDateConvert } from "./localDateConvert";

export const getDateString = (originalStartTime, originalEndTime) => {
  const startTime = new Date(originalStartTime);
  const endTime = new Date(originalEndTime);
  let startTimeFormatString = "d LLLL";
  let endTimeFormatString = "d LLLL";
  let punctuation = " - ";
  if (startTime.getDate() === endTime.getDate()) {
    endTimeFormatString = "LLLL";
    punctuation = " ";
  }
  if (startTime.getMonth() === endTime.getMonth()) {
    startTimeFormatString = "d";
  }

  const startTimeString = localDateConvert(
    originalStartTime,
    startTimeFormatString
  );
  const endTimeString = localDateConvert(originalEndTime, endTimeFormatString);

  return startTimeString + punctuation + endTimeString;
};
