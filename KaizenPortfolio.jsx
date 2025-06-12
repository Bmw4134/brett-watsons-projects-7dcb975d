import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import { useState } from "react";

const data = [
  { name: "Session 1", value: 3 },
  { name: "Session 2", value: 7 },
  { name: "Session 3", value: 5 },
  { name: "Session 4", value: 9 }
];

const sections = {
  dashboard: (
    <section style={{ padding: "1rem" }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Live Intelligence Stack</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={2} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </section>
  ),
  architecture: (
    <section style={{ padding: "1rem" }}>
      <h2>Autonomous Architecture</h2>
      <p>
        Self-diffing logic, prompt fingerprinting, strict validation.
        Modular agents and real-time telemetry visualization.
      </p>
      <img src="/ai-architecture.png" alt="AI Architecture" style={{ width: "100%", marginTop: "1rem", borderRadius: "8px" }} />
    </section>
  ),
  blog: (
    <section style={{ padding: "1rem" }}>
      <h2>Blog</h2>
      <ul>
        <li>How I Built a Self-Validating LLM Stack</li>
        <li>Lessons from Deploying Generative Agents</li>
        <li>Visualizing Evolving Intelligence</li>
      </ul>
    </section>
  )
};

export default function KaizenPortfolio() {
  const [view, setView] = useState("dashboard");

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: 'sans-serif' }}>
      <aside style={{ width: "220px", background: "#1f2937", color: "white", padding: "1rem" }}>
        <h1 style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>KaizenGPT Interface</h1>
        <nav style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <button style={{ background: "none", border: "none", color: "white", textAlign: "left" }} onClick={() => setView("dashboard")}>🧠 Dashboard</button>
          <button style={{ background: "none", border: "none", color: "white", textAlign: "left" }} onClick={() => setView("architecture")}>🧬 Architecture</button>
          <button style={{ background: "none", border: "none", color: "white", textAlign: "left" }} onClick={() => setView("blog")}>📚 Blog</button>
        </nav>
      </aside>
      <main style={{ flex: 1, overflow: "auto", padding: "2rem" }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          {sections[view]}
        </motion.div>
      </main>
    </div>
  );
}
