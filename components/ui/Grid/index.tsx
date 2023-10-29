import tw from "twin.macro"

const GridContent = tw.section`w-full grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5`

export default function Grid({ children }: { children: any }) {
  return <GridContent>{children}</GridContent>
}
