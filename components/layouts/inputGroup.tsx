import React from 'react';
import { rankWith, uiTypeIs } from '@jsonforms/core';
import { withJsonFormsLayoutProps } from '@jsonforms/react';
import { MaterialLayoutRenderer } from '@jsonforms/material-renderers';
import { Details, Fieldset, FormGroup } from 'govuk-react';

const InputGroupRenderer = (props:any) => {
  const { uischema, schema, path, visible, renderers } = props;

  const layoutProps = {
    elements: uischema.elements,
    schema: schema,
    path: path,
    direction: 'column',
    visible: visible,
    uischema: uischema,
    renderers: renderers,
  };

  return (
    <FormGroup>
      <Fieldset>
        {uischema.label &&
          <Fieldset.Legend>
            {uischema.label}
          </Fieldset.Legend>
        }
        <MaterialLayoutRenderer {...layoutProps} />
      </Fieldset>
      {uischema.label && uischema.help &&
        <Details summary={`${uischema.label} guidance`}><span dangerouslySetInnerHTML={{__html: uischema.help}}></span></Details>
      }
    </FormGroup>
  );
};

export default withJsonFormsLayoutProps(InputGroupRenderer);

export const inputGroupTester = rankWith(1000, uiTypeIs('InputGroup'));