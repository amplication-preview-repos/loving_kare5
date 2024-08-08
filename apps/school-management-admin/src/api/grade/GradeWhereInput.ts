import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SectionListRelationFilter } from "../section/SectionListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type GradeWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  sections?: SectionListRelationFilter;
  users?: UserListRelationFilter;
};
