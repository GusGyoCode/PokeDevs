import Head from "next/head"
import HeaderComponent from "./components/Header"
import MainComponent from "./components/Main"
import { useState, useEffect } from "react"
import { storage } from "atomic-state"
import { useRouter } from "next/router"
import PageLoading from "../LoadingPage"

export default function Layout({
  title,
  children,
}: {
  title: string
  children: any
}) {
  const [loadingPage, setLoadingPage] = useState(true)
  const { push } = useRouter()
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!storage.get("Token")) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      push("/login")
    }
    setTimeout(() => {
      setLoadingPage(false)
    }, 1500)
  }, [])
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {loadingPage ? (
        <PageLoading />
      ) : (
        <>
          <HeaderComponent />
          <MainComponent>{children}</MainComponent>
        </>
      )}
    </>
  )
}
