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
import { CalendarWhereUniqueInput } from "../../calendar/base/CalendarWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsDate,
} from "class-validator";
import { Type } from "class-transformer";
import { CalendarCreateNestedManyWithoutEventsInput } from "./CalendarCreateNestedManyWithoutEventsInput";

@InputType()
class EventCreateInput {
  @ApiProperty({
    required: false,
    type: () => CalendarWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CalendarWhereUniqueInput)
  @IsOptional()
  @Field(() => CalendarWhereUniqueInput, {
    nullable: true,
  })
  calendar?: CalendarWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => CalendarCreateNestedManyWithoutEventsInput,
  })
  @ValidateNested()
  @Type(() => CalendarCreateNestedManyWithoutEventsInput)
  @IsOptional()
  @Field(() => CalendarCreateNestedManyWithoutEventsInput, {
    nullable: true,
  })
  calendars?: CalendarCreateNestedManyWithoutEventsInput;

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
  description?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endTime?: Date | null;

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
  location?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startTime?: Date | null;

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
  title?: string | null;
}

export { EventCreateInput as EventCreateInput };
