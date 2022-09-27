import { and, isStringControl, optionIs, rankWith } from '@jsonforms/core';

export default rankWith(
  3, //increase rank as needed
  and(isStringControl, optionIs('multi', true))
);
