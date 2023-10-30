import tw from "twin.macro"

const LoadingContent = tw.article`w-full h-[298px] bg-gray-300 rounded-md animate-pulse`

export default function LoadingCard() {
  return <LoadingContent />
}
