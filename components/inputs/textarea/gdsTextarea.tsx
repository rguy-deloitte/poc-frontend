import React from 'react';
import { FormGroup, TextArea } from 'govuk-react';
import { Hidden } from '@mui/material';

interface GdsTextareaProps {
  errors: any;
  label: string;
  uischema: any;
  updateValue: (newValue: string) => void;
  value: string;
  visible: boolean;
}

export const GdsTextarea: React.FC<GdsTextareaProps> = ({
  errors,
  label,
  uischema,
  updateValue,
  value,
  visible,
}) => {
  const inputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateValue(e.target.value);
  };

  return (
    <Hidden xsUp={!visible}>
      <FormGroup>
        <TextArea
          hint={uischema.hint ? uischema.hint : ''}
          input={{
            onChange: inputChange,
            placeholder: uischema.placeholder ? uischema.placeholder : '',
            value: value ? value : '',
          }}
          meta={{
            error: errors ? `This field ${errors}` : undefined,
            touched: true,
          }}
        >
          {label}
        </TextArea>
      </FormGroup>
    </Hidden>
  );
};
