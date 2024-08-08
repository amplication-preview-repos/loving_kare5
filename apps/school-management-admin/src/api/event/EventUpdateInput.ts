import { CalendarWhereUniqueInput } from "../calendar/CalendarWhereUniqueInput";
import { CalendarUpdateManyWithoutEventsInput } from "./CalendarUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  calendar?: CalendarWhereUniqueInput | null;
  calendars?: CalendarUpdateManyWithoutEventsInput;
  description?: string | null;
  endTime?: Date | null;
  location?: string | null;
  startTime?: Date | null;
  title?: string | null;
};
