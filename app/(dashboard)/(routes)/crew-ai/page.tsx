import type { NextPage } from 'next';
import CrewAIForm from '@/components/CrewAIForm';

const CrewaiPage: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">CrewAI Integration</h1>
      <CrewAIForm />
    </div>
  );
}

export default CrewaiPage;