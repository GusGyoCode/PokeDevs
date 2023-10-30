import Image from "next/image"
import useFetch from "http-react"

export default function CardImage({ url }: { url: string }) {
  const { data, loading } = useFetch(url, {
    onResolve(data) {
      console.log(data)
    },
  })
  return (
    <Image
      src={loading ? "/img/loadingImage.png" : data.sprites.front_default}
      alt="pokemon"
      width={320}
      height={270}
      className={`w-32 h-32 mx-auto ${loading && "animate-pulse"}`}
    />
  )
}
