import { StringFilter } from "../../util/StringFilter";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";
import { TermListRelationFilter } from "../term/TermListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AcademicYearWhereInput = {
  id?: StringFilter;
  school?: SchoolWhereUniqueInput;
  terms?: TermListRelationFilter;
  year?: IntNullableFilter;
};
