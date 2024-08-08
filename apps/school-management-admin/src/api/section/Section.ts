import { Grade } from "../grade/Grade";
import { User } from "../user/User";

export type Section = {
  createdAt: Date;
  grade?: Grade | null;
  id: string;
  name: string | null;
  updatedAt: Date;
  users?: Array<User>;
};
