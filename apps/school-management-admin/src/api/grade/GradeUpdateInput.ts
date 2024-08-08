import { SectionUpdateManyWithoutGradesInput } from "./SectionUpdateManyWithoutGradesInput";
import { UserUpdateManyWithoutGradesInput } from "./UserUpdateManyWithoutGradesInput";

export type GradeUpdateInput = {
  name?: string | null;
  sections?: SectionUpdateManyWithoutGradesInput;
  users?: UserUpdateManyWithoutGradesInput;
};
