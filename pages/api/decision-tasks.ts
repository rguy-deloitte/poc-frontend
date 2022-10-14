import type { NextApiRequest, NextApiResponse } from 'next'
import type { DecisionTask } from '../../types/decisionTask';

const data: DecisionTask[] = [
  {
    applicationId: 424724,
    provider: 'Sunshine Nursery',
    type: 'Childcare on non-domestic premises',
    register: ['EYR'],
    taskType: 'PRRA',
    startDate: '2022-08-02',
    dueDate: '2022-09-10',
    started: false,
  },
  {
    applicationId: 700555,
    provider: 'Bear House',
    type: 'Childcare on non-domestic premises',
    register: ['EYR', 'CCR', 'VCR'],
    taskType: 'PRRA',
    startDate: '2022-08-24',
    dueDate: '2022-09-11',
    started: false,
  },
  {
    applicationId: 309656,
    provider: 'Twinkle Twinkle Little Star House',
    type: 'Childcare on non-domestic premises',
    register: ['CCR'],
    taskType: 'ASA',
    startDate: '2022-08-30',
    dueDate: '2022-10-22',
    started: false,
  },
  {
    applicationId: 885187,
    provider: 'Sarah Doe Edwards',
    type: 'Childminder',
    register: ['CCR'],
    taskType: 'ASA',
    startDate: '2022-08-30',
    dueDate: '2022-10-23',
    started: false,
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DecisionTask[]>,
) {
  res.status(200).json(data);
}
