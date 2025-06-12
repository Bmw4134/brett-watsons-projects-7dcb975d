
import React, { useState } from 'react';

export default function SmartChat() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const sendQuery = async () => {
    const res = await fetch('/api/query', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    setResponse(data.result);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>🧠 Ask KaizenGPT</h2>
      <textarea rows="3" value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Ask something..." style={{ width: '100%' }} />
      <button onClick={sendQuery} style={{ marginTop: '0.5rem' }}>Ask</button>
      {response && <div style={{ marginTop: '1rem', background: '#f3f4f6', padding: '1rem' }}>{response}</div>}
    </div>
  );
}
