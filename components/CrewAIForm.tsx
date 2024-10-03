import React, { useState, FormEvent } from 'react';
import { Button, Input, Card, CardHeader, CardContent } from '@/components/ui/card';

interface ApiResponse {
  result: string;
}

export default function CrewAIForm() {
  const [userInput, setUserInput] = useState('');
  const [apiResponse, setApiResponse] = useState('');
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/process_request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_input: userInput }),
      });
      const data: ApiResponse = await response.json();
      setApiResponse(data.result);
    } catch (error) {
      console.error('Error:', error);
      setApiResponse('An error occurred while processing your request.');
    }
    setLoading(false);
  };

  const handleFeedbackSubmit = async () => {
    try {
      await fetch('/api/submit_feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_input: userInput,
          response: apiResponse,
          feedback: parseInt(feedback),
        }),
      });
      alert('Feedback submitted successfully!');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('An error occurred while submitting feedback.');
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-10">
      <CardHeader>
        <h2 className="text-2xl font-bold">CrewAI Request Form</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="userInput" className="block text-sm font-medium text-gray-700">
              Enter your request:
            </label>
            <Input
              id="userInput"
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="mt-1 block w-full"
              required
            />
          </div>
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? 'Processing...' : 'Submit Request'}
          </Button>
        </form>

        {apiResponse && (
          <div className="mt-6">
            <h3 className="text-lg font-medium">API Response:</h3>
            <p className="mt-2 text-gray-600">{apiResponse}</p>

            <div className="mt-4">
              <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
                Rate the response (1-5):
              </label>
              <Input
                id="feedback"
                type="number"
                min="1"
                max="5"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="mt-1 block w-full"
              />
              <Button onClick={handleFeedbackSubmit} className="mt-2 w-full">
                Submit Feedback
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}