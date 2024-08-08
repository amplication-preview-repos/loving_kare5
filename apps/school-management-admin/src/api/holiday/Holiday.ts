import { Calendar } from "../calendar/Calendar";

export type Holiday = {
  calendar?: Calendar | null;
  createdAt: Date;
  date: Date | null;
  description: string | null;
  id: string;
  title: string | null;
  updatedAt: Date;
};
