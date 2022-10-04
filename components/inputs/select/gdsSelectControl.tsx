import { withJsonFormsControlProps } from '@jsonforms/react';
import { GdsSelect } from './gdsSelect';

interface GdsSelectControlProps {
  data: any;
  errors: any;
  handleChange(path: string, value: any): void;
  label: string;
  path: string;
  schema: any;
  uischema: any;
  visible: boolean;
}

const GdsSelectControl = ({
  data,
  errors,
  handleChange,
  label,
  path,
  schema,
  uischema,
  visible,
}: GdsSelectControlProps) => (
  <GdsSelect
    errors={errors}
    label={label}
    schema={schema}
    uischema={uischema}
    updateValue={(newValue: string) => handleChange(path, newValue !== '' ? newValue : undefined)}
    value={data}
    visible={visible}
  />
);

export default withJsonFormsControlProps(GdsSelectControl);
