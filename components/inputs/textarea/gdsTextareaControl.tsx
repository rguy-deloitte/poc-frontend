import { withJsonFormsControlProps } from '@jsonforms/react';
import { GdsTextarea } from './gdsTextarea';

interface GdsTextareaControlProps {
  data: any;
  errors: any;
  handleChange(path: string, value: any): void;
  label: string;
  path: string;
  uischema: any;
  visible: boolean;
}

const GdsTextareaControl = ({
  data,
  errors,
  handleChange,
  label,
  path,
  uischema,
  visible,
}: GdsTextareaControlProps) => (
  <GdsTextarea
    errors={errors}
    label={label}
    uischema={uischema}
    updateValue={(newValue: string) => handleChange(path, newValue !== '' ? newValue : undefined)}
    value={data}
    visible={visible}
  />
);

export default withJsonFormsControlProps(GdsTextareaControl);
