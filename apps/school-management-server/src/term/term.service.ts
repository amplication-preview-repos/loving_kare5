import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TermServiceBase } from "./base/term.service.base";

@Injectable()
export class TermService extends TermServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
