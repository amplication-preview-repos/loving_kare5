import { CalendarWhereUniqueInput } from "../calendar/CalendarWhereUniqueInput";

export type HolidayCreateInput = {
  calendar?: CalendarWhereUniqueInput | null;
  date?: Date | null;
  description?: string | null;
  title?: string | null;
};
