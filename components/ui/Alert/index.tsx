import tw from "twin.macro"
import { BsFillCheckCircleFill, BsXCircleFill } from "react-icons/bs"

const AlertC = tw.section`flex justify-center items-center fixed top-0 left-0 bg-black/30 w-full h-screen`
const Content = tw.article`w-72 bg-white rounded-md p-2 dark:bg-gray-border flex flex-col gap-4 `
const Status = tw.div`w-full flex items-center flex-col gap-4`
const Button = tw.button`w-24 bg-blue-button py-2.5 px-4 rounded-xl hover:bg-blue-500 transition-all duration-300 dark:bg-blue-button hover:dark:bg-blue-800 text-white font-bold ml-2`

export default function Alert({ children }: { children: any }) {
  return <AlertC>{children}</AlertC>
}

Alert.Container = function container({
  status,
  text,
  click,
}: {
  status?: boolean
  text?: string
  click?: any
}) {
  return (
    <Content>
      <Status>
        {status === true ? (
          <Status>
            <BsFillCheckCircleFill className="text-6xl text-green-500" />
            <h4 className="text-center text-green-500">
              Ha podido iniciar Sesion correctamente
            </h4>
          </Status>
        ) : (
          <>
            <Status>
              <BsXCircleFill className="text-6xl text-red-500" />
              <h4 className="text-center text-red-500">{text}</h4>
            </Status>
            <Button onClick={click}>Aceptar</Button>
          </>
        )}
      </Status>
    </Content>
  )
}
