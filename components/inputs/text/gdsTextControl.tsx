import { withJsonFormsControlProps } from '@jsonforms/react';
import { GdsText } from './gdsText';

interface GdsTextControlProps {
  data: any;
  handleChange(path: string, value: string): void;
  path: string;
  label: string;
  uischema: any;
  errors: any;
}

const GdsTextControl = ({
  data,
  handleChange,
  path,
  label,
  uischema,
  errors,
}: GdsTextControlProps) => (
  <GdsText
    value={data}
    updateValue={(newValue: string) => handleChange(path, newValue)}
    label={label}
    uischema={uischema}
    errors={errors}
  />
);

export default withJsonFormsControlProps(GdsTextControl);
