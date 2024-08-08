import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AcademicYearServiceBase } from "./base/academicYear.service.base";

@Injectable()
export class AcademicYearService extends AcademicYearServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
