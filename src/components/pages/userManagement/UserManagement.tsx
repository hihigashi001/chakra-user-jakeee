import { Center, Spinner, useDisclosure, Wrap, WrapItem } from "@chakra-ui/react"
import { memo, useCallback, useEffect } from "react"
import UserCard from "./UserCard"
import { useAllUsers } from "@/hooks/useAllUsers"
import UserDetailModal from "./UserDetailModal"
import { useSelectUser } from "@/hooks/useSelectUser"
import { useLoginUser } from "@/hooks/useLoginUser"

const UserManagement = () => {
  const { loginUser } = useLoginUser()
  const { onSelectUser, selectedUser } = useSelectUser()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { getUsers, users, loading } = useAllUsers()

  const handleOnClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen })
    },
    [onOpen, onSelectUser, users]
  )

  useEffect(() => getUsers(), [getUsers])

  if (loading)
    return (
      <Center h="10vh">
        <Spinner />
      </Center>
    )

  return (
    <>
      <Wrap justify="center" p={{ base: 4, md: 10 }}>
        {users.map((user) => (
          <WrapItem key={user.id}>
            <UserCard
              fullName={user.name}
              id={user.id}
              imageUrl="https://source.unsplash.com/random"
              onClick={handleOnClickUser}
              userName={user.username}
            />
          </WrapItem>
        ))}
      </Wrap>
      <UserDetailModal isAdmin={loginUser?.isAdmin} isOpen={isOpen} onClose={onClose} user={selectedUser} />
    </>
  )
}

export default memo(UserManagement)
