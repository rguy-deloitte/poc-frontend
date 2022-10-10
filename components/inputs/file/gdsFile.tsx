import React from 'react';
import { FormGroup, FileUpload } from 'govuk-react';
import { Hidden } from '@mui/material';

interface GdsFileProps {
  errors: any;
  uischema: any;
  updateValue: (newValue: string) => void;
  visible: boolean;
}

export const GdsFile: React.FC<GdsFileProps> = ({
  errors,
  uischema,
  updateValue,
  visible,
}) => {
  const inputChange = (e: React.ChangeEvent<any>) => {
    updateValue((e.target).files[0].name);
  };

  return (
    <Hidden xsUp={!visible}>
      <FormGroup>
        <FileUpload
          hint={uischema.hint ? uischema.hint : ''}
          meta={{
            error: errors ? `This field ${errors}` : undefined,
            touched: true,
          }}
          onChange={inputChange}
        >
        </FileUpload>
      </FormGroup>
    </Hidden>
  );
};
