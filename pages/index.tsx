import ButtonDark from "@/components/ui/DarMode/buttonDark"
import Head from "next/head"
import styled from "styled-components"
import tw from "twin.macro"

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className="flex h-screen items-center justify-center p-24 flex-col">
        <StyledButton>In Style</StyledButton>
        <br />
        <TailwindButton>Styled with tailwind</TailwindButton>
        <br />
        <ButtonDark />
      </main>
    </>
  )
}

const TailwindButton = tw.button`
bg-amber-800 hover:bg-amber-500 text-white font-bold py-2 px-4 border border-white rounded
`

const StyledButton = styled.button`
  background: red;
  color: white;
  font-size: 1em;
  text-align: center;
  padding: 0.25em 1em;
  border: 2px solid white;
`
