import { Term as TTerm } from "../api/term/Term";

export const TERM_TITLE_FIELD = "name";

export const TermTitle = (record: TTerm): string => {
  return record.name?.toString() || String(record.id);
};
