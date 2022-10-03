import React, { useState } from 'react';
import { Checkbox, Fieldset, FormGroup, HintText } from 'govuk-react';
import { Hidden } from '@mui/material';

interface GdsCheckboxProps {
  errors: any;
  id?: string;
  label: string;
  path: any;
  schema: any;
  uischema: any;
  updateValue: (newValue: boolean) => void;
  value: boolean;
  visible: boolean;
}

export const GdsCheckbox: React.FC<GdsCheckboxProps> = ({
  errors,
  label,
  path,
  schema,
  uischema,
  updateValue,
  value,
  visible,
}) => {
  const [data, setData] = useState<any>({ touched: false });
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateValue(e.target.checked);
  };
  const inputTouch = () => {
    setData({ touched: true });
  };
  
  return (
    <Hidden xsUp={false}>
      {uischema.hint &&
        <HintText>{uischema.hint}</HintText>
      }
      <Checkbox name={path} onChange={inputChange}>{label}</Checkbox>
    </Hidden>
  );
};
