import { Event } from "../event/Event";
import { Holiday } from "../holiday/Holiday";

export type Calendar = {
  createdAt: Date;
  date: Date | null;
  event?: Event | null;
  events?: Array<Event>;
  holidays?: Array<Holiday>;
  id: string;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
