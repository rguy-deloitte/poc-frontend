import { withJsonFormsControlProps } from '@jsonforms/react';
import { GdsRadio } from './gdsRadio';

interface GdsRadioControlProps {
  data: any;
  errors: any;
  handleChange(path: string, value: string): void;
  label: string;
  path: string;
  schema: any;
  uischema: any;
  visible: boolean;
}

const GdsRadioControl = ({
  data,
  errors,
  handleChange,
  label,
  path,
  schema,
  uischema,
  visible,
}: GdsRadioControlProps) => (
  <GdsRadio
    errors={errors}
    label={label}
    path={path}
    schema={schema}
    uischema={uischema}
    updateValue={(newValue: string) => handleChange(path, newValue)}
    value={data}
    visible={visible}
  />
);

export default withJsonFormsControlProps(GdsRadioControl);
