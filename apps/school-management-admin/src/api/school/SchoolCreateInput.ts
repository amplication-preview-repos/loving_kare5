import { AcademicYearCreateNestedManyWithoutSchoolsInput } from "./AcademicYearCreateNestedManyWithoutSchoolsInput";
import { UserCreateNestedManyWithoutSchoolsInput } from "./UserCreateNestedManyWithoutSchoolsInput";

export type SchoolCreateInput = {
  academicYears?: AcademicYearCreateNestedManyWithoutSchoolsInput;
  name?: string | null;
  users?: UserCreateNestedManyWithoutSchoolsInput;
};
