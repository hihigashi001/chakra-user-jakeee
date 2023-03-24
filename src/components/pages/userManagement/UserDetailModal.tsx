import PrimaryButton from "@/components/parts/button/PrimaryButton"
import { User } from "@/types/user"
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react"
import { memo, useEffect, useState } from "react"

type Props = {
  user: User | null
  isOpen: boolean
  isAdmin?: boolean
  onClose: () => void
}

const UserDetailModal = ({ user, isOpen, isAdmin, onClose }: Props) => {
  const [username, setUsername] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phone, setPhone] = useState<string>("")

  useEffect(() => {
    setUsername(user?.username ?? "")
    setName(user?.name ?? "")
    setEmail(user?.email ?? "")
    setPhone(user?.phone ?? "")
  }, [user])

  const handleOnChangeName = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)
  const handleOnChangeFullName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)
  const handleOnChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
  const handleOnChangeTel = (e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)
  
  return (
    <Modal autoFocus={false} isOpen={isOpen} motionPreset="slideInBottom" onClose={onClose}>
      <ModalOverlay />
      <ModalContent pb={4}>
        <ModalHeader>ユーザ詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input isReadOnly={!isAdmin} onChange={handleOnChangeName} value={username} />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input isReadOnly={!isAdmin} onChange={handleOnChangeFullName} value={name} />
            </FormControl>
            <FormControl>
              <FormLabel>MAIL</FormLabel>
              <Input isReadOnly={!isAdmin} onChange={handleOnChangeEmail} value={email} />
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input isReadOnly={!isAdmin} onChange={handleOnChangeTel} value={phone} />
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin && (
          <ModalFooter>
            <PrimaryButton onClick={() => {}}>更新</PrimaryButton>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  )
}

export default memo(UserDetailModal)
