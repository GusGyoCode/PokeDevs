import PageLoading from "@/components/ui/LoadingPage"
import { storage } from "atomic-state"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Home() {
  const { push } = useRouter()
  useEffect(() => {
    if (storage.get("Token") as boolean) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      push("/dashboard")
    } else {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      push("/login")
    }
  }, [])
  return (
    <>
      <Head>
        <title>PokeDevs | Redirreccion..</title>
      </Head>
      <PageLoading />
    </>
  )
}
