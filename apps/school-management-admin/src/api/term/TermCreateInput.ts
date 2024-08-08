import { AcademicYearWhereUniqueInput } from "../academicYear/AcademicYearWhereUniqueInput";

export type TermCreateInput = {
  academicYear?: AcademicYearWhereUniqueInput | null;
  name?: string | null;
};
