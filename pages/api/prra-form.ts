import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // form data in req.body

  res.status(200).json({saved: true});
}
