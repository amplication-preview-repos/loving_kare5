import { SortOrder } from "../../util/SortOrder";

export type HolidayOrderByInput = {
  calendarId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
