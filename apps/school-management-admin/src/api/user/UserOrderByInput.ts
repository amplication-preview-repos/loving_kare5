import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  gradeId?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  role?: SortOrder;
  roles?: SortOrder;
  schoolId?: SortOrder;
  sectionId?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
