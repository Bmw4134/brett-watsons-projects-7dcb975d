import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './pages/Dashboard'; // ✅ matches the file location
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Dashboard />);
