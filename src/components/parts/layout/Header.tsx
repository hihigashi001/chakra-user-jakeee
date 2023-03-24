import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react"
import { memo, useCallback } from "react"
import MenuIconButton from "../button/MenuIconButton"
import MenuDrawer from "./MenuDrawer"
import { useRouter } from "next/router"

const Header = () => {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onClickHome = useCallback(() => {
    router.push("/")
  }, [router])
  const onClickUserManagement = useCallback(() => {
    router.push("/userManagement")
  }, [router])
  const onClickSetting = useCallback(() => {
    router.push("/setting")
  }, [router])

  return (
    <>
      <Flex align="center" as="nav" bg="teal.500" color="gray.50" justify="space-between" padding={{ base: 3, md: 5 }}>
        <Flex _hover={{ cursor: "pointer" }} align="center" as="a" mr={8} onClick={onClickHome}>
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザ管理アプリ
          </Heading>
        </Flex>
        <Flex align="center" display={{ base: "none", md: "flex" }} flexGrow={2} fontSize="sm">
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>ユーザ一覧</Link>
          </Box>
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickSetting={onClickSetting}
        onClickUserManagement={onClickUserManagement}
        onClose={onClose}
      />
    </>
  )
}

export default memo(Header)
