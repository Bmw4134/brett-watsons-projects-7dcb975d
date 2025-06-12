import React, { useState } from 'react';
import PromptEditor from './components/PromptEditor';
import ResultViewer from './components/ResultViewer';
import GoalTracker from './components/GoalTracker';

function App() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Kaizen GPT - Genius Tier</h1>
      <PromptEditor prompt={prompt} setPrompt={setPrompt} setResult={setResult} />
      <ResultViewer result={result} />
      <GoalTracker />
    </div>
  );
}

export default App;
