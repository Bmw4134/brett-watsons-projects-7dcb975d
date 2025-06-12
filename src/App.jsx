import React from "react";
import Dashboard from "./pages/Dashboard";
import SmartChat from "./components/SmartChat";

export default function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Dashboard />
      <SmartChat />
    </div>
  );
}
