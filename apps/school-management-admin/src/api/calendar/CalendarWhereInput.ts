import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { HolidayListRelationFilter } from "../holiday/HolidayListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CalendarWhereInput = {
  date?: DateTimeNullableFilter;
  event?: EventWhereUniqueInput;
  events?: EventListRelationFilter;
  holidays?: HolidayListRelationFilter;
  id?: StringFilter;
  typeField?: "Option1";
};
