import tw from "twin.macro"
import useFetch from "http-react"
import Progress from "../Pogress"
import CardComponent from "./component/CardComponent"

const LoadingCard = tw.article`w-full h-[298px] bg-gray-300 animate-pulse rounded-md flex justify-center items-center`

export default function Card({ url }: { url: string }) {
  const { data, loading } = useFetch(url)
  return (
    <>
      {loading ? (
        <LoadingCard>
          <Progress class="w-16 h-16 animate-spin" />
        </LoadingCard>
      ) : (
        <CardComponent data={data} />
      )}
    </>
  )
}
