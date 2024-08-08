import { CalendarWhereUniqueInput } from "../calendar/CalendarWhereUniqueInput";
import { CalendarListRelationFilter } from "../calendar/CalendarListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EventWhereInput = {
  calendar?: CalendarWhereUniqueInput;
  calendars?: CalendarListRelationFilter;
  description?: StringNullableFilter;
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  startTime?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
