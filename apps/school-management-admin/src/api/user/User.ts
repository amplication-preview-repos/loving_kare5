import { Grade } from "../grade/Grade";
import { JsonValue } from "type-fest";
import { School } from "../school/School";
import { Section } from "../section/Section";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  grade?: Grade | null;
  id: string;
  lastName: string | null;
  role?: "Option1" | null;
  roles: JsonValue;
  school?: School | null;
  section?: Section | null;
  updatedAt: Date;
  username: string;
};
