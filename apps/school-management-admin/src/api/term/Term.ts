import { AcademicYear } from "../academicYear/AcademicYear";

export type Term = {
  academicYear?: AcademicYear | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
