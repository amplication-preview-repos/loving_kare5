import { Module } from "@nestjs/common";
import { TermModuleBase } from "./base/term.module.base";
import { TermService } from "./term.service";
import { TermController } from "./term.controller";
import { TermResolver } from "./term.resolver";

@Module({
  imports: [TermModuleBase],
  controllers: [TermController],
  providers: [TermService, TermResolver],
  exports: [TermService],
})
export class TermModule {}
