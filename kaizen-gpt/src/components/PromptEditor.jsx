import React from 'react';

function PromptEditor({ prompt, setPrompt, setResult }) {
  const handleRun = async () => {
    const res = await fetch('/api/infer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    setResult(data);
  };

  return (
    <div className="mb-6">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
        rows="5"
        placeholder="Enter your prompt..."
      />
      <button
        onClick={handleRun}
        className="mt-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded"
      >
        Run Prompt
      </button>
    </div>
  );
}

export default PromptEditor;
