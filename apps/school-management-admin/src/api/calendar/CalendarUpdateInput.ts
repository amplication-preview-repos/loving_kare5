import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { EventUpdateManyWithoutCalendarsInput } from "./EventUpdateManyWithoutCalendarsInput";
import { HolidayUpdateManyWithoutCalendarsInput } from "./HolidayUpdateManyWithoutCalendarsInput";

export type CalendarUpdateInput = {
  date?: Date | null;
  event?: EventWhereUniqueInput | null;
  events?: EventUpdateManyWithoutCalendarsInput;
  holidays?: HolidayUpdateManyWithoutCalendarsInput;
  typeField?: "Option1" | null;
};
