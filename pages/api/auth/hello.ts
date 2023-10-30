// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import path from "path"
import { promises as fs } from "fs"

interface Data {
  error?: string
  user?: any
  data?: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const jsonDirectory = path.join(process.cwd(), "json")
  const fileContents = await fs.readFile(jsonDirectory + "/users.json", "utf8")
  const { email, password } = req.body
  if (req.method === "POST") {
    res
      .status(200)
      .json({ user: { email, password }, data: JSON.parse(fileContents).data })
  } else {
    res.status(200).json({ error: `el metodo es ${req.method}` })
  }
}
