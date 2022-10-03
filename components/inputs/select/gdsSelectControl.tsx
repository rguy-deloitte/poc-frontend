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
  visible: boolean;
}

const GdsSelectControl = ({
  data,
  handleChange,
  path,
  label,
  uischema,
  errors,
  schema,
  visible,
}: GdsSelectControlProps) => (
  <GdsSelect
    value={data}
    updateValue={(newValue: string) => handleChange(path, newValue)}
    label={label}
    uischema={uischema}
    errors={errors}
    path={path}
    schema={schema}
    visible={visible}
  />
);

export default withJsonFormsControlProps(GdsSelectControl);
