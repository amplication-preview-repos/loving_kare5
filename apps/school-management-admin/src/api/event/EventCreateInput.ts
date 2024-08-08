import { CalendarWhereUniqueInput } from "../calendar/CalendarWhereUniqueInput";
import { CalendarCreateNestedManyWithoutEventsInput } from "./CalendarCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  calendar?: CalendarWhereUniqueInput | null;
  calendars?: CalendarCreateNestedManyWithoutEventsInput;
  description?: string | null;
  endTime?: Date | null;
  location?: string | null;
  startTime?: Date | null;
  title?: string | null;
};
