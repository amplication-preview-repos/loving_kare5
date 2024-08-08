import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SubjectWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
