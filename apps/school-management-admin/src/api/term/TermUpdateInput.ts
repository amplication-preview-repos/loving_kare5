import { AcademicYearWhereUniqueInput } from "../academicYear/AcademicYearWhereUniqueInput";

export type TermUpdateInput = {
  academicYear?: AcademicYearWhereUniqueInput | null;
  name?: string | null;
};
