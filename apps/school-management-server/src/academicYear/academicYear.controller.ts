import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AcademicYearService } from "./academicYear.service";
import { AcademicYearControllerBase } from "./base/academicYear.controller.base";

@swagger.ApiTags("academicYears")
@common.Controller("academicYears")
export class AcademicYearController extends AcademicYearControllerBase {
  constructor(protected readonly service: AcademicYearService) {
    super(service);
  }
}
