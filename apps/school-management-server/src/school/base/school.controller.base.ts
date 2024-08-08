/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SchoolService } from "../school.service";
import { SchoolCreateInput } from "./SchoolCreateInput";
import { School } from "./School";
import { SchoolFindManyArgs } from "./SchoolFindManyArgs";
import { SchoolWhereUniqueInput } from "./SchoolWhereUniqueInput";
import { SchoolUpdateInput } from "./SchoolUpdateInput";
import { AcademicYearFindManyArgs } from "../../academicYear/base/AcademicYearFindManyArgs";
import { AcademicYear } from "../../academicYear/base/AcademicYear";
import { AcademicYearWhereUniqueInput } from "../../academicYear/base/AcademicYearWhereUniqueInput";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

export class SchoolControllerBase {
  constructor(protected readonly service: SchoolService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: School })
  async createSchool(@common.Body() data: SchoolCreateInput): Promise<School> {
    return await this.service.createSchool({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [School] })
  @ApiNestedQuery(SchoolFindManyArgs)
  async schools(@common.Req() request: Request): Promise<School[]> {
    const args = plainToClass(SchoolFindManyArgs, request.query);
    return this.service.schools({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: School })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async school(
    @common.Param() params: SchoolWhereUniqueInput
  ): Promise<School | null> {
    const result = await this.service.school({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: School })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSchool(
    @common.Param() params: SchoolWhereUniqueInput,
    @common.Body() data: SchoolUpdateInput
  ): Promise<School | null> {
    try {
      return await this.service.updateSchool({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: School })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSchool(
    @common.Param() params: SchoolWhereUniqueInput
  ): Promise<School | null> {
    try {
      return await this.service.deleteSchool({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/academicYears")
  @ApiNestedQuery(AcademicYearFindManyArgs)
  async findAcademicYears(
    @common.Req() request: Request,
    @common.Param() params: SchoolWhereUniqueInput
  ): Promise<AcademicYear[]> {
    const query = plainToClass(AcademicYearFindManyArgs, request.query);
    const results = await this.service.findAcademicYears(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        school: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        year: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/academicYears")
  async connectAcademicYears(
    @common.Param() params: SchoolWhereUniqueInput,
    @common.Body() body: AcademicYearWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      academicYears: {
        connect: body,
      },
    };
    await this.service.updateSchool({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/academicYears")
  async updateAcademicYears(
    @common.Param() params: SchoolWhereUniqueInput,
    @common.Body() body: AcademicYearWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      academicYears: {
        set: body,
      },
    };
    await this.service.updateSchool({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/academicYears")
  async disconnectAcademicYears(
    @common.Param() params: SchoolWhereUniqueInput,
    @common.Body() body: AcademicYearWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      academicYears: {
        disconnect: body,
      },
    };
    await this.service.updateSchool({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/users")
  @ApiNestedQuery(UserFindManyArgs)
  async findUsers(
    @common.Req() request: Request,
    @common.Param() params: SchoolWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findUsers(params.id, {
      ...query,
      select: {
        createdAt: true,
        email: true,
        firstName: true,

        grade: {
          select: {
            id: true,
          },
        },

        id: true,
        lastName: true,
        role: true,
        roles: true,

        school: {
          select: {
            id: true,
          },
        },

        section: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        username: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/users")
  async connectUsers(
    @common.Param() params: SchoolWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        connect: body,
      },
    };
    await this.service.updateSchool({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/users")
  async updateUsers(
    @common.Param() params: SchoolWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        set: body,
      },
    };
    await this.service.updateSchool({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/users")
  async disconnectUsers(
    @common.Param() params: SchoolWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        disconnect: body,
      },
    };
    await this.service.updateSchool({
      where: params,
      data,
      select: { id: true },
    });
  }
}
