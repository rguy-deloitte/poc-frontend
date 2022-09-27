import React from 'react';
import { JsonForms } from '@jsonforms/react';
import schema from './schema.json';
import uischema from './uischema.json';

import GdsRadioControl from '../../inputs/radio/gdsRadioControl';
import gdsRadioTester from '../../inputs/radio/gdsRadioTester';
import GdsSelectControl from '../../inputs/select/gdsSelectControl';
import gdsSelectTester from '../../inputs/select/gdsSelectTester';
import GdsTextareaControl from '../../inputs/textarea/gdsTextareaControl';
import gdsTextareaTester from '../../inputs/textarea/gdsTextareaTester';
import GdsTextControl from '../../inputs/text/gdsTextControl';
import gdsTextTester from '../../inputs/text/gdsTextTester';

import FormGroupRenderer, { formGroupTester } from '../../layouts/form';

const renderers = [
  // inputs
  { tester: gdsRadioTester, renderer: GdsRadioControl },
  { tester: gdsSelectTester, renderer: GdsSelectControl },
  { tester: gdsTextareaTester, renderer: GdsTextareaControl },
  { tester: gdsTextTester, renderer: GdsTextControl },

  //layouts
  { tester: formGroupTester, renderer: FormGroupRenderer },
];

export default class PrraForm extends React.Component<{}> {
  render(): React.ReactNode {
    return (
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={{}}
        renderers={renderers}
        validationMode='ValidateAndShow'
      />
    )
  }
};