import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react"
import { memo, useState, ChangeEvent } from "react"
import PrimaryButton from "@/components/parts/button/PrimaryButton"
import { useAuth } from "@/hooks/useAuth"

const Login = () => {
  const { login, loading } = useAuth()
  const [userId, setUserId] = useState<string>("")

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value)
  }

  const handleOnClick = () => login(userId)

  return (
    <Flex align="center" height="100vh" justify="center">
      <Box bg="white" borderRadius="md" p={4} shadow="md" w="sm">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザ管理アプリ
        </Heading>
        <Divider />
        <Stack px={10} py={4} spacing={6}>
          <Input onChange={handleOnChange} placeholder="ユーザID" value={userId} />
          <PrimaryButton disabled={userId === ""} loading={loading} onClick={handleOnClick}>
            ログイン1
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
}

export default memo(Login)
