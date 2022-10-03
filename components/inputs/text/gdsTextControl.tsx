import { withJsonFormsControlProps } from '@jsonforms/react';
import { GdsText } from './gdsText';

interface GdsTextControlProps {
  data: any;
  handleChange(path: string, value: string): void;
  path: string;
  label: string;
  uischema: any;
  errors: any;
  visible: boolean;
}

const GdsTextControl = ({
  data,
  handleChange,
  path,
  label,
  uischema,
  errors,
  visible,
}: GdsTextControlProps) => (
  <GdsText
    value={data}
    updateValue={(newValue: string) => handleChange(path, newValue)}
    label={label}
    uischema={uischema}
    errors={errors}
    visible={visible}
  />
);

export default withJsonFormsControlProps(GdsTextControl);
