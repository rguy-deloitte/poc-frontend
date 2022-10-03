import React, { useState } from 'react';
import { FormGroup, Select } from 'govuk-react';
import { Hidden } from '@mui/material';

interface GdsSelectProps {
  id?: string;
  value: string;
  updateValue: (newValue: string) => void;
  label: string;
  uischema: any;
  errors: any;
  path: any;
  schema: any;
  visible: boolean;
}

export const GdsSelect: React.FC<GdsSelectProps> = ({
  value,
  updateValue,
  label,
  uischema,
  errors,
  path,
  schema,
  visible,
}) => {
  const [data, setData] = useState<any>({ touched: false });
  const inputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateValue(e.target.value);
  };
  const inputTouch = () => {
    setData({ touched: true });
  };
  
  const options = schema.oneOf.map((item: {const: string, title: string}, index: number) => 
    <option key={index} value={item.const}>{item.title}</option>
  );  

  return (
    <Hidden xsUp={!visible}>
      <FormGroup>
        <Select
          hint={uischema.hint ? uischema.hint : ''}
          input={{
            value: value ? value : '',
            onChange: inputChange,
            onBlur: inputTouch,
          }}
          meta={{
            error: errors,
            touched: data.touched,
          }}
          label={label}
          
        >
          <option>Please select</option>
          {options}
          
        </Select>
      </FormGroup>
    </Hidden>
  );
};
