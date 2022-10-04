import React from 'react';
import { Checkbox, ErrorText, FormGroup, HintText } from 'govuk-react';
import { Hidden } from '@mui/material';

interface GdsCheckboxProps {
  errors: any;
  label: string;
  uischema: any;
  updateValue: (newValue: boolean) => void;
  value: boolean;
  visible: boolean;
}

export const GdsCheckbox: React.FC<GdsCheckboxProps> = ({
  errors,
  label,
  uischema,
  updateValue,
  value,
  visible,
}) => {
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateValue(e.target.checked);
  };
  
  return (
    <Hidden xsUp={!visible}>
      <FormGroup error={errors}>
        {uischema.hint &&
          <HintText>{uischema.hint}</HintText>
        }
        {errors &&
          <ErrorText>This field {errors}</ErrorText>
        }
        <Checkbox checked={value === true} onChange={inputChange}>{label}</Checkbox>
      </FormGroup>
    </Hidden>
  );
};
