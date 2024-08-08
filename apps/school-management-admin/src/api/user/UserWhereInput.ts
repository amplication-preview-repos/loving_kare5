import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GradeWhereUniqueInput } from "../grade/GradeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";
import { SectionWhereUniqueInput } from "../section/SectionWhereUniqueInput";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  grade?: GradeWhereUniqueInput;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  role?: "Option1";
  school?: SchoolWhereUniqueInput;
  section?: SectionWhereUniqueInput;
  username?: StringFilter;
};
