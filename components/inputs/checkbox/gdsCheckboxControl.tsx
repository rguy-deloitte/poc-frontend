import { withJsonFormsControlProps } from '@jsonforms/react';
import { GdsCheckbox } from './gdsCheckbox';

interface GdsCheckboxControlProps {
  data: any;
  handleChange(path: string, value: boolean): void;
  path: string;
  label: string;
  uischema: any;
  errors: any;
  schema: any;
  visible: boolean;
}

const GdsCheckboxControl = ({
  data,
  handleChange,
  path,
  label,
  uischema,
  errors,
  schema,
  visible,
}: GdsCheckboxControlProps) => (
  <GdsCheckbox
    value={data}
    updateValue={(newValue: boolean) => handleChange(path, newValue)}
    label={label}
    uischema={uischema}
    errors={errors}
    path={path}
    schema={schema}
    visible={visible}
  />
);

export default withJsonFormsControlProps(GdsCheckboxControl);
