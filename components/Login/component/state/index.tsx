import { atom } from "atomic-state"

export const User = atom({
  key: "User",
  default: null,
  persist: true,
})

export const Token = atom({
  key: "Token",
  default: null,
  persist: true,
})
