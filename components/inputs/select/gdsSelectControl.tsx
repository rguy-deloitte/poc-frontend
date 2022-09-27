import { withJsonFormsControlProps } from '@jsonforms/react';
import { GdsSelect } from './gdsSelect';

interface GdsSelectControlProps {
  data: any;
  handleChange(path: string, value: string): void;
  path: string;
  label: string;
  uischema: any;
  errors: any;
  schema: any;
}

const GdsSelectControl = ({
  data,
  handleChange,
  path,
  label,
  uischema,
  errors,
  schema,
}: GdsSelectControlProps) => (
  <GdsSelect
    value={data}
    updateValue={(newValue: string) => handleChange(path, newValue)}
    label={label}
    uischema={uischema}
    errors={errors}
    path={path}
    schema={schema}
  />
);

export default withJsonFormsControlProps(GdsSelectControl);
