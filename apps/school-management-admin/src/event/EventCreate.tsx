import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { CalendarTitle } from "../calendar/CalendarTitle";

export const EventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="calendar.id"
          reference="Calendar"
          label="calendar"
        >
          <SelectInput optionText={CalendarTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="calendars"
          reference="Calendar"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CalendarTitle} />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="endTime" source="endTime" />
        <TextInput label="location" source="location" />
        <DateTimeInput label="startTime" source="startTime" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
