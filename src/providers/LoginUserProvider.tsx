import { createContext, ReactNode, useState } from "react"
import { User } from "@/types/user"

type loginUser = User & { isAdmin: boolean }

export type LoginUserContextType = {
  loginUser: loginUser | null
  setLoginUser: (user: loginUser | null) => void
}

export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType)

export const LoginUserProvider = ({ children }: { children: ReactNode }) => {
  const [loginUser, setLoginUser] = useState<loginUser | null>(null)
  return <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>{children}</LoginUserContext.Provider>
}
