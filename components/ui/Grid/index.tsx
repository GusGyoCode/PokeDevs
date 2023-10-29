import tw from "twin.macro"

const GridContent = tw.section`w-full grid gap-4 grid-cols-5 `

export default function Grid({ children }: { children: any }) {
  return <GridContent>{children}</GridContent>
}
