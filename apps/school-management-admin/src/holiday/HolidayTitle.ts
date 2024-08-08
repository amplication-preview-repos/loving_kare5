import { Holiday as THoliday } from "../api/holiday/Holiday";

export const HOLIDAY_TITLE_FIELD = "title";

export const HolidayTitle = (record: THoliday): string => {
  return record.title?.toString() || String(record.id);
};
