import React from 'react';

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

export default function Dashboard() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>KaizenGPT Intelligence Dashboard</h1>
      <p style={{ marginBottom: '1rem' }}>Dynamic visual intelligence stack powered by your live artifacts.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
        {images.map(img => (
          <div key={img} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '0.5rem', background: 'white' }}>
            <img src={`/assets/${img}`} alt={img} style={{ width: '100%', borderRadius: '6px' }} />
            <p style={{ fontSize: '0.9rem', textAlign: 'center' }}>{img.replace(/_/g, ' ').replace('.png','')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
