import { withJsonFormsControlProps } from '@jsonforms/react';
import { GdsCheckbox } from './gdsCheckbox';

interface GdsCheckboxControlProps {
  data: any;
  handleChange(path: string, value: string): void;
  path: string;
  label: string;
  uischema: any;
  errors: any;
  schema: any;
}

const GdsCheckboxControl = ({
  data,
  handleChange,
  path,
  label,
  uischema,
  errors,
  schema,
}: GdsCheckboxControlProps) => (
  <GdsCheckbox
    value={data}
    updateValue={(newValue: string) => handleChange(path, newValue)}
    label={label}
    uischema={uischema}
    errors={errors}
    path={path}
    schema={schema}
  />
);

export default withJsonFormsControlProps(GdsCheckboxControl);
