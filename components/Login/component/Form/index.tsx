import { AiFillEye } from "react-icons/ai"
import { BiSolidUser } from "react-icons/bi"
import { FaLock } from "react-icons/fa"
import tw from "twin.macro"
import styled from "styled-components"
import { useState } from "react"

interface ValidateProps {
  $isHidden?: boolean
  $isDashboard?: boolean
  $isValidate?: boolean
}
const ButtonForm = tw.button`w-full lg:w-10/12 bg-blue-button py-2 px-4 rounded-xl flex justify-center transition-all duration-300 text-white text-xl hover:dark:bg-blue-800 mb-10`
const Form = tw.form`lg:w-10/12 flex flex-col gap-4 items-center w-full`
const Label = tw.label`text-sm lg:text-lg`
export const ContentInput = styled.div<ValidateProps>(
  ({ $isHidden, $isDashboard, $isValidate }) => [
    $isHidden === true
      ? tw`hidden sm:flex`
      : $isDashboard === true
      ? tw`flex sm:hidden`
      : tw`flex`,
    $isValidate === true
      ? tw`border-red-600`
      : tw`border-gray-300 dark:border-none`,
    tw`items-center bg-white dark:bg-[#0A0A0A] rounded-xl p-2 border `,
  ],
)
export const Input = tw.input`lg:text-lg w-10/12 focus:outline-none bg-transparent`

export default function FormLogin({ data }: { data: any }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  })
  const [view, setView] = useState(false)
  const [validateCredentials, setValidateCredentials] = useState({
    email: false,
    password: false,
  })
  const handleCredentials = (e: any) => {
    const { name, value } = e.target
    setCredentials({
      ...credentials,
      [name]: value,
    })
  }
  const handleSubmit = (e: any) => {
    e.preventDefault()
    let validate = { email: false, password: false }
    if (credentials.email === "") {
      validate = { ...validate, email: true }
    }
    if (credentials.password === "") {
      validate = { ...validate, password: true }
    }
    if (!validate.email && !validate.password) {
      setValidateCredentials(validate)
      data(credentials)
    } else {
      setValidateCredentials(validate)
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <div className="w-full lg:w-10/12 flex gap-2 flex-col">
        <Label>Usuario</Label>
        <ContentInput $isValidate={validateCredentials.email}>
          <BiSolidUser className="text-xl mr-2" />
          <Input
            type="email"
            placeholder="Usuario@ejemplo.com"
            name="email"
            required
            onChange={handleCredentials}
          />
        </ContentInput>
        {validateCredentials.email && (
          <span className="text-xs text-red-500">Usuario esta vacio</span>
        )}
      </div>
      <div className="w-full lg:w-10/12 flex gap-2 flex-col">
        <Label>Contraseña</Label>
        <ContentInput $isValidate={validateCredentials.password}>
          <FaLock className="text-xl mr-2" />
          <Input
            type={view ? "text" : "password"}
            placeholder="**********"
            name="password"
            required
            onChange={handleCredentials}
          />
          <AiFillEye
            className="text-xl ml-2 cursor-pointer"
            onClick={() => {
              setView(!view)
            }}
          />
        </ContentInput>
        {validateCredentials.password && (
          <span className="text-xs text-red-500">Password esta vacio</span>
        )}
      </div>
      <ButtonForm>Iniciar Sesion</ButtonForm>
    </Form>
  )
}
