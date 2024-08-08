import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AcademicYearTitle } from "../academicYear/AcademicYearTitle";

export const TermCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="academicYear.id"
          reference="AcademicYear"
          label="AcademicYear"
        >
          <SelectInput optionText={AcademicYearTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
