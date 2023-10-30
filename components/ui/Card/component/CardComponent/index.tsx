import tw from "twin.macro"
import { format } from "date-fns"
import styled from "styled-components"
import CardImage from "../CardImage"

const Title = tw.div`w-full justify-between items-center flex`
const Weight = styled.div(({ color }) => [
  color === "fire"
    ? tw`bg-red-500`
    : color === "water"
    ? tw`bg-blue-500`
    : color === "poison"
    ? tw`bg-purple-800`
    : color === "grass"
    ? tw`bg-green-500`
    : tw`bg-gray-500`,
  tw`text-white rounded-full px-4 py-1.5 font-semibold text-sm`,
])
const Name = tw.h3`font-bold text-xl text-orange-600`

export default function CardComponent({ data }: { data: any }) {
  return (
    <article className="w-full border border-gray-300 dark:border-gray-border hover:bg-gray-100 rounded-md hover:shadow-3xl flex flex-col p-4 gap-4 text-lg dark:bg-gray-bg cursor-pointer">
      <CardImage url={data.forms[0].url} />
      <Title>
        <span className="text-green-500 text-sm">
          {format(Date.now(), "dd MMM yy")}
        </span>
        <Weight color={data.types[0].type.name}>Peso: {data.weight}HG</Weight>
      </Title>
      <Name>{data.name}</Name>
      <span>
        <strong className="text-purple-800">Movimientos:</strong>{" "}
        {data.moves.slice(0, 2).map((e: any) => `${e.move.name}, `)}
      </span>
    </article>
  )
}
