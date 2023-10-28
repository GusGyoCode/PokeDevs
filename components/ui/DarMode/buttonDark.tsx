import React from "react"
import { useTheme } from "next-themes"
import tw from "twin.macro"

const ButtonDark = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      onClick={() => {
        theme === "dark" ? setTheme("light") : setTheme("dark")
      }}
    >
      Toggle Mode
    </Button>
  )
}

const Button = tw.button`bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg absolute bottom-32`

export default ButtonDark
