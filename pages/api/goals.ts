import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    { goal_text: "Deploy Genius Tier", status: "in progress" },
    { goal_text: "Integrate API routes", status: "pending" }
  ]);
}
