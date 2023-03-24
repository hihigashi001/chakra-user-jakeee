import { memo } from "react"
import { HamburgerIcon } from "@chakra-ui/icons"
import { IconButton } from "@chakra-ui/react"

type Props = {
  onOpen: () => void
}

const MenuIconButton = ({ onOpen }: Props) => {
  return (
    <IconButton
      aria-label="メニューボタン"
      display={{ base: "block", md: "none" }}
      icon={<HamburgerIcon />}
      onClick={onOpen}
      size="sm"
      variant="unstyled"
    />
  )
}

export default memo(MenuIconButton)
