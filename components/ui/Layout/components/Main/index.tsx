import tw from "twin.macro"

const Main = tw.main`w-full flex px-4 mt-4`

export default function MainComponent({ children }: { children: any }) {
  return <Main>{children}</Main>
}
