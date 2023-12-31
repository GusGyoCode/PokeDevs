import type { NextApiRequest, NextApiResponse } from "next"
import path from "path"
import { promises as fs } from "fs"
import jwt from "jsonwebtoken"

interface Data {
  user?: any
  error?: string
}

export default async function handlerLogin(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.setHeader("Access-Control-Allow-Credentials", "true")
  res.setHeader("Access-Control-Allow-Origin", "*")
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  )
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  )
  const { email, password } = req.body
  if (req.method === "POST") {
    if (email !== "" && password !== "") {
      const jsonDirectory = path.join(process.cwd(), "JSON")
      const fileContents = await fs.readFile(
        jsonDirectory + "/users.json",
        "utf8",
      )
      const user = JSON.parse(fileContents).data.filter(
        (e: any) => e.email === email,
      )
      if (user.length > 0) {
        if (user[0].password === password) {
          const token = jwt.sign(
            {
              exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
              name: user[0].name,
              lastName: user[0].lastName,
              email: user[0].email,
            },
            "secret",
          )
          const newUser = {
            name: user[0].name,
            lastName: user[0].lastName,
            email: user[0].email,
            token,
          }
          res.status(200).json({ user: newUser })
        } else {
          res.status(403).json({ error: "Contraseña invalida" })
        }
      } else {
        res.status(400).json({ error: "Usuario no encontrado" })
      }
    } else {
      res
        .status(400)
        .json({ error: "No hay datos para Usuario o para Password" })
    }
  } else {
    res.status(500).json({ error: `El metodo ${req.method} es incorrecto` })
  }
}
