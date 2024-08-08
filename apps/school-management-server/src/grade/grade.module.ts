import { Module } from "@nestjs/common";
import { GradeModuleBase } from "./base/grade.module.base";
import { GradeService } from "./grade.service";
import { GradeController } from "./grade.controller";
import { GradeResolver } from "./grade.resolver";

@Module({
  imports: [GradeModuleBase],
  controllers: [GradeController],
  providers: [GradeService, GradeResolver],
  exports: [GradeService],
})
export class GradeModule {}
