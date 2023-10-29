import tw from "twin.macro"
import Progress from "../Pogress"

const Page = tw.section`w-full h-screen flex justify-center items-center`

export default function PageLoading() {
  return (
    <Page>
      <Progress class="w-16 h-16 animate-spin" />
    </Page>
  )
}
