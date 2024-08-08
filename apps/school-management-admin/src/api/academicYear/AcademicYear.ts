import { School } from "../school/School";
import { Term } from "../term/Term";

export type AcademicYear = {
  createdAt: Date;
  id: string;
  school?: School | null;
  terms?: Array<Term>;
  updatedAt: Date;
  year: number | null;
};
