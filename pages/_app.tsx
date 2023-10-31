import "@/styles/globals.css"
import { ThemeProvider } from "next-themes"
import type { AppProps } from "next/app"
import { AtomicState } from "atomic-state"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="ligth">
      <AtomicState>
        <Component {...pageProps} />
      </AtomicState>
    </ThemeProvider>
  )
}
