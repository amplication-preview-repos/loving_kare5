import { AcademicYear } from "../academicYear/AcademicYear";
import { User } from "../user/User";

export type School = {
  academicYears?: Array<AcademicYear>;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  users?: Array<User>;
};
