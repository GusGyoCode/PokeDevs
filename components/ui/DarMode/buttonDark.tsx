import tw from "twin.macro"

const ButtonDark = () => {
  return (
    <DarkBg>
      <DarkCircle />
    </DarkBg>
  )
}

const DarkBg = tw.div`w-14 h-8 flex items-center bg-gray-300 rounded-full px-1 dark:justify-end dark:bg-blue-button`
const DarkCircle = tw.div`w-6 h-6 bg-white rounded-full dark:bg-black`

export default ButtonDark
