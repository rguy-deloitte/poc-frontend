import type { NextApiRequest, NextApiResponse } from 'next'
import type { TeamTask } from '../../types/teamTask';

const data: TeamTask[] = [
  {
    taskName: 'PRRA/ASA decision',
    total: 20,
    taskOldestDate: '2022-09-09',
    taskType: 'PRRA/ASA decision',
    taskUrl: '/team-tasks/prra-asa-decision-task-list',
  },
  {
    taskName: 'Resignation request',
    total: 5,
    taskOldestDate: '2022-08-02',
    taskType: 'resignation request',
    taskUrl: '#',
  },
  {
    taskName: 'CFC proposed',
    total: 15,
    taskOldestDate: '2022-08-10',
    taskType: 'CFC proposed',
    taskUrl: '#',
  },
  {
    taskName: 'CFC active',
    total: 15,
    taskOldestDate: '2022-08-12',
    taskType: 'CFC active',
    taskUrl: '#',
  },
  {
    taskName: 'Checks',
    total: 16,
    taskOldestDate: '2022-08-15',
    taskType: 'checks',
    taskUrl: '#',
  },
  {
    taskName: 'Risk assessment',
    total: 16,
    taskOldestDate: '2022-08-20',
    taskType: 'risk assessment',
    taskUrl: '#',
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TeamTask[]>
) {
  res.status(200).json(data)
}
