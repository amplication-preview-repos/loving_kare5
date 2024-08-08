import { GradeWhereUniqueInput } from "../grade/GradeWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { SchoolWhereUniqueInput } from "../school/SchoolWhereUniqueInput";
import { SectionWhereUniqueInput } from "../section/SectionWhereUniqueInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  grade?: GradeWhereUniqueInput | null;
  lastName?: string | null;
  password: string;
  role?: "Option1" | null;
  roles: InputJsonValue;
  school?: SchoolWhereUniqueInput | null;
  section?: SectionWhereUniqueInput | null;
  username: string;
};
