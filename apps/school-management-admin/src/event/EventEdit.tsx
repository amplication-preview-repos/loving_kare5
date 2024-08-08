import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { CalendarTitle } from "../calendar/CalendarTitle";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
