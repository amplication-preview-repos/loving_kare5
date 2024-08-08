import { SectionCreateNestedManyWithoutGradesInput } from "./SectionCreateNestedManyWithoutGradesInput";
import { UserCreateNestedManyWithoutGradesInput } from "./UserCreateNestedManyWithoutGradesInput";

export type GradeCreateInput = {
  name?: string | null;
  sections?: SectionCreateNestedManyWithoutGradesInput;
  users?: UserCreateNestedManyWithoutGradesInput;
};
