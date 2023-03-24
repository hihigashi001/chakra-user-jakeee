import { Box, Image, Stack, Text } from "@chakra-ui/react"
import { memo } from "react"

type Props = {
  id: number
  imageUrl: string
  userName: string
  fullName: string
  onClick: (id: number) => void
}

const UserCard = ({ id, imageUrl, userName, fullName, onClick }: Props) => {
  return (
    <Box
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      bg="white"
      borderRadius="10px"
      h="260"
      onClick={() => onClick(id)}
      p={4}
      shadow="md"
      w="260px"
    >
      <Stack textAlign="center">
        <Image alt={userName} borderRadius="full" boxSize="160px" m="auto" src={imageUrl} />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text color="gray" fontSize="sm">
          {fullName}
        </Text>
      </Stack>
    </Box>
  )
}

export default memo(UserCard)
