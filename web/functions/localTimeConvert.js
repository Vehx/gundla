export const localTimeConvert = (timeStamp) => {
  timeStamp = new Date(timeStamp);
  return timeStamp.getHours();
};
