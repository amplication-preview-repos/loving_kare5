import { Module } from "@nestjs/common";
import { AcademicYearModuleBase } from "./base/academicYear.module.base";
import { AcademicYearService } from "./academicYear.service";
import { AcademicYearController } from "./academicYear.controller";
import { AcademicYearResolver } from "./academicYear.resolver";

@Module({
  imports: [AcademicYearModuleBase],
  controllers: [AcademicYearController],
  providers: [AcademicYearService, AcademicYearResolver],
  exports: [AcademicYearService],
})
export class AcademicYearModule {}
