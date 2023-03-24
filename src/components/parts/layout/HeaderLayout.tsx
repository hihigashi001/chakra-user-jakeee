import { memo, ReactNode } from "react"
import Header from "./Header"

type Props = {
  children: ReactNode
}

const HeaderLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default memo(HeaderLayout)
