import { SortOrder } from "../../util/SortOrder";

export type CalendarOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  eventId?: SortOrder;
  id?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
