import { GradeWhereUniqueInput } from "../grade/GradeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type SectionWhereInput = {
  grade?: GradeWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  users?: UserListRelationFilter;
};
