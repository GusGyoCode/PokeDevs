import Image from "next/image"
import Link from "next/link"
import { BiSolidUser } from "react-icons/bi"
import { FaLock } from "react-icons/fa"
import { AiFillEye } from "react-icons/ai"
import Head from "next/head"
import tw from "twin.macro"
import styled from "styled-components"

export default function LoginComponent() {
  return (
    <>
      <Head>
        <title>PokeDevs | Inicio de sesion</title>
      </Head>
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
                  Proyecto para la Busqueda y listado de Pokemons proporcionado
                  por medio de una API
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
            </ContentLogo>
            <Form
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <div className="w-full lg:w-10/12 flex gap-2 flex-col">
                <Label>Usuario</Label>
                <ContentInput>
                  <BiSolidUser className="text-xl mr-2" />
                  <Input
                    type="text"
                    placeholder="Usuario@ejemplo.com"
                    name="email"
                  />
                </ContentInput>
              </div>
              <div className="w-full lg:w-10/12 flex gap-2 flex-col">
                <Label>Contraseña</Label>
                <ContentInput>
                  <FaLock className="text-xl mr-2" />
                  <Input
                    type="password"
                    placeholder="**********"
                    name="password"
                  />
                  <AiFillEye className="text-xl ml-2 cursor-pointer" />
                </ContentInput>
              </div>
              <ButtonForm>Iniciar Sesion</ButtonForm>
            </Form>
          </Article>
        </Main>
      </Content>
    </>
  )
}

interface ValidateProps {
  $isHidden?: boolean
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
const Form = tw.form`lg:w-10/12 flex flex-col gap-4 items-center w-full`
const Label = tw.label`text-sm lg:text-lg`
export const ContentInput = styled.div<ValidateProps>(({ $isHidden }) => [
  $isHidden === true ? tw`hidden sm:flex` : tw`flex sm:hidden`,
  tw`items-center bg-white dark:bg-[#0A0A0A] rounded-xl p-2 border dark:border-none border-gray-300`,
])
export const Input = tw.input`lg:text-lg w-10/12 focus:outline-none bg-transparent`
const ButtonForm = tw.button`w-full lg:w-10/12 bg-blue-button py-2 px-4 rounded-xl flex justify-center transition-all duration-300 text-white text-xl hover:dark:bg-blue-800 mb-10`
