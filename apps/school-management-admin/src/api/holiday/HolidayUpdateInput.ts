import { CalendarWhereUniqueInput } from "../calendar/CalendarWhereUniqueInput";

export type HolidayUpdateInput = {
  calendar?: CalendarWhereUniqueInput | null;
  date?: Date | null;
  description?: string | null;
  title?: string | null;
};
