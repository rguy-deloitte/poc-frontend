import { and, isOneOfControl, isStringControl, rankWith } from '@jsonforms/core';

export default rankWith(
  6, //increase rank as needed
  and(isStringControl, isOneOfControl)
);
