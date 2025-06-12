export default async function handler(req, res) {
  const { prompt } = req.body;
  res.status(200).json({ reply: `Echo: ${prompt}` });
}
