import React, { useState } from 'react';
import { FormGroup, Select } from 'govuk-react';

interface GdsSelectProps {
  id?: string;
  value: string;
  updateValue: (newValue: string) => void;
  label: string;
  uischema: any;
  errors: any;
  path: any;
  schema: any;
}

export const GdsSelect: React.FC<GdsSelectProps> = ({
  value,
  updateValue,
  label,
  uischema,
  errors,
  path,
  schema,
}) => {
  const [data, setData] = useState<any>({ touched: false });
  const inputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateValue(e.target.value);
  };
  const inputTouch = () => {
    setData({ touched: true });
  };
  
  const options = schema.oneOf.map((item, index) => 
    <option key={index} value={item.const}>{item.title}</option>
  );  

  return (
    <div id='#/properties/gdsSelect' className='gdsSelect'>
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
    </div>
  );
};
