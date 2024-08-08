import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { EventCreateNestedManyWithoutCalendarsInput } from "./EventCreateNestedManyWithoutCalendarsInput";
import { HolidayCreateNestedManyWithoutCalendarsInput } from "./HolidayCreateNestedManyWithoutCalendarsInput";

export type CalendarCreateInput = {
  date?: Date | null;
  event?: EventWhereUniqueInput | null;
  events?: EventCreateNestedManyWithoutCalendarsInput;
  holidays?: HolidayCreateNestedManyWithoutCalendarsInput;
  typeField?: "Option1" | null;
};
