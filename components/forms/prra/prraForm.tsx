import { useState, useMemo } from 'react';
import { JsonForms } from '@jsonforms/react';
import schema from './schema.json';
import uischema from './uischema.json';
import { Button } from 'govuk-react';

import GdsCheckboxControl from '../../inputs/checkbox/gdsCheckboxControl';
import gdsCheckboxTester from '../../inputs/checkbox/gdsCheckboxTester';
import GdsFileControl from '../../inputs/file/gdsFileControl';
import gdsFileTester from '../../inputs/file/gdsFileTester';
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
import InsetGroupRenderer, { insetGroupTester } from '../../layouts/insetGroup';

const renderers = [
  // inputs
  { tester: gdsCheckboxTester, renderer: GdsCheckboxControl },
  { tester: gdsFileTester, renderer: GdsFileControl },
  { tester: gdsRadioTester, renderer: GdsRadioControl },
  { tester: gdsSelectTester, renderer: GdsSelectControl },
  { tester: gdsTextareaTester, renderer: GdsTextareaControl },
  { tester: gdsTextTester, renderer: GdsTextControl },

  // layouts
  { tester: formGroupTester, renderer: FormGroupRenderer },
  { tester: inputGroupTester, renderer: InputGroupRenderer },
  { tester: insetGroupTester, renderer: InsetGroupRenderer },
];

const initialData = {};

const PrraForm = () => {
    const [data, setData] = useState<any>(initialData);
    const [errors, setErrors] = useState<any>([]);
    const [touched, setTouched] = useState<boolean>(false);
    const stringifiedData = useMemo(() => JSON.stringify(data, null, 2), [data]);

    const save = () => {
      if (errors.length > 0) {
        setTouched(true);
      } else {
        alert('Save form');
      }
    }

    return (
      <>
        <JsonForms
          data={data}
          onChange={({ errors, data }) => {
            setData(data);
            setErrors(errors);
          }}
          renderers={renderers}
          schema={schema}
          uischema={uischema}
          validationMode={touched ? 'ValidateAndShow' : 'ValidateAndHide'}
        />
        <pre id='boundData'>{stringifiedData}</pre>
        <Button onClick={save}>
          Save
        </Button>
      </>
    )
  };

  export default PrraForm;