import React from 'react';
import { rankWith, uiTypeIs } from '@jsonforms/core';
import { withJsonFormsLayoutProps } from '@jsonforms/react';
import { MaterialLayoutRenderer } from '@jsonforms/material-renderers';
import { InsetText, SectionBreak } from 'govuk-react';
import { Hidden } from '@mui/material';

const InsetGroupRenderer = (props:any) => {
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
    <Hidden xsUp={!visible}>
      <InsetText>
        <MaterialLayoutRenderer {...layoutProps} />
      </InsetText>
      <SectionBreak level="MEDIUM"></SectionBreak>
    </Hidden>
  );
};

export default withJsonFormsLayoutProps(InsetGroupRenderer);

export const insetGroupTester = rankWith(1000, uiTypeIs('InsetGroup'));