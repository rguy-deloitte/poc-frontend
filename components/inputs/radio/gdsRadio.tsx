import React, { useState } from 'react';
import { Fieldset, FormGroup, HintText, Radio } from 'govuk-react';

interface GdsRadioProps {
  id?: string;
  value: string;
  updateValue: (newValue: string) => void;
  label: string;
  uischema: any;
  errors: any;
  path: any;
  schema: any;
}

export const GdsRadio: React.FC<GdsRadioProps> = ({
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
  
  const radios = schema.oneOf.map((item, index) =>
    <Radio {...(uischema.options.inline && {inline: true})} key={index} name={path} value={item.const}>{item.title}</Radio>
  );  

  return (
    <div id='#/properties/gdsRadio' className='gdsRadio'>
      <FormGroup>
        <Fieldset>
          <Fieldset.Legend>
            {label}
          </Fieldset.Legend>
          <HintText>{uischema.hint ? uischema.hint : ''}</HintText>
          {radios}
        </Fieldset>
      </FormGroup>
    </div>
  );
};
