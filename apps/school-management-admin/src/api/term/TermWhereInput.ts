import { AcademicYearWhereUniqueInput } from "../academicYear/AcademicYearWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TermWhereInput = {
  academicYear?: AcademicYearWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};
