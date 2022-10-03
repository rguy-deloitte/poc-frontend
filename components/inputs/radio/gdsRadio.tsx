import React, { useState } from 'react';
import { Fieldset, FormGroup, HintText, Radio } from 'govuk-react';
import { Hidden } from '@mui/material';

interface GdsRadioProps {
  errors: any;
  id?: string;
  label: string;
  path: any;
  schema: any;
  uischema: any;
  updateValue: (newValue: string) => void;
  value: string;
  visible: boolean;
}

export const GdsRadio: React.FC<GdsRadioProps> = ({
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
    updateValue(e.target.value);
  };
  const inputTouch = () => {
    setData({ touched: true });
  };
  
  const radios = schema.oneOf.map((item: {const: string, title: string}, index: number) =>
    <Radio onChange={inputChange} {...(uischema.options.inline && {inline: true})} key={index} name={path} value={item.const}>{item.title}</Radio>
  );

  return (
    <Hidden xsUp={!visible}>
      <FormGroup>
        <Fieldset>
          <Fieldset.Legend>
            {label}
          </Fieldset.Legend>
          {uischema.hint &&
            <HintText>{uischema.hint}</HintText>
          }
          {radios}
        </Fieldset>
      </FormGroup>
    </Hidden>
  );
};
