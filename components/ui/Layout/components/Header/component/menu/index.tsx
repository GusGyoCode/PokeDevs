import tw from "twin.macro"

const Menu = tw.nav`absolute top-14 right-0 bg-white dark:bg-[#16181A] py-2 rounded-xl w-[255px] z-10 shadow-3xl`
const MenuContainer = tw.div`border-y border-black/20 py-1 my-1 dark:border-white/25`

export default function MenuHeader({ children }: { children: any }) {
  return <Menu>{children}</Menu>
}

MenuHeader.Container = function Container({ children }: { children: any }) {
  return <MenuContainer>{children}</MenuContainer>
}

interface Props {
  children: any
  click: any
  className?: string
}
MenuHeader.Item = function Item(props: Props) {
  const {
    children,
    click,
    className = "hover:bg-black/[.15] dark:hover:bg-white/[.15]",
  } = props
  return (
    <div
      className={`p-2 rounded-xl ${className} cursor-pointer mx-2`}
      onClick={() => click()}
    >
      {children}
    </div>
  )
}
