import type { NextApiRequest, NextApiResponse } from 'next';

interface FeedbackBody {
  user_input: string;
  response: string;
  feedback: number;
}

interface FeedbackResponse {
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FeedbackResponse>
) {
  if (req.method === 'POST') {
    const { user_input, response, feedback } = req.body as FeedbackBody;
    try {
      const apiResponse = await fetch('http://localhost:5000/submit_feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_input, response, feedback }),
      });
      const data: FeedbackResponse = await apiResponse.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: 'An error occurred while submitting feedback.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
