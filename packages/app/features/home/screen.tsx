import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  Sheet,
  Text,
  Theme,
  XStack,
  YStack,
  useToastController,
  useTheme,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import * as CryptoUtil from 'app/utils/CryptoUtils'
import { trpc } from 'app/utils/trpc'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const theme = useTheme()
  const { data } = trpc.user.test.useQuery()
  const [key, setKey] = useState('Ready')
  const [encrypted, setEncrypted] = useState('Not encrypted yet')
  const [decrypted, setDecrypted] = useState('Not decrypted yet')

  const linkProps = useLink({
    href: '/user/nate',
  })

  const test = async () => {
    const keyInfo = await CryptoUtil.derive_key('test')
    setKey(keyInfo.masterKey)
  }

  const handleEncrypt = async () => {
    const message = 'Hello World!'
    const encryptedText = await CryptoUtil.crypto_encrypt(message, key)
    setEncrypted(encryptedText)
  }

  const handleDecrypt = async () => {
    const decryptedText = await CryptoUtil.crypto_decrypt(encrypted, key)
    setDecrypted(decryptedText)
  }

  return (
    <Theme name="dark">
      <XStack backgroundColor={theme.background} w="100%" minHeight="100vh">
        <YStack>
          <Button onPress={test}>Test</Button>
          <Text>{key}</Text>
          <Button onPress={handleEncrypt}>Encrypt</Button>
          <Text>Encrypted message: {encrypted}</Text>
          <Button onPress={handleDecrypt}>Decrypt</Button>
          <Text>Decrypted message: {decrypted}</Text>
        </YStack>
        <XStack></XStack>
        <XStack></XStack>
      </XStack>
    </Theme>
  )
}
