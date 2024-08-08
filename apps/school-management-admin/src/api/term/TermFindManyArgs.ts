import { TermWhereInput } from "./TermWhereInput";
import { TermOrderByInput } from "./TermOrderByInput";

export type TermFindManyArgs = {
  where?: TermWhereInput;
  orderBy?: Array<TermOrderByInput>;
  skip?: number;
  take?: number;
};
