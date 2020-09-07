import { format } from "date-fns";
import { sv } from "date-fns/locale";

export const localDateConvert = (dateStamp, formatStr = "EEEE d LLLL") => {
  dateStamp = new Date(dateStamp);
  return format(dateStamp, formatStr, { locale: sv });
};
