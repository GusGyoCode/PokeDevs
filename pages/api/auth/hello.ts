// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"

interface Data {
  error?: string
  user?: any
  data?: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { email, password } = req.body
  if (req.method === "POST") {
    res.status(200).json({ user: { email, password } })
  } else {
    res.status(200).json({ error: `el metodo es ${req.method}` })
  }
}
