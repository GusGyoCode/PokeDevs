import Image from "next/image"
import tw from "twin.macro"
import { useState } from "react"
import { useTheme } from "next-themes"
import MenuHeader from "./component/menu"
import { useRouter } from "next/router"
import ButtonDark from "@/components/ui/DarMode/buttonDark"
import { setAtom, storage, useValue } from "atomic-state"
import { User, Token } from "@/components/Login/component/state"
import Link from "next/link"

const Header = tw.header`w-full flex items-center justify-between p-4 border-b border-gray-300 dark:border-gray-border dark:bg-gray-bg`
const ContentLogo = tw.div`flex items-center`

export default function HeaderComponent() {
  const [view, setView] = useState(false)
  const { theme, setTheme } = useTheme()
  const { push } = useRouter()

  const userState = useValue(User)

  return (
    <Header>
      <ContentLogo>
        <Link href={"/dashboard"} legacyBehavior={true}>
          <a>
            <Image
              src="/img/logo.png"
              width={96}
              height={27}
              className="w-24 mr-4"
              alt="Logo"
            />
          </a>
        </Link>
      </ContentLogo>
      <div className="relative">
        <Image
          src="/img/avatar.png"
          className="w-10 h-10 rounded-full border-2 border-purple-700 p-0.5 cursor-pointer"
          onClick={() => {
            setView(!view)
          }}
          width={32}
          height={32}
          alt="avatar"
          id="avatar"
        />
        {view && (
          <MenuHeader>
            <MenuHeader.Item
              click={() => {
                setView(!view)
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                push("/user")
              }}
            >
              <div className="flex flex-col font-bold">
                Iniciado Sesion con
                <span>{userState?.email}</span>
              </div>
            </MenuHeader.Item>
            <MenuHeader.Container>
              <MenuHeader.Item
                className="hover:bg-[#F4256D]/[.15] text-[#F4256D]"
                click={() => {
                  setAtom(User, null)
                  setAtom(Token, null)
                  // eslint-disable-next-line @typescript-eslint/no-floating-promises
                  storage.remove("User")
                  // eslint-disable-next-line @typescript-eslint/no-floating-promises
                  storage.remove("Token")
                  // eslint-disable-next-line @typescript-eslint/no-floating-promises
                  push("/login")
                }}
              >
                Cerrar sesion
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
