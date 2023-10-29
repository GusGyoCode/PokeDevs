import { ContentInput, Input } from "@/components/Login"
import { AiOutlineSearch } from "react-icons/ai"
import tw from "twin.macro"
import styled from "styled-components"

interface ValidateProps {
  $isHidden: boolean
}

const Button = styled.button<ValidateProps>(({ $isHidden }) => [
  $isHidden ? tw`hidden sm:block` : tw`block sm:hidden`,
  tw`w-24 bg-blue-button py-2.5 px-4 rounded-xl hover:bg-blue-500 transition-all duration-300 dark:bg-blue-button hover:dark:bg-blue-800 text-white font-bold ml-2`,
])
export default function Search({
  hidden,
  dashboard,
}: {
  hidden: boolean
  dashboard?: boolean
}) {
  return (
    <>
      <ContentInput $isHidden={hidden} $isDashboard={dashboard}>
        <AiOutlineSearch className="text-xl mr-2" />
        <Input type="search" placeholder="Buscar Pokemon..." />
      </ContentInput>
      <Button $isHidden={hidden}>Buscar</Button>
    </>
  )
}
