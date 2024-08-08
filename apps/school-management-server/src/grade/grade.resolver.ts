import * as graphql from "@nestjs/graphql";
import { GradeResolverBase } from "./base/grade.resolver.base";
import { Grade } from "./base/Grade";
import { GradeService } from "./grade.service";

@graphql.Resolver(() => Grade)
export class GradeResolver extends GradeResolverBase {
  constructor(protected readonly service: GradeService) {
    super(service);
  }
}
