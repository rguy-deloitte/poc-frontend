import { withJsonFormsControlProps } from '@jsonforms/react';
import { GdsRadio } from './gdsRadio';

interface GdsRadioControlProps {
  data: any;
  handleChange(path: string, value: string): void;
  path: string;
  label: string;
  uischema: any;
  errors: any;
  schema: any;
}

const GdsRadioControl = ({
  data,
  handleChange,
  path,
  label,
  uischema,
  errors,
  schema,
}: GdsRadioControlProps) => (
  <GdsRadio
    value={data}
    updateValue={(newValue: string) => handleChange(path, newValue)}
    label={label}
    uischema={uischema}
    errors={errors}
    path={path}
    schema={schema}
  />
);

export default withJsonFormsControlProps(GdsRadioControl);
