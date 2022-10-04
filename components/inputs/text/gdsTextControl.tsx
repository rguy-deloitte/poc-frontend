import { withJsonFormsControlProps } from '@jsonforms/react';
import { GdsText } from './gdsText';

interface GdsTextControlProps {
  data: any;
  errors: any;
  handleChange(path: string, value: any): void;
  label: string;
  path: string;
  uischema: any;
  visible: boolean;
}

const GdsTextControl = ({
  data,
  errors,
  handleChange,
  label,
  path,
  uischema,
  visible,
}: GdsTextControlProps) => (
  <GdsText
    errors={errors}
    label={label}
    uischema={uischema}
    updateValue={(newValue: string) => handleChange(path, newValue !== '' ? newValue : undefined)}
    value={data}
    visible={visible}
  />
);

export default withJsonFormsControlProps(GdsTextControl);
