import React from 'react';
import { or, rankWith, uiTypeIs } from '@jsonforms/core';
import { withJsonFormsLayoutProps } from '@jsonforms/react';
import { MaterialLayoutRenderer } from '@jsonforms/material-renderers';
import { H2, H3 } from 'govuk-react';

const FormGroupRenderer = (props:any) => {
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
    <>
      {uischema.label && uischema.type === 'Group' &&
        <H2>{uischema.label}</H2>
      }
      {uischema.label && uischema.type !== 'Group' &&
        <H3>{uischema.label}</H3>
      }
      <MaterialLayoutRenderer {...layoutProps} />
    </>
  );
};

export default withJsonFormsLayoutProps(FormGroupRenderer);

export const formGroupTester = rankWith(1000, or(uiTypeIs('SubGroup'), uiTypeIs('Group')));