import * as graphql from "@nestjs/graphql";
import { TermResolverBase } from "./base/term.resolver.base";
import { Term } from "./base/Term";
import { TermService } from "./term.service";

@graphql.Resolver(() => Term)
export class TermResolver extends TermResolverBase {
  constructor(protected readonly service: TermService) {
    super(service);
  }
}
