import Head from "next/head"
import HeaderComponent from "./components/Header"
import MainComponent from "./components/Main"

export default function Layout({
  title,
  children,
}: {
  title: string
  children: any
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <HeaderComponent />
      <MainComponent>{children}</MainComponent>
    </>
  )
}
