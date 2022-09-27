import React, { useState } from 'react';
import { Checkbox, Fieldset, FormGroup, HintText } from 'govuk-react';

interface GdsCheckboxProps {
  id?: string;
  value: string;
  updateValue: (newValue: string) => void;
  label: string;
  uischema: any;
  errors: any;
  path: any;
  schema: any;
}

export const GdsCheckbox: React.FC<GdsCheckboxProps> = ({
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
  
  const checkboxes = schema.anyOf.map((item: {const: string, title: string}, index: number) =>
    <Checkbox key={index} name={path} value={item.const}>{item.title}</Checkbox>
  );  

  return (
    <div id='#/properties/gdsCheckbox' className='gdsCheckbox'>
      <FormGroup>
        <Fieldset>
          <Fieldset.Legend>
            {label}
          </Fieldset.Legend>
          <HintText>{uischema.hint ? uischema.hint : ''}</HintText>
          {checkboxes}
        </Fieldset>
      </FormGroup>
    </div>
  );
};
