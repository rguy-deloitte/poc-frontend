import { and, isOneOfControl, optionIs, rankWith } from '@jsonforms/core';

export default rankWith(
  21, //increase rank as needed
  and(isOneOfControl, optionIs('format', 'radio'))
);
