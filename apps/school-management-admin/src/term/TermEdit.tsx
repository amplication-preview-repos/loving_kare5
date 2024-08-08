import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AcademicYearTitle } from "../academicYear/AcademicYearTitle";

export const TermEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
