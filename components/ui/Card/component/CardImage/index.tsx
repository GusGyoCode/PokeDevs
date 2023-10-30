import Image from "next/image"
import useFetch from "http-react"
import Button from "@/components/ui/Button"

export default function CardImage({ url }: { url: string }) {
  const { data, loading, error, reFetch } = useFetch(url, {
    onResolve(data) {
      console.log(data)
    },
  })
  return (
    <div className="flex items-center flex-col gap-2">
      <Image
        src={
          loading
            ? "/img/loadingImage.png"
            : // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            error
            ? "/img/errorImage.png"
            : // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            !data.sprites.front_default
            ? "/img/loadingImage.png"
            : data.sprites.front_default
        }
        alt="pokemon"
        width={320}
        height={270}
        className={`w-32 h-32 mx-auto ${loading && "animate-pulse"}`}
      />
      {
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        error && (
          <>
            <h2 className="text-center text-xs text-red-500">
              Error al cargar la imagen intente de nuevo
            </h2>
            {/* eslint-disable-next-line @typescript-eslint/promise-function-async */}
            <Button click={() => reFetch()}>Recargar</Button>
          </>
        )
      }
    </div>
  )
}
