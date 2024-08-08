import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";
import { TermUpdateManyWithoutAcademicYearsInput } from "./TermUpdateManyWithoutAcademicYearsInput";

export type AcademicYearUpdateInput = {
  school?: SchoolWhereUniqueInput | null;
  terms?: TermUpdateManyWithoutAcademicYearsInput;
  year?: number | null;
};
