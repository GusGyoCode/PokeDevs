import Image from "next/image"
import Link from "next/link"
import { BiSolidUser } from "react-icons/bi"
import { FaLock } from "react-icons/fa"
import { AiFillEye } from "react-icons/ai"
import Head from "next/head"
import tw from "twin.macro"

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
              src="/img/banner.jpg"
              width={500}
              height={500}
              className="w-full h-full"
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
          <Article>
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
                <Label className="">Usuario</Label>
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
    // <div className="w-full md:h-screen flex lg:items-center justify-center my-4">
    //   <section className="w-11/12 md:w-8/12 lg:w-10/12 rounded-md overflow-hidden border border-gray-500 shadow-xl lg:h-5/6 flex flex-wrap">
    //     <div className="w-full lg:w-1/2 lg:h-full overflow-hidden relative rounded-2xl">
    //       <Image
    //         src="/img/banner.jpg"
    //         width={500}
    //         height={500}
    //         className="w-full h-full"
    //         alt="Image-sidebar"
    //       />
    //       <article className="w-full h-full top-0 left-0 absolute bg-black/50 flex justify-center text-white">
    //         <div className="w-8/12 mt-16 lg:mt-24">
    //           <h1 className="text-center text-2xl sm:text-4xl 2xl:text-5xl ">
    //             Proyecto para la Busqueda y listado de Pokemons proporcionado
    //             por medio de una API
    //           </h1>
    //         </div>
    //         <div className="w-full absolute bottom-2 left-0 flex justify-center">
    //           <div className="w-10/12 bg-gray-500 bg-opacity-60 rounded-2xl p-3 flex justify-between items-center">
    //             <h3>Documentacion y API por PokeAPI</h3>
    //             <Link href={"https://pokeapi.co/"} legacyBehavior={true}>
    //               <a className="w-32 bg-blue-600 py-2 px-4 rounded-xl flex justify-center hover:bg-blue-500 transition-all duration-300 dark:bg-blue-dark-button hover:dark:bg-blue-800">
    //                 Visitala
    //               </a>
    //             </Link>
    //           </div>
    //         </div>
    //       </article>
    //     </div>
    //     <form className="p-4 flex flex-col items-center gap-4 w-full lg:w-1/2">
    //       <Image
    //         src="/img/icono.png"
    //         width={500}
    //         height={500}
    //         className="w-8/12 h-20"
    //         alt="icono"
    //       />
    //       <h2>Conoce mas..!</h2>
    //       <div className="w-full flex flex-col gap-2">
    //         <label className="text-sm lg:text-lg">Usuario</label>
    //         <div className="w-full bg-[#0A0A0A] flex items-center p-4 rounded-md">
    //           <BiSolidUser className="text-xl mr-2" />
    //           <input
    //             type="text"
    //             className="lg:text-lg w-10/12 focus:outline-none bg-transparent"
    //             placeholder="Usuario@ejemplo.com"
    //           />
    //         </div>
    //       </div>
    //       <div className="w-full flex flex-col gap-2">
    //         <label className="text-sm lg:text-lg">Contraseña</label>
    //         <div className="w-full bg-[#0A0A0A] flex items-center p-4 rounded-md">
    //           <FaLock className="text-xl mr-2" />
    //           <input
    //             type="password"
    //             className="lg:text-lg w-10/12 focus:outline-none bg-transparent"
    //             placeholder="********"
    //           />
    //           <AiFillEye className="text-xl ml-2" />
    //         </div>
    //       </div>
    //     </form>
    //   </section>
    // </div>
  )
}

const Content = tw.div`w-full lg:h-screen flex justify-center lg:items-center py-4 lg:py-4`
const Main = tw.main`w-10/12 rounded-2xl lg:flex justify-center items-start h-5/6`
const Article = tw.article`w-full lg:w-1/2 lg:h-full overflow-hidden relative rounded-2xl flex justify-center flex-wrap`
const ContentBanner = tw.div`w-full h-full top-0 left-0 absolute bg-black/50 flex justify-center text-white`
const ContetBannerText = tw.div`w-8/12 mt-8 lg:mt-24`
const BannerText = tw.h1`text-center text-xl sm:text-3xl lg:text-4xl 2xl:text-5xl`
const BannerFooter = tw.div`w-full absolute bottom-2 left-0 flex justify-center`
const ContentBannerFooter = tw.div`w-10/12 bg-[#9B9B9B]/50 rounded-2xl p-3 flex justify-between items-center`
const BannerFooterText = tw.span`sm:text-lg`
const BannerFooterLink = tw.a`w-32 bg-blue-button py-2 px-4 rounded-xl flex justify-center hover:bg-blue-500 transition-all duration-300 dark:bg-blue-button hover:dark:bg-blue-800`
const ContentLogo = tw.div`w-full flex justify-center flex-wrap p-4 lg:p-16`
const TextLogo = tw.h2`w-full text-center lg:text-3xl`
const Form = tw.form`lg:w-10/12 flex flex-col gap-4 items-center`
const Label = tw.label`text-sm lg:text-lg`
const ContentInput = tw.div`flex items-center bg-white dark:bg-[#0A0A0A] rounded-xl p-4`
const Input = tw.input`lg:text-lg w-10/12 focus:outline-none bg-transparent`
const ButtonForm = tw.button`w-full lg:w-10/12 bg-blue-button py-2 px-4 rounded-xl flex justify-center transition-all duration-300 text-white text-xl hover:dark:bg-blue-800 mb-10`
