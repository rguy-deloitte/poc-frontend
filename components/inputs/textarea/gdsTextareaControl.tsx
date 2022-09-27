import { withJsonFormsControlProps } from '@jsonforms/react';
import { GdsTextarea } from './gdsTextarea';

interface GdsTextareaControlProps {
  data: any;
  handleChange(path: string, value: string): void;
  path: string;
  label: string;
  uischema: any;
  errors: any;
}

const GdsTextareaControl = ({
  data,
  handleChange,
  path,
  label,
  uischema,
  errors,
}: GdsTextareaControlProps) => (
  <GdsTextarea
    value={data}
    updateValue={(newValue: string) => handleChange(path, newValue)}
    label={label}
    uischema={uischema}
    errors={errors}
  />
);

export default withJsonFormsControlProps(GdsTextareaControl);
