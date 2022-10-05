import React from 'react';
import { Details, FormGroup, InputField } from 'govuk-react';
import { Hidden } from '@mui/material';

interface GdsTextProps {
  errors: any;
  label: string;
  uischema: any;
  updateValue: (newValue: string) => void;
  value: string;
  visible: boolean;
}

export const GdsText: React.FC<GdsTextProps> = ({
  errors,
  label,
  uischema,
  updateValue,
  value,
  visible,
}) => {
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateValue(e.target.value);
  };

  return (
    <Hidden xsUp={!visible}>
      <FormGroup>
        <InputField
          hint={uischema.hint ? uischema.hint : ''}
          input={{
            onChange: inputChange,
            placeholder: uischema.placeholder ? uischema.placeholder : '',
            type: uischema.options
              ? uischema.options.inputType
                ? uischema.options.inputType
                : 'text'
              : 'text',
            value: value ? value : '',
          }}
          meta={{
            error: errors ? `This field ${errors}` : undefined,
            touched: true,
          }}
        >
          {label}
        </InputField>
      </FormGroup>
      {uischema.help &&
        <Details summary={`${label} guidance`}><span dangerouslySetInnerHTML={{__html: uischema.help}}></span></Details>
      }
    </Hidden>
  );
};
