import { Calendar } from "../calendar/Calendar";

export type Event = {
  calendar?: Calendar | null;
  calendars?: Array<Calendar>;
  createdAt: Date;
  description: string | null;
  endTime: Date | null;
  id: string;
  location: string | null;
  startTime: Date | null;
  title: string | null;
  updatedAt: Date;
};
