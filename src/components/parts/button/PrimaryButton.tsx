import { memo, ReactNode } from "react"
import { Button } from "@chakra-ui/react"

type Props = {
  children: ReactNode
  onClick: () => void
  loading?: boolean
  disabled?: boolean
}

const PrimaryButton = ({ children, onClick, loading = false, disabled = false }: Props) => {
  return (
    <Button
      _hover={{ opacity: 0.8 }}
      bg="teal.400"
      color="white"
      isDisabled={disabled || loading}
      isLoading={loading}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export default PrimaryButton
