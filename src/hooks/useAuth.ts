import { useCallback, useState } from "react"
import axios from "axios"
import { User } from "@/types/user"
import { useRouter } from "next/router"
import { useMessage } from "./useMessage"
import { useLoginUser } from "./useLoginUser"

export const useAuth = () => {
  const { showMessage } = useMessage()
  const [loading, setLoading] = useState(false)
  const { setLoginUser } = useLoginUser()
  const router = useRouter()
  const login = useCallback(
    (id: string) => {
      setLoading(true)
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false
            setLoginUser({ ...res.data, isAdmin })
            showMessage({ title: "ログインしました", status: "success" })
            router.push("/")
          } else {
            showMessage({ title: "ログイン失敗しました。", status: "error" })
          }
        })
        .catch(() => showMessage({ title: "ログイン失敗しました。", status: "error" }))
        .finally(() => {
          setLoading(false)
        })
    },
    [router, showMessage, setLoginUser]
  )
  return { login, loading }
}
