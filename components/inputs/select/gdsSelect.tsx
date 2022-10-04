import React, { useState } from 'react';
import { FormGroup, Select } from 'govuk-react';
import { Hidden } from '@mui/material';

interface GdsSelectProps {
  errors: any;
  label: string;
  schema: any;
  uischema: any;
  updateValue: (newValue: string) => void;
  value: string;
  visible: boolean;
}

export const GdsSelect: React.FC<GdsSelectProps> = ({
  errors,
  label,
  schema,
  uischema,
  updateValue,
  value,
  visible,
}) => {
  const inputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateValue(e.target.value);
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
            onChange: inputChange,
            value: value ? value : '',
          }}
          label={label}
          meta={{
            error: errors ? `This field ${errors}` : undefined,
            touched: true,
          }}
        >
          <option value="">Please select</option>
          {options}
        </Select>
      </FormGroup>
    </Hidden>
  );
};
