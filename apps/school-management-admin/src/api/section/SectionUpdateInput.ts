import { GradeWhereUniqueInput } from "../grade/GradeWhereUniqueInput";
import { UserUpdateManyWithoutSectionsInput } from "./UserUpdateManyWithoutSectionsInput";

export type SectionUpdateInput = {
  grade?: GradeWhereUniqueInput | null;
  name?: string | null;
  users?: UserUpdateManyWithoutSectionsInput;
};
