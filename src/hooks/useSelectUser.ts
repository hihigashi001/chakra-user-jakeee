import { User } from "@/types/user"
import { useCallback, useState } from "react"

type Props = {
  id: number
  users: User[]
  onOpen: () => void
}

export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const onSelectUser = useCallback(({ id, users, onOpen }: Props) => {
    const targetUser = users.find((user) => user.id === id)
    setSelectedUser(targetUser!)
    onOpen()
  }, [])

  return { selectedUser, onSelectUser }
}
