import React, { useState } from 'react';
import { FormGroup, TextArea } from 'govuk-react';

interface GdsTextareaProps {
  id?: string;
  value: string;
  updateValue: (newValue: string) => void;
  label: string;
  uischema: any;
  errors: any;
}

export const GdsTextarea: React.FC<GdsTextareaProps> = ({
  value,
  updateValue,
  label,
  uischema,
  errors,
}) => {
  const [data, setData] = useState<any>({ touched: false });
  const inputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateValue(e.target.value);
  };
  const inputTouch = () => {
    setData({ touched: true });
  };

  return (
    <div id='#/properties/gdsTextarea' className='gdsTextarea'>
      <FormGroup>
        <TextArea
          hint={uischema.hint ? uischema.hint : ''}
          input={{
            placeholder: uischema.placeholder ? uischema.placeholder : '',
            value: value ? value : '',
            onChange: inputChange,
            onBlur: inputTouch,
          }}
          meta={{
            error: errors,
            touched: data.touched,
          }}
        >
          {label}
        </TextArea>
      </FormGroup>
    </div>
  );
};
