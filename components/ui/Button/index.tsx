import tw from "twin.macro"

const ButtonContent = tw.button`w-32 bg-blue-button py-2 px-4 rounded-xl flex justify-center hover:bg-blue-500 transition-all duration-300 dark:bg-blue-button hover:dark:bg-blue-800 text-white`

export default function Button({
  children,
  click,
}: {
  children: any
  click: any
}) {
  return <ButtonContent onClick={click}>{children}</ButtonContent>
}
