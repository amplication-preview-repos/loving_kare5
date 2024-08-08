import { AcademicYearWhereInput } from "./AcademicYearWhereInput";
import { AcademicYearOrderByInput } from "./AcademicYearOrderByInput";

export type AcademicYearFindManyArgs = {
  where?: AcademicYearWhereInput;
  orderBy?: Array<AcademicYearOrderByInput>;
  skip?: number;
  take?: number;
};
