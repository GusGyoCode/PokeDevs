import tw from "twin.macro"
import useFetch from "http-react"
import Progress from "../Pogress"
import CardComponent from "./component/CardComponent"
import CardError from "./component/CardError"

const LoadingCard = tw.article`w-full h-[298px] bg-gray-300 animate-pulse rounded-md flex justify-center items-center`

export default function Card({ url, click }: { url: string; click: any }) {
  const { data, loading, error, reFetch } = useFetch(url)
  return (
    <>
      {loading ? (
        <LoadingCard>
          <Progress class="w-16 h-16 animate-spin" />
        </LoadingCard>
      ) : // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      error ? (
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        <CardError click={() => reFetch()} />
      ) : (
        <CardComponent data={data} click={() => click(data)} />
      )}
    </>
  )
}
