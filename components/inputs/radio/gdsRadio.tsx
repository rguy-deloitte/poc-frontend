import React from 'react';
import { ErrorText, Fieldset, FormGroup, HintText, Radio } from 'govuk-react';
import { Hidden } from '@mui/material';

interface GdsRadioProps {
  errors: any;
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
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateValue(e.target.value);
  };
  
  const radios = schema.oneOf.map((item: {const: string, title: string}, index: number) =>
    <Radio checked={item.const.toString() === value} onChange={inputChange} {...(uischema.options.inline && {inline: true})} key={index} name={path} value={item.const}>{item.title}</Radio>
  );

  return (
    <Hidden xsUp={!visible}>
      <FormGroup error={errors}>
        <Fieldset>
          <Fieldset.Legend>
            {label}
          </Fieldset.Legend>
          {uischema.hint &&
            <HintText>{uischema.hint}</HintText>
          }
          {errors &&
            <ErrorText>This field {errors}</ErrorText>
          }
          {radios}
        </Fieldset>
      </FormGroup>
    </Hidden>
  );
};
