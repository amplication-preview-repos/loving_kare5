import { AcademicYearUpdateManyWithoutSchoolsInput } from "./AcademicYearUpdateManyWithoutSchoolsInput";
import { UserUpdateManyWithoutSchoolsInput } from "./UserUpdateManyWithoutSchoolsInput";

export type SchoolUpdateInput = {
  academicYears?: AcademicYearUpdateManyWithoutSchoolsInput;
  name?: string | null;
  users?: UserUpdateManyWithoutSchoolsInput;
};
