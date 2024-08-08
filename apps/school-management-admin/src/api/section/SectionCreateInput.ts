import { GradeWhereUniqueInput } from "../grade/GradeWhereUniqueInput";
import { UserCreateNestedManyWithoutSectionsInput } from "./UserCreateNestedManyWithoutSectionsInput";

export type SectionCreateInput = {
  grade?: GradeWhereUniqueInput | null;
  name?: string | null;
  users?: UserCreateNestedManyWithoutSectionsInput;
};
