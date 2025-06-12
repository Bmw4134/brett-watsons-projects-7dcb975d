import React from 'react';

function ResultViewer({ result }) {
  if (!result) return null;
  return (
    <div className="p-4 bg-gray-800 border border-gray-700 rounded mt-4">
      <h2 className="text-xl font-semibold">Result</h2>
      <pre className="mt-2 whitespace-pre-wrap">{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}

export default ResultViewer;
