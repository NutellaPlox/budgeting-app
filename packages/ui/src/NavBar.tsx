import { Text, YStack } from 'tamagui'

export const NavBar = () => {
  return (
    <YStack backgroundColor="#393939" width="241px" minHeight="100vh" padding="12px">
      <YStack width="100%" justifyContent="center">
        <Text
          fontFamily="Noto Sans"
          fontSize="24px"
          textAlign="center"
          py="12px"
          bg="#242424"
          borderRadius="8px"
        >
          Budget
        </Text>
      </YStack>
      <YStack>
        <Text fontFamily="Noto Sans" fontSize="24px" textAlign="center" py="12px">
          Account
        </Text>
      </YStack>
      <YStack>
        <Text fontFamily="Noto Sans" fontSize="24px" textAlign="center" py="12px">
          Transactions
        </Text>
      </YStack>
      <YStack>
        <Text fontFamily="Noto Sans" fontSize="24px" textAlign="center" py="12px">
          Repeat
        </Text>
      </YStack>
    </YStack>
  )
}
