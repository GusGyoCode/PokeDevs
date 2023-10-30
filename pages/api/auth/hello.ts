// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"

interface Data {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === "POST") {
    res.status(200).json({ name: "Paso a Post directo" })
  } else {
    res.status(200).json({ name: `el metodo es ${req.method}` })
  }
}
