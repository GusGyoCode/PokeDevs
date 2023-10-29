import tw from "twin.macro"
import Image from "next/image"

const Title = tw.div`w-full justify-between items-center flex`
const Weight = tw.div`bg-purple-800 text-white rounded-full px-4 py-1.5 font-semibold`
const Name = tw.h3`font-bold text-xl text-orange-600`

export default function Card() {
  return (
    <article className="w-full border border-gray-300 dark:border-gray-border hover:bg-gray-100 rounded-md hover:shadow-3xl flex flex-col p-4 gap-4 text-lg dark:bg-gray-bg">
      <Image
        src="/img/pokemon.png"
        alt="pokemon"
        width={320}
        height={270}
        className="w-32 h-32 mx-auto"
      />
      <Title>
        <span className="text-green-500 ">28/10/2023</span>
        <Weight>Peso: 56KG</Weight>
      </Title>
      <Name>Pokemon nombre</Name>
      <span>
        <strong className="text-purple-800">Movimientos:</strong> Patada,
        Puñetazo
      </span>
    </article>
  )
}
