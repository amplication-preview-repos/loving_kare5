import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TermService } from "./term.service";
import { TermControllerBase } from "./base/term.controller.base";

@swagger.ApiTags("terms")
@common.Controller("terms")
export class TermController extends TermControllerBase {
  constructor(protected readonly service: TermService) {
    super(service);
  }
}
