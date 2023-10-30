import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import tw from "twin.macro"
import styled from "styled-components"
import FormLogin from "./component/Form"
import useFetch from "http-react"
import { useEffect, useState } from "react"
import { useDispatch, useStorage } from "atomic-state"
import { Token, User } from "./component/state"
import Alert from "../ui/Alert"
import { useRouter } from "next/router"
import PageLoading from "../ui/LoadingPage"
import Progress from "../ui/Pogress"

export default function LoginComponent() {
  const [info, setInfo] = useState({ email: "", password: "" })
  const [error, setError] = useState(null)
  const [loadingPage, setLoadingPage] = useState(true)
  const setUser = useDispatch(User)
  const setToken = useDispatch(Token)
  const { push } = useRouter()
  const { data, loading, reFetch, mutate } = useFetch("/api/auth/login", {
    auto: false,
    method: "POST",
    body: info,
    onResolve(data) {
      setUser(data.user)
      setToken(data.user.token)
      mutate(null)
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      push("/dashboard")
    },
    onError(err: any) {
      const { error } = err
      setError(error)
    },
  })

  const { Token: $Token } = useStorage()
  useEffect(() => {
    if ($Token as boolean) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      push("/dashboard")
    }
    setTimeout(() => {
      setLoadingPage(false)
    }, 1500)
  }, [$Token])

  return (
    <>
      <Head>
        <title>PokeDevs | Inicio de sesion</title>
      </Head>
      {loadingPage ? (
        <PageLoading />
      ) : (
        <Content>
          <Main>
            <Article>
              <Image
                src="/img/banner.jpeg"
                width={224}
                height={124}
                className="w-full h-96 md:h-full"
                alt="Image-sidebar"
              />
              <ContentBanner>
                <ContetBannerText>
                  <BannerText>
                    Proyecto para la Busqueda y listado de Pokemons
                    proporcionado por medio de una API
                  </BannerText>
                </ContetBannerText>
                <BannerFooter>
                  <ContentBannerFooter>
                    <BannerFooterText>
                      Documentacion y API por PokeAPI
                    </BannerFooterText>
                    <Link href={"https://pokeapi.co/"} legacyBehavior>
                      <BannerFooterLink>Visitala</BannerFooterLink>
                    </Link>
                  </ContentBannerFooter>
                </BannerFooter>
              </ContentBanner>
            </Article>
            <Article $isHidden={true}>
              <ContentLogo>
                <Image
                  src="/img/logo.png"
                  width={248}
                  height={247}
                  className="w-32 md:w-46 lg:w-56"
                  alt="Logo"
                />
                <TextLogo>Conectate mas...!!</TextLogo>
                <FormLogin
                  data={(e: any) => {
                    setInfo(e)
                    // eslint-disable-next-line @typescript-eslint/no-floating-promises
                    reFetch()
                  }}
                />
              </ContentLogo>
            </Article>
          </Main>
        </Content>
      )}
      {loading ? (
        <Alert>
          <Progress class="w-16 h-16 animate-spin" />
        </Alert>
      ) : // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      error ? (
        <Alert>
          <Alert.Container
            text={error}
            click={() => {
              setError(null)
            }}
          />
        </Alert>
      ) : (
        Boolean(data) && (
          <Alert>
            <Alert.Container status={true} />
          </Alert>
        )
      )}
    </>
  )
}

interface ValidateProps {
  $isHidden?: boolean
  $isDashboard?: boolean
}
const Content = tw.div`w-full lg:h-screen flex justify-center lg:items-center py-4 lg:py-4`
const Main = tw.main`w-10/12 rounded-2xl lg:flex justify-center items-start h-5/6 overflow-hidden dark:border border-gray-border`
const Article = styled.article<ValidateProps>(({ $isHidden }) => [
  $isHidden === true && tw`px-2`,
  tw`w-full lg:w-1/2 lg:h-full relative flex justify-center flex-wrap bg-gray-100 dark:bg-transparent`,
])
const ContentBanner = tw.div`w-full h-full top-0 left-0 absolute bg-black/50 flex justify-center text-white`
const ContetBannerText = tw.div`w-8/12 mt-8 lg:mt-24`
const BannerText = tw.h1`text-center text-xl sm:text-3xl lg:text-4xl 2xl:text-5xl`
const BannerFooter = tw.div`w-full absolute bottom-2 left-0 flex justify-center`
const ContentBannerFooter = tw.div`w-10/12 bg-[#9B9B9B]/50 rounded-2xl p-3 flex justify-between items-center`
const BannerFooterText = tw.span`sm:text-lg`
const BannerFooterLink = tw.a`w-32 bg-blue-button py-2 px-4 rounded-xl flex justify-center hover:bg-blue-500 transition-all duration-300 dark:bg-blue-button hover:dark:bg-blue-800`
const ContentLogo = tw.div`w-full flex justify-center flex-wrap p-4 lg:p-16`
const TextLogo = tw.h2`w-full text-center lg:text-3xl`
