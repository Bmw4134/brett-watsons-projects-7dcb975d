import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState(null);

  const runPrompt = async () => {
    const res = await fetch('/api/infer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    setResult(data);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <Head><title>Kaizen GPT</title></Head>
      <h1 className="text-3xl font-bold mb-4">Kaizen GPT - Genius Tier</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
        rows={4}
        placeholder="Enter your prompt..."
      />
      <button onClick={runPrompt} className="mt-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded">
        Run Prompt
      </button>
      {result && (
        <div className="mt-4 p-4 bg-gray-800 border border-gray-700 rounded">
          <h2 className="text-xl font-semibold">Result</h2>
          <pre className="mt-2 whitespace-pre-wrap">{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
