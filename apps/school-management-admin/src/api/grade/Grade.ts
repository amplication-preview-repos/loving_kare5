import { Section } from "../section/Section";
import { User } from "../user/User";

export type Grade = {
  createdAt: Date;
  id: string;
  name: string | null;
  sections?: Array<Section>;
  updatedAt: Date;
  users?: Array<User>;
};
