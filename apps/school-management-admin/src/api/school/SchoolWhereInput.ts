import { AcademicYearListRelationFilter } from "../academicYear/AcademicYearListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type SchoolWhereInput = {
  academicYears?: AcademicYearListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  users?: UserListRelationFilter;
};
