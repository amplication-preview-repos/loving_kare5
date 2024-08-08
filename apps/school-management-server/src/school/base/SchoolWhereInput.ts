/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AcademicYearListRelationFilter } from "../../academicYear/base/AcademicYearListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../../user/base/UserListRelationFilter";

@InputType()
class SchoolWhereInput {
  @ApiProperty({
    required: false,
    type: () => AcademicYearListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AcademicYearListRelationFilter)
  @IsOptional()
  @Field(() => AcademicYearListRelationFilter, {
    nullable: true,
  })
  academicYears?: AcademicYearListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => UserListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UserListRelationFilter)
  @IsOptional()
  @Field(() => UserListRelationFilter, {
    nullable: true,
  })
  users?: UserListRelationFilter;
}

export { SchoolWhereInput as SchoolWhereInput };
