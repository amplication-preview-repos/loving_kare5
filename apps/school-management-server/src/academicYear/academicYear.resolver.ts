import * as graphql from "@nestjs/graphql";
import { AcademicYearResolverBase } from "./base/academicYear.resolver.base";
import { AcademicYear } from "./base/AcademicYear";
import { AcademicYearService } from "./academicYear.service";

@graphql.Resolver(() => AcademicYear)
export class AcademicYearResolver extends AcademicYearResolverBase {
  constructor(protected readonly service: AcademicYearService) {
    super(service);
  }
}
