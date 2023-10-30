import { BiSolidUser } from "react-icons/bi"
import { ContentInput, Input, Label } from "../Login/component/Form"
import Layout from "../ui/Layout"
import tw from "twin.macro"
import { useValue } from "atomic-state"
import { User } from "../Login/component/state"

const ContentPage = tw.section`w-full flex justify-center`
const Content = tw.article`w-full md:w-3/4 xl:w-1/2 2xl:w-1/3 flex justify-center border border-gray-300 rounded-md p-4 flex-wrap gap-4`
const Form = tw.div`w-full grid grid-cols-1 md:grid-cols-2 gap-3 items-center`
export default function UserComponent() {
  const user = useValue(User)
  return (
    <Layout title="PokeDevs | Usuario">
      <ContentPage>
        <Content>
          <h2 className="text-xl">Informacion de usuario</h2>
          <Form>
            <div className="flex flex-col gap-2 w-full">
              <Label>Nombre:</Label>
              <ContentInput $isDisabled={true}>
                <BiSolidUser className="text-xl mr-2" />
                <Input
                  type="text"
                  disabled
                  $isDisabled={true}
                  value={user?.name}
                />
              </ContentInput>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Apellido:</Label>
              <ContentInput $isDisabled={true}>
                <BiSolidUser className="text-xl mr-2" />
                <Input
                  type="text"
                  disabled
                  $isDisabled={true}
                  value={user?.lastName}
                />
              </ContentInput>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Correo:</Label>
              <ContentInput $isDisabled={true}>
                <BiSolidUser className="text-xl mr-2" />
                <Input
                  type="email"
                  disabled
                  $isDisabled={true}
                  value={user?.email}
                />
              </ContentInput>
            </div>
          </Form>
        </Content>
      </ContentPage>
    </Layout>
  )
}
