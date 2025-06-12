import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Session 1", value: 3 },
  { name: "Session 2", value: 7 },
  { name: "Session 3", value: 5 },
  { name: "Session 4", value: 9 }
];

export default function KaizenPortfolio() {
  return (
    <main style={{ padding: "2rem", display: "grid", gap: "1.5rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
        I Built an AI That Builds Smarter AI
      </h1>

      <section style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "10px" }}>
        <h2>Live Intelligence Stack</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </section>

      <section style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "10px" }}>
        <h2>Autonomous Architecture</h2>
        <p>
          Featuring self-diffing code intelligence, prompt fingerprinting, and strict output
          validation. Built with modular agents and real-time telemetry.
        </p>
      </section>

      <section style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "10px" }}>
        <h2>Blog</h2>
        <ul>
          <li>How I Built a Self-Validating LLM Stack</li>
          <li>Lessons from Deploying Generative Agents</li>
          <li>Visualizing Evolving Intelligence</li>
        </ul>
      </section>
    </main>
  );
}
