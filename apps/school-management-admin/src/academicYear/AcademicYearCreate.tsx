import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { SchoolTitle } from "../school/SchoolTitle";
import { TermTitle } from "../term/TermTitle";

export const AcademicYearCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
