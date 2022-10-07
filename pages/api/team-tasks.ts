// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { TeamTask } from '../../types/teamTask';

const data: TeamTask[] = [
  {
    taskName: 'PRRA/ASA decision',
    total: 20,
    taskOldestDate: new Date('2022-09-09'),
  },
  {
    taskName: 'Resignation request',
    total: 5,
    taskOldestDate: new Date('2022-08-02'),
  },
  {
    taskName: 'CFC proposed',
    total: 15,
    taskOldestDate: new Date('2022-08-10'),
  },
  {
    taskName: 'CFC active',
    total: 15,
    taskOldestDate: new Date('2022-08-12'),
  },
  {
    taskName: 'Checks',
    total: 16,
    taskOldestDate: new Date('2022-08-15'),
  },
  {
    taskName: 'Risk assessment',
    total: 16,
    taskOldestDate: new Date('2022-08-20'),
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TeamTask[]>
) {
  res.status(200).json(data)
}
