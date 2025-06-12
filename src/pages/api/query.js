
export default async function handler(req, res) {
  const { prompt } = req.body;
  const apiKey = process.env.OPENAI_API_KEY;
  const completion = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt,
      max_tokens: 100
    })
  });
  const result = await completion.json();
  res.status(200).json({ result: result.choices[0].text });
}
