import { TermWhereUniqueInput } from "./TermWhereUniqueInput";
import { TermUpdateInput } from "./TermUpdateInput";

export type UpdateTermArgs = {
  where: TermWhereUniqueInput;
  data: TermUpdateInput;
};
