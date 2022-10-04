import { withJsonFormsControlProps } from '@jsonforms/react';
import { GdsCheckbox } from './gdsCheckbox';

interface GdsCheckboxControlProps {
  data: any;
  errors: any;
  handleChange(path: string, value: any): void;
  label: string;
  path: string;
  uischema: any;
  visible: boolean;
}

const GdsCheckboxControl = ({
  data,
  errors,
  handleChange,
  label,
  path,
  uischema,
  visible,
}: GdsCheckboxControlProps) => (
  <GdsCheckbox
    errors={errors}
    label={label}
    uischema={uischema}
    updateValue={(newValue: boolean) => handleChange(path, newValue ? true : undefined)}
    value={data}
    visible={visible}
  />
);

export default withJsonFormsControlProps(GdsCheckboxControl);
