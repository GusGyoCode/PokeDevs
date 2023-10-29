import Image from "next/image"
import tw from "twin.macro"
import { useState } from "react"
import { useTheme } from "next-themes"
import MenuHeader from "./component/menu"
import { useRouter } from "next/router"
import { ContentInput, Input } from "@/components/Login"
import { AiOutlineSearch } from "react-icons/ai"
import ButtonDark from "@/components/ui/DarMode/buttonDark"

const Header = tw.header`w-full flex items-center justify-between p-4 border-b border-gray-300`
const ContentLogo = tw.div`flex items-center`
const Button = tw.button`w-24 bg-blue-button py-2.5 px-4 rounded-xl flex justify-center hover:bg-blue-500 transition-all duration-300 dark:bg-blue-button hover:dark:bg-blue-800 text-white font-bold ml-2`

export default function HeaderComponent() {
  const [view, setView] = useState(false)
  const { theme, setTheme } = useTheme()
  const { push } = useRouter()

  return (
    <Header>
      <ContentLogo>
        <Image
          src="/img/logo.png"
          width={248}
          height={247}
          className="w-24 mr-4"
          alt="Logo"
        />
        <ContentInput>
          <AiOutlineSearch className="text-xl mr-2" />
          <Input type="search" placeholder="Buscar Pokemon..." />
        </ContentInput>
        <Button>Buscar</Button>
      </ContentLogo>
      <div className="relative">
        <Image
          src="/img/avatar.png"
          className="w-10 h-10 rounded-full border-2 border-purple-700 p-0.5 cursor-pointer"
          onClick={() => {
            setView(!view)
          }}
          width={248}
          height={247}
          alt="avatar"
        />
        {view && (
          <MenuHeader>
            <MenuHeader.Item
              click={() => {
                setView(!view)
              }}
            >
              <div className="flex flex-col font-bold">
                Signed is as
                <span>gustavo@gmail.com</span>
              </div>
            </MenuHeader.Item>
            <MenuHeader.Container>
              <MenuHeader.Item
                className="hover:bg-[#F4256D]/[.15] text-[#F4256D]"
                click={() => {
                  void push("/login")
                }}
              >
                Log Out
              </MenuHeader.Item>
            </MenuHeader.Container>
            <MenuHeader.Item
              click={() => {
                setView(!view)
                theme === "dark" ? setTheme("light") : setTheme("dark")
              }}
            >
              <ButtonDark />
            </MenuHeader.Item>
          </MenuHeader>
        )}
      </div>
    </Header>
  )
}
