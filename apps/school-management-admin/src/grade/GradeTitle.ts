import { Grade as TGrade } from "../api/grade/Grade";

export const GRADE_TITLE_FIELD = "name";

export const GradeTitle = (record: TGrade): string => {
  return record.name?.toString() || String(record.id);
};
