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
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { SectionCreateNestedManyWithoutGradesInput } from "./SectionCreateNestedManyWithoutGradesInput";
import { Type } from "class-transformer";
import { UserCreateNestedManyWithoutGradesInput } from "./UserCreateNestedManyWithoutGradesInput";

@InputType()
class GradeCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => SectionCreateNestedManyWithoutGradesInput,
  })
  @ValidateNested()
  @Type(() => SectionCreateNestedManyWithoutGradesInput)
  @IsOptional()
  @Field(() => SectionCreateNestedManyWithoutGradesInput, {
    nullable: true,
  })
  sections?: SectionCreateNestedManyWithoutGradesInput;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutGradesInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutGradesInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutGradesInput, {
    nullable: true,
  })
  users?: UserCreateNestedManyWithoutGradesInput;
}

export { GradeCreateInput as GradeCreateInput };
