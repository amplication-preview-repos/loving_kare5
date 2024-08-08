import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";
import { TermCreateNestedManyWithoutAcademicYearsInput } from "./TermCreateNestedManyWithoutAcademicYearsInput";

export type AcademicYearCreateInput = {
  school?: SchoolWhereUniqueInput | null;
  terms?: TermCreateNestedManyWithoutAcademicYearsInput;
  year?: number | null;
};
