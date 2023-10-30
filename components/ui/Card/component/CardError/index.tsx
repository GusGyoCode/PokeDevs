import Button from "@/components/ui/Button"
import tw from "twin.macro"

const CardErrorContent = tw.article`w-full h-[298px] bg-red-500/50 rounded-md flex justify-center items-center flex-col gap-4`

export default function CardError({ click }: { click: any }) {
  return (
    <CardErrorContent>
      <h2 className="text-xl text-red-500">Error al cargar el pokemon</h2>
      <Button click={() => click}>Recargar</Button>
    </CardErrorContent>
  )
}
