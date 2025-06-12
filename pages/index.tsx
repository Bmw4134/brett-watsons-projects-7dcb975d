import { useState } from "react"
import { motion } from "framer-motion"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [prompt, setPrompt] = useState("")
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function runPrompt() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/infer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
      })
      const data = await res.json()
      setResult(data)
    } catch (err) {
      setError("Failed to connect to API")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-6 flex flex-col items-center justify-center">
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Kaizen GPT - <span className="text-purple-400">Genius Tier</span>
      </motion.h1>

      <div className="w-full max-w-xl space-y-4">
        <Textarea
          rows={4}
          placeholder="Type your prompt..."
          className="text-black"
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
        />

        <Button onClick={runPrompt} disabled={loading} className="w-full">
          {loading ? "Thinking..." : "Run Prompt"}
        </Button>

        {error && (
          <div className="bg-red-500 text-white p-2 rounded">{error}</div>
        )}

        {result && (
          <motion.div
            className="bg-white text-black p-4 rounded-xl shadow-lg whitespace-pre-wrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <strong>Result:</strong>
            <pre className="mt-2">{JSON.stringify(result, null, 2)}</pre>
          </motion.div>
        )}
      </div>
    </div>
  )
}
