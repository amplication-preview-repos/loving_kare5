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
import { GradeService } from "../grade.service";
import { GradeCreateInput } from "./GradeCreateInput";
import { Grade } from "./Grade";
import { GradeFindManyArgs } from "./GradeFindManyArgs";
import { GradeWhereUniqueInput } from "./GradeWhereUniqueInput";
import { GradeUpdateInput } from "./GradeUpdateInput";
import { SectionFindManyArgs } from "../../section/base/SectionFindManyArgs";
import { Section } from "../../section/base/Section";
import { SectionWhereUniqueInput } from "../../section/base/SectionWhereUniqueInput";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

export class GradeControllerBase {
  constructor(protected readonly service: GradeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Grade })
  async createGrade(@common.Body() data: GradeCreateInput): Promise<Grade> {
    return await this.service.createGrade({
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
  @swagger.ApiOkResponse({ type: [Grade] })
  @ApiNestedQuery(GradeFindManyArgs)
  async grades(@common.Req() request: Request): Promise<Grade[]> {
    const args = plainToClass(GradeFindManyArgs, request.query);
    return this.service.grades({
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
  @swagger.ApiOkResponse({ type: Grade })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async grade(
    @common.Param() params: GradeWhereUniqueInput
  ): Promise<Grade | null> {
    const result = await this.service.grade({
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
  @swagger.ApiOkResponse({ type: Grade })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateGrade(
    @common.Param() params: GradeWhereUniqueInput,
    @common.Body() data: GradeUpdateInput
  ): Promise<Grade | null> {
    try {
      return await this.service.updateGrade({
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
  @swagger.ApiOkResponse({ type: Grade })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteGrade(
    @common.Param() params: GradeWhereUniqueInput
  ): Promise<Grade | null> {
    try {
      return await this.service.deleteGrade({
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

  @common.Get("/:id/sections")
  @ApiNestedQuery(SectionFindManyArgs)
  async findSections(
    @common.Req() request: Request,
    @common.Param() params: GradeWhereUniqueInput
  ): Promise<Section[]> {
    const query = plainToClass(SectionFindManyArgs, request.query);
    const results = await this.service.findSections(params.id, {
      ...query,
      select: {
        createdAt: true,

        grade: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/sections")
  async connectSections(
    @common.Param() params: GradeWhereUniqueInput,
    @common.Body() body: SectionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sections: {
        connect: body,
      },
    };
    await this.service.updateGrade({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/sections")
  async updateSections(
    @common.Param() params: GradeWhereUniqueInput,
    @common.Body() body: SectionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sections: {
        set: body,
      },
    };
    await this.service.updateGrade({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/sections")
  async disconnectSections(
    @common.Param() params: GradeWhereUniqueInput,
    @common.Body() body: SectionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sections: {
        disconnect: body,
      },
    };
    await this.service.updateGrade({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/users")
  @ApiNestedQuery(UserFindManyArgs)
  async findUsers(
    @common.Req() request: Request,
    @common.Param() params: GradeWhereUniqueInput
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
    @common.Param() params: GradeWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        connect: body,
      },
    };
    await this.service.updateGrade({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/users")
  async updateUsers(
    @common.Param() params: GradeWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        set: body,
      },
    };
    await this.service.updateGrade({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/users")
  async disconnectUsers(
    @common.Param() params: GradeWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        disconnect: body,
      },
    };
    await this.service.updateGrade({
      where: params,
      data,
      select: { id: true },
    });
  }
}
