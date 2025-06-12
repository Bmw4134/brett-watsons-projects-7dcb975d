
import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const images = [
  'architecture_diagram.png',
  'replit_conversion_flowchart.png',
  'zero_touch_tools_comparison.png',
  'enrollment_tools_bubble_chart.png',
  'framework_support_heatmap.png',
  'gantt_chart.png',
  'app_dev_tools_comparison.png',
  'iphone_app_dev_flowchart.png'
];

const dynamicData = [
  { session: 'Alpha', telemetry: 4 },
  { session: 'Beta', telemetry: 7 },
  { session: 'Gamma', telemetry: 5 },
  { session: 'Delta', telemetry: 9 },
  { session: 'Omega', telemetry: 13 }
];

export default function Dashboard() {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setMetrics(dynamicData);
    }, 500);
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#f9fafb' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>KaizenGPT Intelligence Dashboard</h1>
        <p style={{ fontSize: '1.2rem', color: '#374151' }}>
          Architecting Self-Evolving AI Systems
        </p>
        <p style={{ fontSize: '0.95rem', color: '#6b7280', marginTop: '0.5rem' }}>
          Built, deployed, and monitored generative and agent-based AI from the ground up. This dashboard reflects real artifacts from shipped architectures.
        </p>
      </header>

      <section style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '1rem 1.5rem', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
          <h3>🧠 Built 5+ AI Systems</h3>
        </div>
        <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '1rem 1.5rem', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
          <h3>📈 Prompt Telemetry</h3>
        </div>
        <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '1rem 1.5rem', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
          <h3>📊 Realtime Visual Stack</h3>
        </div>
        <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '1rem 1.5rem', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
          <h3>🌐 Publicly Deployed</h3>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.5rem', color: '#1f2937' }}>Live Session Telemetry</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={metrics} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <Line type="monotone" dataKey="telemetry" stroke="#6366f1" strokeWidth={2} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="session" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {images.map(img => (
          <div key={img} style={{ border: '1px solid #e5e7eb', borderRadius: '10px', padding: '0.75rem', background: 'white', transition: 'transform 0.2s ease' }}>
            <img src={`/assets/${img}`} alt={img} style={{ width: '100%', borderRadius: '8px' }} />
            <p style={{ fontSize: '0.95rem', textAlign: 'center', marginTop: '0.5rem' }}>{img.replace(/_/g, ' ').replace('.png','')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
