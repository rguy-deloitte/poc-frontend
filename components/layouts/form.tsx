import React from 'react';
import { rankWith, uiTypeIs } from '@jsonforms/core';
import { withJsonFormsLayoutProps } from '@jsonforms/react';
import { MaterialLayoutRenderer } from '@jsonforms/material-renderers';

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
    <MaterialLayoutRenderer {...layoutProps} />
  );
};

export default withJsonFormsLayoutProps(FormGroupRenderer);

export const formGroupTester = rankWith(1000, uiTypeIs('Group'));