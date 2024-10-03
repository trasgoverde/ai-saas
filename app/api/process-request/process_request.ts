import type { NextApiRequest, NextApiResponse } from 'next';

interface RequestBody {
  user_input: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method === 'POST') {
    const { user_input } = req.body as RequestBody;
    try {
      const response = await fetch('http://localhost:5000/process_request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_input }),
      });
      const data: ApiResponse = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ result: 'An error occurred while processing your request.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}