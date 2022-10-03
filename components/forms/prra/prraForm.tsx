import { useState, useMemo } from 'react';
import { JsonForms } from '@jsonforms/react';
import schema from './schema.json';
import uischema from './uischema.json';

import GdsCheckboxControl from '../../inputs/checkbox/gdsCheckboxControl';
import gdsCheckboxTester from '../../inputs/checkbox/gdsCheckboxTester';
import GdsRadioControl from '../../inputs/radio/gdsRadioControl';
import gdsRadioTester from '../../inputs/radio/gdsRadioTester';
import GdsSelectControl from '../../inputs/select/gdsSelectControl';
import gdsSelectTester from '../../inputs/select/gdsSelectTester';
import GdsTextareaControl from '../../inputs/textarea/gdsTextareaControl';
import gdsTextareaTester from '../../inputs/textarea/gdsTextareaTester';
import GdsTextControl from '../../inputs/text/gdsTextControl';
import gdsTextTester from '../../inputs/text/gdsTextTester';

import FormGroupRenderer, { formGroupTester } from '../../layouts/formGroup';
import InputGroupRenderer, { inputGroupTester } from '../../layouts/inputGroup';

const renderers = [
  // inputs
  { tester: gdsCheckboxTester, renderer: GdsCheckboxControl },
  { tester: gdsRadioTester, renderer: GdsRadioControl },
  { tester: gdsSelectTester, renderer: GdsSelectControl },
  { tester: gdsTextareaTester, renderer: GdsTextareaControl },
  { tester: gdsTextTester, renderer: GdsTextControl },

  // layouts
  { tester: formGroupTester, renderer: FormGroupRenderer },
  { tester: inputGroupTester, renderer: InputGroupRenderer },
];

const initialData = {};

const PrraForm = () => {
    const [data, setData] = useState<any>(initialData);
    const stringifiedData = useMemo(() => JSON.stringify(data, null, 2), [data]);

    return (
      <>
      <JsonForms
        data={data}
        onChange={({ errors, data }) => {
          setData(data);
        }}
        renderers={renderers}
        schema={schema}
        uischema={uischema}
        validationMode='ValidateAndShow'
      />
      <pre id='boundData'>{stringifiedData}</pre>
      </>
    )
  };

  export default PrraForm;