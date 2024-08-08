import { AcademicYear as TAcademicYear } from "../api/academicYear/AcademicYear";

export const ACADEMICYEAR_TITLE_FIELD = "id";

export const AcademicYearTitle = (record: TAcademicYear): string => {
  return record.id?.toString() || String(record.id);
};
