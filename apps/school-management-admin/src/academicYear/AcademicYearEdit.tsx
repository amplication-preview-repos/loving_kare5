import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { SchoolTitle } from "../school/SchoolTitle";
import { TermTitle } from "../term/TermTitle";

export const AcademicYearEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="school.id" reference="School" label="School">
          <SelectInput optionText={SchoolTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="terms"
          reference="Term"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TermTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="year" source="year" />
      </SimpleForm>
    </Edit>
  );
};
