import { AiFillEye } from "react-icons/ai"
import { BiSolidUser } from "react-icons/bi"
import { FaLock } from "react-icons/fa"
import tw from "twin.macro"
import styled from "styled-components"

interface ValidateProps {
  $isHidden?: boolean
  $isDashboard?: boolean
}
const ButtonForm = tw.button`w-full lg:w-10/12 bg-blue-button py-2 px-4 rounded-xl flex justify-center transition-all duration-300 text-white text-xl hover:dark:bg-blue-800 mb-10`
const Form = tw.form`lg:w-10/12 flex flex-col gap-4 items-center w-full`
const Label = tw.label`text-sm lg:text-lg`
export const ContentInput = styled.div<ValidateProps>(
  ({ $isHidden, $isDashboard }) => [
    $isHidden === true
      ? tw`hidden sm:flex`
      : $isDashboard === true
      ? tw`flex sm:hidden`
      : tw`flex`,
    tw`items-center bg-white dark:bg-[#0A0A0A] rounded-xl p-2 border dark:border-none border-gray-300`,
  ],
)
export const Input = tw.input`lg:text-lg w-10/12 focus:outline-none bg-transparent`

export default function FormLogin() {
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <div className="w-full lg:w-10/12 flex gap-2 flex-col">
        <Label>Usuario</Label>
        <ContentInput>
          <BiSolidUser className="text-xl mr-2" />
          <Input
            type="email"
            placeholder="Usuario@ejemplo.com"
            name="email"
            required
          />
        </ContentInput>
      </div>
      <div className="w-full lg:w-10/12 flex gap-2 flex-col">
        <Label>Contraseña</Label>
        <ContentInput>
          <FaLock className="text-xl mr-2" />
          <Input
            type="password"
            placeholder="**********"
            name="password"
            required
          />
          <AiFillEye className="text-xl ml-2 cursor-pointer" />
        </ContentInput>
      </div>
      <ButtonForm>Iniciar Sesion</ButtonForm>
    </Form>
  )
}
