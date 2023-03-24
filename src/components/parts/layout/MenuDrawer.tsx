import { memo } from "react"
import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react"

type Props = {
  isOpen: boolean
  onClose: () => void
  onClickHome: () => void
  onClickUserManagement: () => void
  onClickSetting: () => void
}

const MenuDrawer = ({ isOpen, onClose, onClickHome, onClickUserManagement, onClickSetting }: Props) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left" size="xs">
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody bg="gray.100" p={0}>
            <Button onClick={onClickHome} w="100%">
              TOP
            </Button>
            <Button onClick={onClickUserManagement} w="100%">
              ユーザ一覧
            </Button>
            <Button onClick={onClickSetting} w="100%">
              設定
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default memo(MenuDrawer)
