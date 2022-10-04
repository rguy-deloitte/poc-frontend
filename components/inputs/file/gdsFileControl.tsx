import { withJsonFormsControlProps } from '@jsonforms/react';
import { GdsFile } from './gdsFile';

interface GdsFileControlProps {
  errors: any;
  handleChange(path: string, value: any): void;
  path: string;
  uischema: any;
  visible: boolean;
}

const GdsFileControl = ({
  errors,
  handleChange,
  path,
  uischema,
  visible,
}: GdsFileControlProps) => (
  <GdsFile
    errors={errors}
    uischema={uischema}
    updateValue={(newValue: string) => handleChange(path, newValue !== '' ? newValue : undefined)}
    visible={visible}
  />
);

export default withJsonFormsControlProps(GdsFileControl);
